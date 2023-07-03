import React, { useState } from 'react'
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
    AbsoluteCenter
} from '@chakra-ui/react'
import { fetchCluster, ClusterData,  ClusterType } from 'clients/cluster/FetchCluster';
import { useForm, SubmitHandler } from "react-hook-form";
import MultiSelectCatalogs from  'components/cluster/MultiSelectCatalogs'

interface props {
    isOpen : boolean;
    onClose : () => void ;
    catalogs : string[];
    cluster : ClusterData | undefined;
    detailCluster: (cluster_id: string | undefined) => void;
}

const EditClusterPop = ({ isOpen, onClose, catalogs, cluster, detailCluster } : props) : JSX.Element => {

    interface FormData {
        cluster_name: string;
        description?: string;
        catalogs: string[];
        cluster_size: string;
        initial_workers?: number;
        coordinator_heap_size?: number;
        worker_heap_size?: number;
        query_memory?: number;
        query_memory_per_worker?: number;
        cpu_allocation_for_each_coordinator?: number;
        cpu_allocation_for_each_worker?: number;
        enable_auto_scaling: boolean;
        max_workers?: number;
        cpu_utilization_threshold?: number;
    }

    const onSubmit : SubmitHandler<FormData> = (data : FormData) => {
        console.log("submit click")
    }

    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<FormData>();

    const [ selectedOptions, setSelectedOptions ] = useState<string[]>([]);

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

                        <Input type="text" name="clusterName" autoComplete="off" placeholder="Cluster Name" defaultValue={"Trino-Cluster-1"} readOnly />
                        
                        <FormControl>
                            <InputGroup>
                            <Input { ...register("description", { required: true } )} type="text" name="description" autoComplete="off" placeholder="Description" onBlur={()=>clearErrors()} defaultValue={"ASML 로그 분석을 위한 Trino Cluster"}/>
                            </InputGroup>
                            {errors.description && errors.description.type === "required" && (<Text fontSize='xs' marginBottom={0}>Please enter a description</Text>) }
                        </FormControl>

                        

                        <FormControl>
                            <MultiSelectCatalogs label="Catalogs" options={catalogs} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                        </FormControl>


                        <FormControl>
                            <Select { ...register("cluster_size", { required: true } )} name="cluster_size" width={'auto'} placeholder={'Cluster Size'} defaultValue=""> 
                                <option value='custom'>Custom</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                                <option value='xlarge'>X-Large</option>
                            </Select>
                        </FormControl>
                        
                        <Box position='relative' padding='0'>
                        <Divider />
                        <AbsoluteCenter bg='white' px='0'>
                            <Text marginBottom={0}>Advanced Settings</Text>
                        </AbsoluteCenter>
                        </Box>

                        <FormControl variant="floating" id="initial_workers">
                            <Input { ...register("initial_workers", { required: false } )} type="text" name="initial_workers" autoComplete="off" placeholder=" " defaultValue={"3"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Initial Workers</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="coordinator_heap_size">
                            <Input { ...register("coordinator_heap_size", { required: false } )} type="text" name="coordinator_heap_size" autoComplete="off" placeholder=" " defaultValue={"64G"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Coordinator Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="worker_heap_size">
                            <Input { ...register("worker_heap_size", { required: false } )} type="text" name="worker_heap_size" autoComplete="off" placeholder=" " defaultValue={"48G"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Worker Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="query_memory">
                        <Input { ...register("query_memory", { required: false } )} type="text" name="query_memory" autoComplete="off" placeholder=" " defaultValue={"32G"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="query_memory_per_worker">
                            <Input { ...register("query_memory_per_worker", { required: false } )} type="text" name="query_memory_per_worker" autoComplete="off" placeholder=" " defaultValue={"24G"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory per Worker (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpuAllocationForEachCpu">
                        <Input { ...register("cpu_allocation_for_each_coordinator", { required: false } )} type="text" name="cpu_allocation_for_each_coordinator" autoComplete="off" placeholder=" " defaultValue={"4"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each cpu</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpu_allocation_for_each_worker">
                        <Input { ...register("cpu_allocation_for_each_worker", { required: false } )} type="text" name="cpu_allocation_for_each_worker" autoComplete="off" placeholder=" " defaultValue={"4"} />
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
                                      >Enable Auto Scaling</Checkbox>
                                      
                        </FormControl>
                            
                        <FormControl variant="floating" id="max_workers">
                        <Input { ...register("max_workers", { required: true } )} type="text" name="max_workers" autoComplete="off" placeholder=" " defaultValue={10}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Max Workers</FormLabel>
                        </FormControl>


                        <FormControl variant="floating" id="cpu_utilization_threshold">
                        <Input { ...register("cpu_utilization_threshold", { required: true } )} type="text" name="cpu_utilization_threshold" autoComplete="off" placeholder=" " defaultValue={70}/>
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