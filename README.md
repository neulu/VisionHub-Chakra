# API 를 이용해 등록 

- FOR CATALOG

{
	"xson_id": "eum_catalog_1688013907",
	"user_id": "calvin",
	"xson_gr": "eum_catalog",
	"xson_data": { 
		"catalog_id": "1",
		"catalog_name": "asml_log_type_1",
		"created": "2023-06-29 12:10:01"
	}
}

{
	"xson_id": "eum_catalog_1687981510",
	"user_id": "calvin",
	"xson_gr": "eum_catalog",
	"xson_data": { 
		"catalog_id": "2",
		"catalog_name": "asml_log_type_2",
		"created": "2023-06-29 12:20:02"
	}
}

{
	"xson_id": "eum_catalog_1687981513",
	"user_id": "calvin",
	"xson_gr": "eum_catalog",
	"xson_data": { 
		"catalog_id": "3",
		"catalog_name": "asml_log_type_3",
		"created": "2023-06-29 12:30:03"
	}
}

cluster_size: C / S / M / L / X

- FOR CLUSTER

{
	"xson_id": "eum_cluster_1687981539",
	"user_id": "calvin",
	"xson_gr": "eum_cluster",
	"xson_data": { 
		"cluster_name": "Trino-Cluster-1",
		"desciption": "ASML 로그 분석을 위한 Trino Cluster11111111",
		"status": "Starting",
		"enable_auto_scaling": "True",
		"created": "2023-06-01, 14:56:30",
		"catalogs": [ 1, 2, 3 ],
		"cluster_size": "C",
		"initial_workers": 3,
		"coordinator_heap_size": 64,
		"worker_heap_size": 48,
		"query_memory": 32,
		"query_memory_per_worker": 24,
		"cpu_allocation_for_each_coordinator": 4,
		"cpu_allocation_for_each_worker": 4,
		"enable_auto_scaling": "True",
		"max_workers": 10,
		"cpu_utilization_threshold": 70
	}
}


{
	"xson_id": "eum_cluster_1687981659",
	"user_id": "calvin",
	"xson_gr": "eum_cluster",
	"xson_data": { 
		"cluster_name": "Trino-Cluster-2",
		"desciption": "ASML 로그 분석을 위한 Trino Cluster2222222",
		"status": "Suspended",
		"enable_auto_scaling": "True",
		"created": "2023-06-02, 14:56:30",
		"catalogs": [ 2, 3 ],
		"cluster_size": "C",
		"initial_workers": 3,
		"coordinator_heap_size": 64,
		"worker_heap_size": 48,
		"query_memory": 32,
		"query_memory_per_worker": 24,
		"cpu_allocation_for_each_coordinator": 4,
		"cpu_allocation_for_each_worker": 4,
		"enable_auto_scaling": "True",
		"max_workers": 10,
		"cpu_utilization_threshold": 70
	}
}


{
	"xson_id": "eum_cluster_1687981839",
	"user_id": "calvin",
	"xson_gr": "eum_cluster",
	"xson_data": { 
		"cluster_name": "Trino-Cluster-3",
		"desciption": "ASML 로그 분석을 위한 Trino Cluster3333333",
		"status": "Running",
		"enable_auto_scaling": "True",
		"created": "2023-06-03, 14:56:30",
		"catalogs": [ 1 ],
		"cluster_size": "C",
		"initial_workers": 3,
		"coordinator_heap_size": 64,
		"worker_heap_size": 48,
		"query_memory": 32,
		"query_memory_per_worker": 24,
		"cpu_allocation_for_each_coordinator": 4,
		"cpu_allocation_for_each_worker": 4,
		"enable_auto_scaling": "True",
		"max_workers": 10,
		"cpu_utilization_threshold": 70
	}
}