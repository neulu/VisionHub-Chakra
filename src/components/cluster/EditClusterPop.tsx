import React, { useEffect, useState } from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Spacer,
    Stack,
    FormControl,    
    Input,
    InputGroup,
    Text,
    Select,
    Checkbox,
    FormLabel,
    Divider,
    AbsoluteCenter,
    useToast
} from '@chakra-ui/react'
import { fetchCluster, ClusterType, ClusterData, CLUSTER_SIZE } from 'clients/cluster/FetchCluster';
import { useForm, SubmitHandler } from "react-hook-form";
import MultiSelectCatalogs from  'components/cluster/MultiSelectCatalogs'
import moment from "moment";

import _ from "lodash";

interface props {
    isOpen : boolean;
    onClose : () => void ;
    catalogs : string[];
    cluster : ClusterData | undefined;
    detailCluster: (cluster_id: string | undefined) => void;    
}

const EditClusterPop = ({ isOpen, onClose, catalogs, cluster, detailCluster } : props) : JSX.Element => {

    const toast = useToast()

    useEffect(() => {
        cluster?.xson_data.enable_auto_scaling && setEnableAutoScaling(cluster?.xson_data.enable_auto_scaling)
        if(cluster?.xson_data.catalogs !== undefined) setSelectedOptions(cluster.xson_data.catalogs)
    }, [cluster]);

    const { register, handleSubmit, clearErrors, formState: { errors }, setValue } = useForm<ClusterType>();

    const [ selectedOptions, setSelectedOptions ] = useState<string[]>([]);
    const [ clusterSize, setClusterSize ] = useState<boolean>(false)
    const [ enableAutoScaling, setEnableAutoScaling ] = useState<boolean>(false)


    const chgClusterSize = (e : React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === "S") { 
            setClusterSize(true)
            setValue("initial_workers", CLUSTER_SIZE.small.initial_workers)
            setValue("coordinator_heap_size", CLUSTER_SIZE.small.coordinator_heap_size)
            setValue("query_memory", CLUSTER_SIZE.small.query_memory)
            setValue("worker_heap_size", CLUSTER_SIZE.small.worker_heap_size)
            setValue("query_memory_per_worker", CLUSTER_SIZE.small.query_memory_per_worker)
            setValue("cpu_allocation_for_each_worker", CLUSTER_SIZE.small.cpu_allocation_for_each_worker)
            setValue("cpu_allocation_for_each_coordinator", CLUSTER_SIZE.small.cpu_allocation_for_each_coordinator)
            setValue("max_workers", CLUSTER_SIZE.small.max_workers)
            setValue("cpu_utilization_threshold", CLUSTER_SIZE.small.cpu_utilization_threshold)
        } else if(e.target.value === "M") { 
            setClusterSize(true)
            setValue("initial_workers", CLUSTER_SIZE.medium.initial_workers)
            setValue("coordinator_heap_size", CLUSTER_SIZE.medium.coordinator_heap_size)
            setValue("query_memory", CLUSTER_SIZE.medium.query_memory)
            setValue("worker_heap_size", CLUSTER_SIZE.medium.worker_heap_size)
            setValue("query_memory_per_worker", CLUSTER_SIZE.medium.query_memory_per_worker)
            setValue("cpu_allocation_for_each_worker", CLUSTER_SIZE.medium.cpu_allocation_for_each_worker)
            setValue("cpu_allocation_for_each_coordinator", CLUSTER_SIZE.medium.cpu_allocation_for_each_coordinator)
            setValue("max_workers", CLUSTER_SIZE.medium.max_workers)
            setValue("cpu_utilization_threshold", CLUSTER_SIZE.medium.cpu_utilization_threshold)
        } else if(e.target.value === "L") { 
            setClusterSize(true)
            setValue("initial_workers", CLUSTER_SIZE.large.initial_workers)
            setValue("coordinator_heap_size", CLUSTER_SIZE.large.coordinator_heap_size)
            setValue("query_memory", CLUSTER_SIZE.large.query_memory)
            setValue("worker_heap_size", CLUSTER_SIZE.large.worker_heap_size)
            setValue("query_memory_per_worker", CLUSTER_SIZE.large.query_memory_per_worker)
            setValue("cpu_allocation_for_each_worker", CLUSTER_SIZE.large.cpu_allocation_for_each_worker)
            setValue("cpu_allocation_for_each_coordinator", CLUSTER_SIZE.large.cpu_allocation_for_each_coordinator)
            setValue("max_workers", CLUSTER_SIZE.large.max_workers)
            setValue("cpu_utilization_threshold", CLUSTER_SIZE.large.cpu_utilization_threshold)
        } else if(e.target.value === "X") { 
            setClusterSize(true)
            setValue("initial_workers", CLUSTER_SIZE.xlarge.initial_workers)
            setValue("coordinator_heap_size", CLUSTER_SIZE.xlarge.coordinator_heap_size)
            setValue("query_memory", CLUSTER_SIZE.xlarge.query_memory)
            setValue("worker_heap_size", CLUSTER_SIZE.xlarge.worker_heap_size)
            setValue("query_memory_per_worker", CLUSTER_SIZE.xlarge.query_memory_per_worker)
            setValue("cpu_allocation_for_each_worker", CLUSTER_SIZE.xlarge.cpu_allocation_for_each_worker)
            setValue("cpu_allocation_for_each_coordinator", CLUSTER_SIZE.xlarge.cpu_allocation_for_each_coordinator)
            setValue("max_workers", CLUSTER_SIZE.xlarge.max_workers)
            setValue("cpu_utilization_threshold", CLUSTER_SIZE.xlarge.cpu_utilization_threshold)
        } else if(e.target.value === "C") { 
            setClusterSize(false)
            setValue("initial_workers", CLUSTER_SIZE.medium.initial_workers)
            setValue("coordinator_heap_size", CLUSTER_SIZE.medium.coordinator_heap_size)
            setValue("query_memory", CLUSTER_SIZE.medium.query_memory)
            setValue("worker_heap_size", CLUSTER_SIZE.medium.worker_heap_size)
            setValue("query_memory_per_worker", CLUSTER_SIZE.medium.query_memory_per_worker)
            setValue("cpu_allocation_for_each_worker", CLUSTER_SIZE.medium.cpu_allocation_for_each_worker)
            setValue("cpu_allocation_for_each_coordinator", CLUSTER_SIZE.medium.cpu_allocation_for_each_coordinator)
            setValue("max_workers", CLUSTER_SIZE.medium.max_workers)
            setValue("cpu_utilization_threshold", CLUSTER_SIZE.medium.cpu_utilization_threshold)
        } else { 
            setClusterSize(false)
            setValue("initial_workers", undefined)
            setValue("coordinator_heap_size", undefined)
            setValue("query_memory", undefined)
            setValue("worker_heap_size", undefined)
            setValue("query_memory_per_worker", undefined)
            setValue("cpu_allocation_for_each_worker", undefined)
            setValue("cpu_allocation_for_each_coordinator", undefined)
            setValue("max_workers", undefined)
            setValue("cpu_utilization_threshold", undefined)
        }
    }


    const onSubmit : SubmitHandler<ClusterType> = (data : ClusterType) => {

        selectedOptions.length > 0 && _.set(data, "catalogs", selectedOptions)
        _.set(data, "status", 'Running')
        _.set(data, "created", moment().format('YYYY-MM-DD HH:mm:ss'))

        const formData : ClusterData = { 
            xson_id: cluster?.xson_id || '',
            user_id: 'calvin',
            xson_gr: 'eum_cluster',
            xson_data: data
        }


        fetchCluster.postCluster(formData).then((res:any) => { 
            if(res.status === 200) {

                toast({
                    title: "Cluster modified.",
                    description: "클러스터가 정상 수정 되었습니다.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })

                detailCluster(cluster?.xson_id)
                onClose()
            } else { 
                console.error(res.message)
            }
        }) 
    }


    return ( 
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton _focus={{boxShadow: "none"}} />
                <ModalBody>
                <Box flex='1' bg='white' marginTop={5}>   
                    
                        <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">

                        <Input type="text" name="clusterName" autoComplete="off" placeholder="Cluster Name" defaultValue={cluster?.xson_data.cluster_name || ''} readOnly />
                        
                        <FormControl>
                            <InputGroup>
                            <Input { ...register("description", { required: false } )} type="text" name="description" autoComplete="off" placeholder="Description" onBlur={()=>clearErrors()} defaultValue={cluster?.xson_data.description || ''}/>
                            </InputGroup>
                            {errors.description && errors.description.type === "required" && (<Text fontSize='xs' marginBottom={0}>Please enter a description</Text>) }
                        </FormControl>

                        <FormControl>
                            <MultiSelectCatalogs label="Catalogs" options={catalogs} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                        </FormControl>


                        <FormControl>
                            <Select { ...register("cluster_size", { required: true } )} name="cluster_size" width={'auto'} placeholder={'Cluster Size'} defaultValue={cluster?.xson_data.cluster_size || ''} onChange={(e)=>chgClusterSize(e)}> 
                                <option value='C'>Custom</option>
                                <option value='S'>Small</option>
                                <option value='M'>Medium</option>
                                <option value='L'>Large</option>
                                <option value='X'>X-Large</option>
                            </Select>
                        </FormControl>
                        
                        <Box position='relative' padding='0'>
                        <Divider />
                        <AbsoluteCenter bg='white' px='0'>
                            <Text marginBottom={0}>Advanced Settings</Text>
                        </AbsoluteCenter>
                        </Box>

                        <FormControl variant="floating" id="initial_workers">
                            <Input { ...register("initial_workers", { required: false } )} type="text" name="initial_workers" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.initial_workers || undefined}  readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Initial Workers</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="coordinator_heap_size">
                            <Input { ...register("coordinator_heap_size", { required: false } )} type="text" name="coordinator_heap_size" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.coordinator_heap_size || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Coordinator Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="worker_heap_size">
                            <Input { ...register("worker_heap_size", { required: false } )} type="text" name="worker_heap_size" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.worker_heap_size || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Worker Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="query_memory">
                        <Input { ...register("query_memory", { required: false } )} type="text" name="query_memory" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.query_memory || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="query_memory_per_worker">
                            <Input { ...register("query_memory_per_worker", { required: false } )} type="text" name="query_memory_per_worker" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.query_memory_per_worker || undefined} readOnly={clusterSize} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory per Worker (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpuAllocationForEachCpu">
                        <Input { ...register("cpu_allocation_for_each_coordinator", { required: false } )} type="text" name="cpu_allocation_for_each_coordinator" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.cpu_allocation_for_each_coordinator || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each cpu</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpu_allocation_for_each_worker">
                        <Input { ...register("cpu_allocation_for_each_worker", { required: false } )} type="text" name="cpu_allocation_for_each_worker" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.cpu_allocation_for_each_worker || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each worker</FormLabel>
                        </FormControl>
                        
                        <FormControl>

                            <Checkbox { ...register("enable_auto_scaling", { required: false } )}
                                size='md' 
                                name='enable_auto_scaling'
                                border={1}
                                borderStyle={'none'}
                                borderColor={'gray.400'}
                                colorScheme='teal'
                                fontWeight='normal'
                                isChecked={enableAutoScaling}
                                onChange={()=>setEnableAutoScaling(!enableAutoScaling)}
                            >Enable Auto Scaling</Checkbox>
                                      
                        </FormControl>
                            
                        <FormControl variant="floating" id="max_workers">
                        <Input { ...register("max_workers", { required: true } )} type="text" name="max_workers" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.max_workers || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Max Workers</FormLabel>
                        </FormControl>


                        <FormControl variant="floating" id="cpu_utilization_threshold">
                        <Input { ...register("cpu_utilization_threshold", { required: true } )} type="text" name="cpu_utilization_threshold" autoComplete="off" placeholder=" " defaultValue={cluster?.xson_data.cpu_utilization_threshold || undefined} readOnly={clusterSize}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU Utilization Threshold</FormLabel>
                        </FormControl>

                        </Stack>
                    
                </Box>     
                <Spacer />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                    <Button colorScheme='teal' type='submit'>Submit</Button>
                </ModalFooter>
            </ModalContent>
            </form>
        </Modal>
        </>
    )
}

export default EditClusterPop