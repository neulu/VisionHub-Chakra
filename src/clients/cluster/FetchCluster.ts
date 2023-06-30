import { http } from 'clients/AxiosRequest'

export interface ClusterType {     
    cluster_name: string;
    description?: string;
    status?: string;
    created?: string;
    catalogs?: string[];
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

export interface ClusterData { 
    xson_id: string;
    user_id: string;
    xson_gr: string;
    xson_data: ClusterType;
}

export interface CatalogType { 
    catalog_id: number;
    catalog_name: string;
    created: string;
}

export interface CatalogData { 
    xson_id: string;
    user_id: string;
    xson_gr: string;
    xson_data: CatalogType;
}

const findClusters = async (): Promise<ClusterData[]> => { return await http.get<ClusterData[]>("/xson_list?xson_gr=eum_cluster") }
const findCluster = async (id: string): Promise<ClusterData> => { return await http.get<ClusterData>(`/xson_detail?xson_id=${id}`)}
const deleteCluster = async (id: string): Promise<ClusterData> => { return await http.post<ClusterData>(`/delete_xson?xson_id=${id}`)}

const postCluster = async (param : ClusterData): Promise<ClusterData> => { return await http.post<ClusterData>('/add_xson', param) }
const putCluster = async (param: ClusterData): Promise<ClusterData> => { return await http.post<ClusterData>(`/add_xson`, param) }

const findCatalogs = async (): Promise<CatalogData[]> => { return await http.get<CatalogData[]>("/xson_list?xson_gr=eum_catalog") }

export const fetchCluster = {
    findClusters,
    findCluster,
    deleteCluster,
    postCluster,
    putCluster,
    findCatalogs
}