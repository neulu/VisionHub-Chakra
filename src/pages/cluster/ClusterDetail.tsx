
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

import { fetchCluster, ClusterType, CatalogType, ChartData, ChartType } from 'clients/cluster/FetchClusterClient'
import _ from "lodash"
import moment from "moment";

const ClusterDetail = () : JSX.Element => {

    const toast = useToast()
    const params = useParams();

    const navigate = useNavigate();

    const goClusters = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.preventDefault()
        navigate("/cluster")
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ cluster, setCluster] = useState<ClusterType>()

    const [ catalogs, setCatalogs ] = useState<CatalogType[]>([])

    const [ charts, setCharts ] = useState<ChartType[]>([])

    const detailCluster = (cluster_name : string | undefined ) => { 
        if(cluster_name) { 
            fetchCluster.findCluster(cluster_name).then((res : any) => {
                if(res.data.message === "OK")  { 
                    setCluster(_.first(res.data.data))
                    
                    fetchCluster.findCatalogs().then((res) => { 
                        if(res.data.message === "OK") { 
                            const refineCatalogs : CatalogType[] = res.data.data
                            setCatalogs(_.sortBy(refineCatalogs, ['id']))
                        } else { 
                            console.error(res.data.message)
                        }

                        fetchCluster.findCharts().then((res : ChartData) => { 
                            if(res.data.message === "OK") { 
                                setCharts(res.data.data)
                            } else { 
                                console.error(res.data.message)
                            }
                        })
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

    /** catalog 명 필터 ( ID-> Name 전환 ) */
    const arr_catalogs : string[] = []
    catalogs.map((catalog : CatalogType) =>  
        cluster?.catalog_list.includes(catalog.id) && arr_catalogs.push(catalog.name)
    )

    useEffect(() => {
        detailCluster(params.cluster_name)
        // if(cluster?.xson_data.catalogs !== undefined) setSelectedOptions(cluster?.xson_data.catalogs)
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
                                { cluster?.name || '-'}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Description
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.cluster_view_data.description || '-'}</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Status
                            </Td>
                            <Td>
                                <Flex align="center">
                                    { cluster?.cluster_status ?
                                        {
                                            ON: <><Icon mr="2" fontSize="16" as={MdCircle} color={'green.500'}/>{ cluster?.cluster_status || ''}</>,
                                            OFF: <><Icon mr="2" fontSize="16" as={MdCircle} color={'red.500'}/>{ cluster?.cluster_status || ''}</>,
                                            PROCESS: <><Icon mr="2" fontSize="16" as={MdCircle} color={'yellow.500'}/>{ cluster?.cluster_status || ''}</>,
                                        }[cluster?.cluster_status] : '-'
                                    }
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Created
                            </Td>
                            <Td>
                            { moment.utc(cluster?.created_at).local().format('YYYY-MM-DD HH:mm:ss') || '' }
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Catalog
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ _.toString(arr_catalogs)  || '-'}</Text>
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
                                { cluster?.cluster_view_data.cluster_size ?
                                    {
                                        'Custom': <Text marginBottom={0}>Custom</Text>,
                                        'Small': <Text marginBottom={0}>Small</Text>,
                                        'Medium': <Text marginBottom={0}>Medium</Text>,
                                        'Large': <Text marginBottom={0}>Large</Text>,
                                        'X-Large': <Text marginBottom={0}>X-Large</Text>
                                    }[cluster?.cluster_view_data.cluster_size] : '-'
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
                                <Text marginBottom={0}>-</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Coordinator Heap Size
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.settings.values.coordinator.jvm.maxHeapSize || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Worker Heap Size
                            </Td>
                            <Td>
                               <Text marginBottom={0}>{ cluster?.settings.values.worker.jvm.maxHeapSize || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Query Memory
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.settings.values.server.config.query.maxMemory || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                Query Memory per Worker
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.settings.values.server.config.query.maxMemoryPerNode || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                CPU allocation for each coordinator
                            </Td>
                            <Td>                                
                                <Text marginBottom={0}>-</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                CPU allocation for each worker
                            </Td>
                            <Td>
                                <Text marginBottom={0}>-</Text>
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
                    isChecked={cluster?.settings.values.server.autoscaling.enabled === "true" ? true : false}
                >Enable Auto Scaling</Checkbox>
                <TableContainer flex={'1'} maxW={'80%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'md'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='#f0f0f0' width={'300px'}>
                                <Text marginBottom={0}>Max Workers</Text>
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.settings.values.server.autoscaling.maxReplicas || 0 }</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='#f0f0f0'>
                                CPU Utilzation Threshold
                            </Td>
                            <Td>
                                <Text marginBottom={0}>{ cluster?.settings.values.server.autoscaling.targetCPUUtilizationPercentage || 0 }</Text>
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

                <EditClusterPop isOpen={isOpen} onClose={onClose} catalogs={catalogs} charts={charts} cluster={cluster} detailCluster={detailCluster} />             
            </>} />

        </>
    )
}


export default ClusterDetail