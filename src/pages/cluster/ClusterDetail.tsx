
import React, { useState, useEffect } from 'react'
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
    useDisclosure,
    useToast,
} from '@chakra-ui/react';

import MainPage from 'pages/MainPage'
import { MdCircle } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import EditClusterPop from "components/cluster/EditClusterPop"

import { fetchCluster, ClusterData, CatalogData } from 'clients/cluster/FetchCluster'
import _ from "lodash"

const ClusterDetail = () : JSX.Element => {

    const toast = useToast()
    const params = useParams();

    const navigate = useNavigate();

    const goClusters = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.preventDefault()
        navigate("/clusters")
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ cluster, setCluster] = useState<ClusterData>()
    const [ catalogs, setCatalogs ] = useState<string[]>([])
    const [ selectedOptions, setSelectedOptions ] = useState<string[]>([]);

    const detailCluster = (cluster_id : string | undefined ) => { 
        if(cluster_id) { 
            fetchCluster.findCluster(cluster_id).then((res : any) => {
                if(res.status === 200)  { 
                    setCluster(res.data)
                    fetchCluster.findCatalogs().then((res : any) => { 
                        if(res.status === 200) { 
                            const refineCatalogs : string[] = []
                            res.data.map((data : CatalogData) => refineCatalogs.push(data.xson_data.catalog_name))
                            setCatalogs(_.sortBy(refineCatalogs))
                        } else { 
                            console.error(res.message)
                        }
                    })
                } else { 
                    toast({
                        title: "Error Occurred",
                        description: "클러스터 조회 중 에러가 발생 했습니다.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    })
                }
            })
        }
    }

    useEffect(() => {
        detailCluster(params.cluster_id)
        console.log(cluster?.xson_data.catalogs)
        if(cluster?.xson_data.catalogs !== undefined) setSelectedOptions(cluster?.xson_data.catalogs)
    }, [params]);

    return (
        <>
            <MainPage children={<>
                <Box maxW={'80%'}>
                    <Flex align="center" justifyContent={'space-between'} >
                        <Text fontSize="2xl" fontWeight={'bold'}>기본정보</Text>
                        <Flex>
                            <Button size={'sm'} colorScheme={'blue'} borderRadius={'md'} width={"100px"} height={'32px'} marginRight={2} onClick={onOpen} bg="blue.500">Modify</Button>
                            <Button colorScheme={'blackAlpha.100'} color='#fff' background='#333' borderRadius={'md'} width={"100px"} height={'32px'} fontSize={'14px'} onClick={onOpen} _hover={{ bg: '#444'}}>
                                Update
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'md'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='#f0f0f0' width={'300px'}>
                                <Text marginBottom={0}>Name</Text>
                            </Td>
                            <Td>
                                { cluster?.xson_data.cluster_name || '-'}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Description
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.description || '-'}</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Status
                            </Td>
                            <Td>
                                <Flex align="center">
                                    <Icon mr="2" fontSize="16" as={MdCircle} color={'green.500'}/>{ cluster?.xson_data.status || ''}
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Created
                            </Td>
                            <Td>
                            { cluster?.xson_data.created || '-'}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Catalog
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ _.toString(cluster?.xson_data.catalogs)  || '-'}</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Image
                            </Td>
                            <Td>
                                <Text marginBottom={0}>asia-northeast-3-docker.pkg.dev/skt-datahub/emergingdp-registry/trino:405-amd64</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Cluster Size
                            </Td>
                            <Td>
                                { cluster?.xson_data.cluster_size ?
                                    {
                                        C: <Text marginBottom={0}>Custom</Text>,
                                        S: <Text marginBottom={0}>Small</Text>,
                                        M: <Text marginBottom={0}>Medium</Text>,
                                        L: <Text marginBottom={0}>Large</Text>,
                                        X: <Text marginBottom={0}>X-Large</Text>

                                    }[cluster?.xson_data.cluster_size] : '-'
                                }
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>
                <Spacer p={5}/>
                <Box>
                    <Text fontSize="2xl" fontWeight={'bold'}>세부정보</Text>
                </Box>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'md'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='#f0f0f0' width={'300px'}>
                                <Text marginBottom={0}>Initial Workers</Text>
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.initial_workers || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Coordinator Heap Size
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.coordinator_heap_size || 0 }G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Worker Heap Size
                            </Td>
                            <Td>
                               <Text marginBottom={0}>{ cluster?.xson_data.worker_heap_size || 0 }G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Query Memory
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.query_memory || 0 }G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Query Memory per Worker
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.query_memory_per_worker || 0 }G</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                CPU allocation for each coordinator
                            </Td>
                            <Td>                                
                                <Text marginBottom={0}>{ cluster?.xson_data.cpu_allocation_for_each_coordinator || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                CPU allocation for each worker
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.cpu_allocation_for_each_worker || 0 }</Text>
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
                    isChecked={cluster?.xson_data.enable_auto_scaling}
                >Enable Auto Scaling</Checkbox>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'md'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='#f0f0f0' width={'300px'}>
                                <Text marginBottom={0}>Max Workers</Text>
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.max_workers || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                CPU Utilzation Threshold
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.xson_data.cpu_utilization_threshold || 0 }</Text>
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>

                <Box maxW={'80%'} marginTop={5}>
                    <Flex justifyContent="flex-end">
                        <Button size={'sm'} colorScheme={'blue'} borderRadius={'md'} width={"120px"} marginRight={2}>Save</Button>
                        <Button size={'sm'} colorScheme={'blackAlpha'} borderRadius={'md'} width={"120px"} onClick={(e)=>goClusters(e)}>Discard</Button> 
                    </Flex>
                </Box>   

                <EditClusterPop isOpen={isOpen} onClose={onClose} catalogs={catalogs} cluster={cluster} detailCluster={detailCluster} />             
            </>} />

        </>
    )
}


export default ClusterDetail