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

const EditClusterPop = ({ isOpen, onClose } : any) : JSX.Element => {

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

                        <Input type="text" name="clusterName" autoComplete="off" placeholder="Cluster Name" defaultValue={"Trino-Cluster-1"} readOnly />
                        
                        <FormControl>
                            <InputGroup>
                            <Input { ...register("description", { required: true } )} type="text" name="description" autoComplete="off" placeholder="Description" onBlur={()=>clearErrors()} defaultValue={"ASML 로그 분석을 위한 Trino Cluster"}/>
                            </InputGroup>
                            {errors.description && errors.description.type === "required" && (<Text fontSize='xs'>Please enter a description</Text>) }
                        </FormControl>

                        <FormControl>

                            <MultiSelectCatalogs label="Catalogs" options={
                                ["asml_log_type_1", "asml_log_type_2", "asml_log_type_3"]
                            } />

                        </FormControl>


                        <FormControl>
                            <Select { ...register("clusterSize", { required: true } )} name="clusterSize" width={'auto'} placeholder={'Cluster Size'}> 
                                <option value='custom' selected>Custom</option>
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

                        <FormControl variant="floating" id="initialWorkers">
                            <Input placeholder=" " defaultValue={"3"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Initial Workers</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="coordinatorHeapSize">
                            <Input placeholder=" " defaultValue={"64G"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Coordinator Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="workerHeapSize">
                            <Input placeholder=" " defaultValue={"48G"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Worker Heap Size (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="queryMemory">
                            <Input placeholder=" " defaultValue={"32G"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="queryMemoryPerWorker">
                            <Input placeholder=" " defaultValue={"24G"}/>
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Query Memory per Worker (GB)</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpuAllocationForEachCpu">
                            <Input placeholder=" " defaultValue={"4"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each cpu</FormLabel>
                        </FormControl>

                        <FormControl variant="floating" id="cpuAllocationForEachWorker">
                            <Input placeholder=" " defaultValue={"4"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>CPU allocation for each worker</FormLabel>
                        </FormControl>
                        
                        <FormControl>

                            <Checkbox size='md' 
                                      name='enableAutoScaling'
                                      border={1}
                                      borderStyle={'none'}
                                      borderColor={'gray.400'}
                                      colorScheme='teal'
                                      fontWeight='normal'
                                      >Enable Auto Scaling</Checkbox>
                                      
                        </FormControl>
                            
                        <FormControl variant="floating" id="maxWorkers">
                            <Input placeholder=" " defaultValue={"10"} />
                            {/* It is important that the Label comes after the Control due to css selectors */}
                            <FormLabel fontWeight='normal'>Max Workers</FormLabel>
                        </FormControl>


                        <FormControl variant="floating" id="cpuUtilizationThreshold">
                            <Input placeholder=" " defaultValue={"70"} />
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