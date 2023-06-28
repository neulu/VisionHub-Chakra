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

import { useForm, SubmitHandler } from "react-hook-form";
import MultiSelectCatalogs from  'components/cluster/MultiSelectCatalogs'
export default function CreateClusterPop ({ isOpen, onClose } : any) {

    type FormData = {
        clusterName: string
        description: string
        catalogs: string[]
        clusterSize: string
    }

    const onSubmit : SubmitHandler<FormData> = (data : FormData) => {
        console.log("submit click")
    }
    const { register, handleSubmit, watch, clearErrors, formState: { errors } } = useForm<FormData>();


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

                        <FormControl>
                            <InputGroup>
                                <Input {...register("clusterName", { required: true, minLength : 6 } )} type="text" name="clusterName" autoComplete="off" placeholder="Cluster Name" onBlur={()=>clearErrors()} />
                            </InputGroup>     
                            {errors.clusterName && errors.clusterName.type === "required" && (<Text fontSize='xs'>Please enter a cluster name</Text>) }
                            {errors.clusterName && errors.clusterName.type === "minLength" && (<Text fontSize='xs'>Please enter a cluster name of at least 6 characters</Text>) }  
                        </FormControl>   

                        

                        <FormControl>
                            <InputGroup>
                            <Input { ...register("description", { required: true, minLength : 6 } )} type="text" name="description" autoComplete="off" placeholder="Description" onBlur={()=>clearErrors()} />
                            </InputGroup>
                            {errors.description && errors.description.type === "required" && (<Text fontSize='xs'>Please enter a description</Text>) }
                            {errors.description && errors.description.type === "minLength" && (<Text fontSize='xs'>Please enter a description of at least 6 characters</Text>) }
                        </FormControl>



                        <FormControl>

                            <MultiSelectCatalogs label="Catalogs" options={
                                ["sample {us-east-1, us-east-2, ap-northeast-1, eu-central-1, eu-west-1, us-west-1 }", "tpcds", "tpch"]
                            } />

                        </FormControl>
                        <FormControl>
                            <Select { ...register("clusterSize", { required: true } )} name="clusterSize" width={'auto'} placeholder={'Cluster Size'}> 
                                <option value='custom'>custom</option>
                                <option value='small'>small</option>
                                <option value='medium'>medium</option>
                                <option value='large'>large</option>
                            </Select>
                        </FormControl>
                        
                        <Box position='relative' padding='0'>
                        <Divider />
                        <AbsoluteCenter bg='white' px='0'>
                            <Text marginBottom={0}>Advanced Settings</Text>
                        </AbsoluteCenter>
                        </Box>

                        <FormControl variant="floating" id="initialWorks">
                            <Input placeholder=" "/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Initial Workers</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="coordinatorHeapSize">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Coordinator Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="workerHeapSize">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Worker Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="queryMemory">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="queryMemoryPerWorker">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory per Worker (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpuAllocationForEachCpu">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each cpu</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpuAllocationForEachWorker">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each worker</FormLabel>
                        </FormControl>
                        
                        <FormControl>

                            <Checkbox size='md' 
                                      border={1}
                                      borderStyle={'none'}
                                      borderColor={'gray.400'}
                                      colorScheme='teal'
                                      fontWeight='normal'
                                      >Enable Auto Scaling</Checkbox>
                                      
                        </FormControl>
                            
                        <FormControl variant="floating" id="maxWorkers">
                            <Input placeholder=" " />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Max Workers</FormLabel>
                        </FormControl>


                        <FormControl variant="floating" id="cpuUtilizationThreshold">
                            <Input placeholder=" " />
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