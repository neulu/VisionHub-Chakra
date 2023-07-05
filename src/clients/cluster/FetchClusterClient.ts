import { http } from 'clients/AxiosRequest'


export interface ClusterData { 
    data: { 
        status: number | null,
        message: string,
        data : ClusterType[],
    },
    status?: number,
    statusText?: string,
    headers?: any,
    config?: any,
    request?: any
}


export interface ClusterType {   
    id?: number;  
    name: string;
    chart_id: number;
    catalog_list: number[];
    cluster_view_data : { 
        description?: string;
        cluster_size?: string;
    },
    settings : ClusterSettings,
    created_at?: string,
    updated_at?: string,
    cluster_status?: string
}

export interface ClusterSettings { 
    chart?: string;
    namespace: string;
    version?: string;
    values: { 
        image: { 
            repository: string;
            tag: string;
        },
        imagePullSecrets: [
            {
                name: string;
            }
        ],
        additionalConfigProperties : string[];
        server : { 
            workers: number;
            config: { 
                query: { 
                    maxMemory: string
                    maxMemoryPerNode: string;
                }
            },
            autoscaling: { 
                enabled: string;
                maxReplicas: number;
                targetCPUUtilizationPercentage: number;
            },
        },
        coordinator: { 
            jvm: { 
                maxHeapSize: string;
            }
        },
        worker: { 
            jvm: { 
                maxHeapSize: string;
            }
        }
    }
}

export const REQ_SETTINGS : ClusterSettings = { 
    namespace: "idp-dev",
    values: { 
        image: { 
            repository: "asia-northeast3-docker.pkg.dev/skt-datahub/emergingdp-registry/trino",
            tag: "405-amd64"
        },
        imagePullSecrets: [
            {
                name: "idp-registry"
            }
        ],
        additionalConfigProperties : ["plugin.load_type: DYNAMIC"],
        server : { 
            workers: 3,
            config: { 
                query: { 
                    maxMemory: "8GB",
                    maxMemoryPerNode: "4GB"
                }
            },
            autoscaling: { 
                enabled: "true",
                maxReplicas: 5,
                targetCPUUtilizationPercentage: 70
            },
        },
        coordinator: { 
            jvm: { 
                maxHeapSize: "16G"
            }
        },
        worker: { 
            jvm: { 
                maxHeapSize: "16G"
            }
        }
    }
}

export interface FormData {     
    name: string;
    description?: string;
    cluster_status?: string;
    created_at?: string;
    catalog_list?: number[];
    chart_id: number;
    cluster_size?: string;
    initial_workers?: number;
    coordinator_heap_size?: number;
    worker_heap_size?: number;
    query_memory?: number;
    query_memory_per_worker?: number;
    cpu_allocation_for_each_coordinator?: number;
    cpu_allocation_for_each_worker?: number;
    enable_auto_scaling?: boolean;
    max_workers?: number;
    cpu_utilization_threshold?: number;
}

export interface CatalogType { 
    id: number;
    name: string;
    catalog_type: string;
    properties: string;
}

export interface CatalogData { 
    data: { 
        status: number;
        message: string;
        data: CatalogType[];
    },
    status?: number,
    statusText?: string,
    headers?: any,
    config?: any
    request?: {}
}

export const CLUSTER_SIZE = { 
    small : { 
        initial_workers: 2,
        coordinator_heap_size: 8,
        query_memory: 4,
        worker_heap_size: 8,
        query_memory_per_worker: 2,
        cpu_allocation_for_each_worker: 2,
        cpu_allocation_for_each_coordinator: 2,
        max_workers: 5,
        cpu_utilization_threshold: 50
    },
    medium : { 
        initial_workers: 4,
        coordinator_heap_size: 16,
        query_memory: 8,
        worker_heap_size: 16,
        query_memory_per_worker: 4,
        cpu_allocation_for_each_worker: 4,
        cpu_allocation_for_each_coordinator: 4,
        max_workers: 8,
        cpu_utilization_threshold: 50
    }, 
    large : { 
        initial_workers: 8,
        coordinator_heap_size: 32,
        query_memory: 16,
        worker_heap_size: 32,
        query_memory_per_worker: 8,
        cpu_allocation_for_each_worker: 8,
        cpu_allocation_for_each_coordinator: 8,
        max_workers: 16,
        cpu_utilization_threshold: 50
    },
    xlarge : { 
        initial_workers: 16,
        coordinator_heap_size: 64,
        query_memory: 32,
        worker_heap_size: 64,
        query_memory_per_worker: 16,
        cpu_allocation_for_each_worker: 16,
        cpu_allocation_for_each_coordinator: 16,
        max_workers: 32,
        cpu_utilization_threshold: 50
    }
}

export interface ChartType { 
    id: number;
    name: string;
    chart_name: string;
    default: boolean;
    version: string | null;
    repository: string | null;
    registry: {
        host: string;
        username: string;
        password: string | null;
        password_stdin: string;
        insecure: boolean
    };
    values: {}
}

export interface ChartData {
    data: { 
        status: number;
        message: string;
        data: ChartType[];
    },
    stauts: number;
    statusText: string;
    headers: any;
    config: any;
    request: {}
}

// 클러스터 목록 조회
const findClusters = async (): Promise<ClusterData> => { return await http.get<ClusterData>("/clusters") }

// 클러스터 단건 조회
const findCluster = async (cluster_name: string): Promise<ClusterData> => { return await http.get<ClusterData>(`/clusters?name=${cluster_name}`)}

// 클러스터 삭제
const delCluster = async (cluster_name: string): Promise<ClusterData> => { return await http.delete<ClusterData>(`/clusters?name=${cluster_name}`)}

// 클러스터 등록
const postCluster = async (param : ClusterType): Promise<ClusterType> => { return await http.post<ClusterType>('/clusters', param) }

// 클러스터 상태 변경
const updClusterStatus = async (cluster_name: string, cluster_status: string): Promise<ClusterData> => { return await http.put<ClusterData>(`/clusters/${cluster_name}/${cluster_status}`) }

// 차트 목록 조회
const findCharts = async (): Promise<ChartData> => { return await http.get<ChartData>("/charts") }

// 카탈로그 조회
const findCatalogs = async (): Promise<CatalogData> => { return await http.get<CatalogData>("/catalogs") }

export const fetchCluster = {
    findClusters,
    findCluster,
    delCluster,
    postCluster,
    updClusterStatus,
    findCharts,
    findCatalogs
}