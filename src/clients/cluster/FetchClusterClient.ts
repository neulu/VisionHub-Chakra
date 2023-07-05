import { http } from 'clients/AxiosRequest'

export interface ClusterData {     
    name: string;
    chart_id: number;
    catalog_list: number[];
    cluster_view_data : { 
        description: string;
        cluster_size: string;
    }
    ,settings : ClusterSettings
}

export interface ClusterSettings { 
    namespace: string;
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
                enabled: boolean;
                maxReplicas: number;
                targetCPUUtilizationPercentage: number;
            }
        }
    }
}

export interface CatalogType { 
    id: number;
    name: string;
    catalog_type: string;
    properties: string;
}

export interface CatalogData { 
    status: number;
    message: string;
    data: CatalogType[];
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
        password: string;
        password_stdin: string;
        insecure: boolean;
    },
    values: {}
}


export interface ChartData { 
    status: number;
    message: string;
    data: ChartType[];
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

// 클러스터 목록 조회
const findClusters = async (): Promise<ClusterData[]> => { return await http.get<ClusterData[]>("/charts") }

// 클러스터 단건 조회
const findCluster = async (cluster_name: string): Promise<ClusterData> => { return await http.get<ClusterData>(`/clusters?name=${cluster_name}`)}

// 클러스터 삭제
const delCluster = async (cluster_name: string): Promise<ClusterData> => { return await http.delete<ClusterData>(`/clusters?name=${cluster_name}`)}

// 클러스터 등록
const postCluster = async (param : ClusterData): Promise<ClusterData> => { return await http.post<ClusterData>('/clusters', param) }

// 클러스터 상태 변경
const updClusterStatus = async (cluster_name: string, cluster_status: string): Promise<ClusterData> => { return await http.put<ClusterData>(`/clusters/${cluster_name}/${cluster_status}`) }

// 차트 목록 조회
const findCharts = async (): Promise<ChartData[]> => { return await http.get<ChartData[]>("/charts") }

// 카탈로그 조회
const findCatalogs = async (): Promise<CatalogData[]> => { return await http.get<CatalogData[]>("/xson_list?xson_gr=eum_catalog") }

export const fetchCluster = {
    findClusters,
    findCluster,
    delCluster,
    postCluster,
    updClusterStatus,
    findCharts,
    findCatalogs
}