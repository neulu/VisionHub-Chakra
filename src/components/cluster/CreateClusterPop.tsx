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

import { useForm, SubmitHandler } from "react-hook-form";
import MultiSelectCatalogs from  'components/cluster/MultiSelectCatalogs'
import { fetchCluster, ClusterData, ClusterType  } from 'clients/cluster/FetchCluster';

import _ from "lodash";
import moment from "moment";

interface props {
    isOpen : boolean;
    onClose : () => void ;
    catalogs : string[];
    loadClusters: () => void;
}

const CreateClusterPop = ({ isOpen, onClose, catalogs, loadClusters } : props) : JSX.Element => {

    const toast = useToast()
    const onSubmit : SubmitHandler<ClusterType> = (data : ClusterType) => {

        selectedOptions.length > 0 && _.set(data, "catalogs", selectedOptions)
        _.set(data, "status", 'Running')
        _.set(data, "created", moment().format('YYYY-MM-DD HH:mm:ss'))

        const formData : ClusterData = { 
            xson_id: `eum_cluster_${Math.floor(Date.now() / 1000)}`,
            user_id: 'calvin',
            xson_gr: 'eum_cluster',
            xson_data: data
        }   
       
        fetchCluster.postCluster(formData).then((res:any) => { 
            if(res.status === 200) {

                toast({
                    title: "Cluster created.",
                    description: "클러스터가 정상 등록 되었습니다.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })


                loadClusters()
                setSelectedOptions([])
                reset()
                



                onClose()
            } else { 
                console.error(res.message)
            }
        }) 
    }

    const { register, handleSubmit, watch, clearErrors, formState: { errors }, reset } = useForm<ClusterType>();

    const [ selectedOptions, setSelectedOptions ] = useState<string[]>([]);
    
    const modelClose = () => { 
        reset()
        setSelectedOptions([])
        onClose()
    }

    return ( 
        <>
            <Modal isOpen={isOpen} onClose={modelClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton _focus={{boxShadow: "none"}} />
                <ModalBody>
                <Box flex='1' bg='white' marginTop={5}>
                    <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">

                        <FormControl>
                            <InputGroup>
                                <Input {...register("cluster_name", { required: true } )} type="text" name="cluster_name" autoComplete="off" placeholder="Cluster Name" onBlur={()=>clearErrors()} />
                            </InputGroup>     
                            {errors.cluster_name && errors.cluster_name.type === "required" && (<Text fontSize='xs' marginBottom={0}>Please enter a cluster name</Text>) }
                        </FormControl>   

                        <FormControl>
                            <InputGroup>
                            <Input { ...register("description", { required: false } )} type="text" name="description" autoComplete="off" placeholder="Description" onBlur={()=>clearErrors()} />
                            </InputGroup>
                            {errors.description && errors.description.type === "required" && (<Text fontSize='xs' marginBottom={0}>Please enter a description</Text>) }
                        </FormControl>

                        <FormControl>
                            <MultiSelectCatalogs label="Catalogs" options={catalogs} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                        </FormControl>

                        <FormControl>
                            <Select { ...register("cluster_size", { required: true } )} name="cluster_size" width={'auto'} placeholder={'Cluster Size'}> 
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
                            <Input { ...register("initial_workers", { required: false } )} type="text" name="initial_workers" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Initial Workers</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="coordinator_heap_size">
                            <Input { ...register("coordinator_heap_size", { required: false } )} type="text" name="coordinator_heap_size" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Coordinator Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="worker_heap_size">
                            <Input { ...register("worker_heap_size", { required: false } )} type="text" name="worker_heap_size" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Worker Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="query_memory">
                            <Input { ...register("query_memory", { required: false } )} type="text" name="query_memory" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="query_memory_per_worker">
                            <Input { ...register("query_memory_per_worker", { required: false } )} type="text" name="query_memory_per_worker" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory per Worker (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpu_allocation_for_each_coordinator">
                            <Input { ...register("cpu_allocation_for_each_coordinator", { required: false } )} type="text" name="cpu_allocation_for_each_coordinator" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each cpu</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpu_allocation_for_each_worker">
                            <Input { ...register("cpu_allocation_for_each_worker", { required: false } )} type="text" name="cpu_allocation_for_each_worker" autoComplete="off" placeholder=" " />
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
                            <Input { ...register("max_workers", { required: false } )} type="text" name="max_workers" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Max Workers</FormLabel>
                        </FormControl>


                        <FormControl variant="floating" id="cpu_utilization_threshold">
                            <Input { ...register("cpu_utilization_threshold", { required: false } )} type="text" name="cpu_utilization_threshold" autoComplete="off" placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU Utilization Threshold</FormLabel>
                        </FormControl>

                    </Stack>
                    
                </Box>     
                <Spacer />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={modelClose}>Close</Button>
                    <Button colorScheme='teal' type='submit'>Submit</Button>
                </ModalFooter>
            </ModalContent>
            </form>
        </Modal>
        </>
    )
}

export default CreateClusterPop