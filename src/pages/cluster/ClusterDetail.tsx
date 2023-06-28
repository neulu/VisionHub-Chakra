
import React, { useState } from 'react'
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Box,
    Flex,
    Text,
    Icon,
    Spacer,
    Checkbox,
    Button, 
    useDisclosure
} from '@chakra-ui/react';

import MainPage from 'pages/MainPage'
import { MdCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import EditClusterPop from "components/cluster/EditClusterPop"

const ClusterDetail = () : JSX.Element => {

    const navigate = useNavigate();   

    const goClusters = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.preventDefault()
        navigate("/cluster/list")
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <MainPage children={<>
                <Box maxW={'80%'}>
                    <Flex>
                        <Text fontSize="2xl">기본정보</Text>
                        <Spacer />
                        <Button size={'sm'} colorScheme={'teal'} borderRadius={'md'} width={"120px"} marginRight={2} onClick={onOpen}>Modify</Button>
                        <Button size={'sm'} colorScheme={'blackAlpha'} borderRadius={'md'} width={"120px"}>Update</Button> 
                    </Flex>
                </Box>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'sm'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='gray.300' width={'2xs'}>
                                <Text marginBottom={0}>Name</Text>
                            </Td>
                            <Td>
                                Trino-Cluster-1
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Description
                            </Td>
                            <Td>
                                <Text marginBottom={0}>ASML 로그 분석을 위한 Trino Cluster</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Status
                            </Td>
                            <Td>
                                <Flex align="center">
                                    <Icon mr="2" fontSize="16" as={MdCircle} color={'green.500'}/>ON
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Created
                            </Td>
                            <Td>
                                2023-04-25, 14:56:30 PM UTC+9:00
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Catalog
                            </Td>
                            <Td>
                                <Text marginBottom={0}>asml_log_type_1, asml_log_type_2, asml_log_type_3</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Image
                            </Td>
                            <Td>
                                <Text marginBottom={0}>asia-northeast-3-docker.pkg.dev/skt-datahub/emergingdp-registry/trino:405-amd64</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Cluster Size
                            </Td>
                            <Td>
                                <Text marginBottom={0}>Custom, Small, Medium, Large, X-Large</Text>
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>
                <Spacer p={5}/>
                <Box>
                    <Text fontSize="2xl">세부정보</Text>
                </Box>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'sm'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='gray.300' width={'2xs'}>
                                <Text marginBottom={0}>Initial Workers</Text>
                            </Td>
                            <Td>
                                <Text marginBottom={0}>3</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Coordinator Heap Size
                            </Td>
                            <Td>
                                <Text marginBottom={0}>64G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Worker Heap Size
                            </Td>
                            <Td>
                               <Text marginBottom={0}>48G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Query Memory
                            </Td>
                            <Td>
                                <Text marginBottom={0}>32G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Query Memory per Worker
                            </Td>
                            <Td>
                                <Text marginBottom={0}>24G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                CPU allocation for each coordinator
                            </Td>
                            <Td>                                
                                <Text marginBottom={0}>4</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                CPU allocation for each worker
                            </Td>
                            <Td>
                                <Text marginBottom={0}>4</Text>
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>
                <Spacer p={5}/>
                <Checkbox size='md' 
                    border={1}
                    borderStyle={'none'}
                    borderColor={'gray.400'}
                    colorScheme='teal'
                    fontWeight='normal'
                    >Enable Auto Scaling</Checkbox>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'sm'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='gray.300' width={'2xs'}>
                                <Text marginBottom={0}>Max Workers</Text>
                            </Td>
                            <Td>
                                <Text marginBottom={0}>10</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                CPU Utilzation Threshold
                            </Td>
                            <Td>
                                <Text marginBottom={0}>70</Text>
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>

                <Box maxW={'80%'} marginTop={5}>
                    <Flex justifyContent="flex-end">
                        <Button size={'sm'} colorScheme={'teal'} borderRadius={'md'} width={"120px"} marginRight={2}>Save</Button>
                        <Button size={'sm'} colorScheme={'blackAlpha'} borderRadius={'md'} width={"120px"} onClick={(e)=>goClusters(e)}>Discard</Button> 
                    </Flex>
                </Box>   

                <EditClusterPop isOpen={isOpen} onOpen={onOpen} onClose={onClose} />             
            </>} />

        </>
    )
}


export default ClusterDetail