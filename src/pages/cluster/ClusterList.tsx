import React, { useEffect, useState } from 'react'
import MainPage from 'pages/MainPage'
import {
    IconButton,
    Box,
    Button,
    Spacer,
    Flex,
    Icon,
    Text,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem, 
    Input ,
    InputGroup,
    InputLeftElement, 
    InputRightElement,  
    useToast,
    Tooltip
} from '@chakra-ui/react';

import BoardPaging from 'components/common/BoardPaging'
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiCheckDoubleLine, RiStopCircleLine, RiPlayCircleLine, RiPauseMiniLine, RiEdit2Line, RiUserSettingsLine, RiLoginCircleLine, RiDeleteBin6Line, RiCloseFill } from 'react-icons/ri';
import { LuLoader2 } from 'react-icons/lu';
import { AddIcon, Search2Icon } from '@chakra-ui/icons'

import CreateClusterPop from 'components/cluster/CreateClusterPop'
import { useNavigate } from 'react-router-dom';
import { fetchCluster, ClusterData, CatalogData } from 'clients/cluster/FetchCluster'
import _ from "lodash"  

const ClusterList = () : JSX.Element => { 

    const navigate = useNavigate();
    const toast = useToast()

    /** Paging 관련 */
    const cntPerPage : number = 10
    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page: number) : void => {
        setCurrentPage(page);
    };

    /** modal 작업 */
    const { isOpen, onOpen, onClose } = useDisclosure()

    /** 클러스터 삭제 이벤트  */
    const deleteCluster = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        if(window.confirm("클러스터를 삭제 하시겠습니까?")) { 

            fetchCluster.deleteCluster(clusterId).then((res : any) => { 
                if(res && res.status === 200) {
                    toast({
                        title: "Cluster deleted.",
                        description: "클러스터가 정상 삭제 되었습니다.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    })

                    loadClusters()
                } else { 
                    toast({
                        title: "Error Occurred",
                        description: "클러스터 삭제 중 에러가 발생 했습니다.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    })
                }
            })
        }
    }

    /** 클러스터 수정 이벤트 */
    const editCluster = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        console.log(`> Editing cluster_id: ${clusterId}`)
        navigate({pathname  : `/cluster/detail/${clusterId}` })
    }

    /** 클러스터 Owner 수정 이벤트 */
    const editClusterOwner = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        console.log(`> Editing cluster_owner: ${clusterId}`)
        navigate({pathname  : `/cluster/detail/${clusterId}` })
    }

    /** 클러스터 재기동 이벤트 */
    const restartCluster = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        if(window.confirm("클러스터를 재시작 하시겠습니까?")) {
            console.log("Restarting Cluster..")
        }
    }

    /** 클러스터 재게 이벤트 */
    const resumeCluster = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        if(window.confirm("클러스터를 재개 하시겠습니까?")) {
            console.log("Resuming Cluster..")
        }

    }

    /** 클러스터 정지 이벤트 */
    const stopCluster = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        if(window.confirm("클러스터를 정지 하시겠습니까?")) {
            console.log("Stopping Cluster..")
        }

    }

    const [ clusters, setClusters] = useState<ClusterData[]>([])
    const [ catalogs, setCatalogs ] = useState<string[]>([])

    const loadClusters = () : void => { 
        fetchCluster.findClusters().then((res : any) => {       
            
            setTotalPages(Math.ceil(res.data.length / cntPerPage))
            
            if(res.status === 200) { 
                const offset = (currentPage - 1) * cntPerPage;
                setClusters(_.sortBy(res.data.slice(offset, offset + cntPerPage), "created"));
                // setClusters(res.data)
            } else { 
                console.error(res.message)
            }
            fetchCluster.findCatalogs().then((res : any) => { 
                if(res.status === 200) { 
                    const refineCatalogs : string[] = []
                    res.data.map((data : CatalogData) => refineCatalogs.push(data.xson_data.catalog_name))
                    setCatalogs(_.sortBy(refineCatalogs))
                } else { 
                    console.error(res.message)
                }
            })
        })
    }

    useEffect(() => {
        loadClusters()
    }, [currentPage]);

    const ClsuterStatus = (status : string) : JSX.Element => { 

        return (
            <></>
        )

    }

    return ( 
        <>
            <MainPage children={<>
                <Box>
                    <Flex align="center" justifyContent={'space-between'} pb={4}>
                        <Text fontSize="3xl" fontWeight={'bold'}>Cluster</Text>
                        <Button colorScheme={'black.500'} color='#fff' background='#333' borderRadius={'md'} width={"170px"} height={'40px'} fontSize={'14px'} onClick={onOpen} _hover={{ bg: '#444'}}>
                            <AddIcon mr={2} />
                            Create Cluster
                        </Button>
                    </Flex>
                    
                    <Box pb={2}>
                        <Flex align="center" justifyContent={'space-between'}>
                            <Text size={'md'} fontWeight={'bold'} m={0}>Trino Cluster (총{clusters.length || 0}개)</Text>
                            <Flex>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon />
                                </InputLeftElement>
                                <Input type='text' placeholder='Search Clusters' _placeholder={{ color: '#bbb' }} />
                                <InputRightElement pointerEvents='none'>
                                    <Icon mr="2" fontSize="20"  as={RiCloseFill} color={'#2b4d82'} />
                                </InputRightElement>
                            </InputGroup>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>

                <TableContainer marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant="simple" >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead bgColor={"#333"}>
                        <Tr h={'25px'} >
                            <Th color={'white'} textTransform="none">Cluster Name</Th>
                            <Th color={'white'} textTransform="none">Status</Th>
                            <Th color={'white'} textTransform="none">Action</Th>
                            <Th color={'white'} textTransform="none">Worker</Th>
                            <Th color={'white'} textTransform="none">Created</Th>
                            <Th color={'white'} textTransform="none" w={'80px'}></Th>
                        </Tr>
                        </Thead>
                        <Tbody>

                        {
                            clusters && clusters.map(cluster => {
                                return ( 
                                    <Tr _hover={{  bg: '#f2f2f2',  }} key={cluster.xson_id}>
                                        <Td borderBottom="2px" borderBottomColor={'#f2f2f2'}>
                                            <Text marginBottom={0} cursor="pointer" onClick={(e)=>editCluster(e, cluster.xson_id)}>{cluster.xson_data?.cluster_name || ''}</Text>
                                        </Td>
                                        <Td borderBottom="2px" borderBottomColor={'#f2f2f2'}>
                                            <Flex align="center">
                                                {cluster.xson_data?.status ?
                                                    {
                                                        Starting: <><Icon mr="2" fontSize="24" as={LuLoader2} color={'#1abcfe'} /><Tooltip hasArrow label='Cluster is starting' bg='#101230' color='white'>Starting</Tooltip></>,
                                                        Suspended: <><Icon mr="2" fontSize="25" as={RiPauseMiniLine} color={'#f24e1e'}/><Tooltip hasArrow label='Cluster is suspended' bg='#101230' color='white'>Suspended</Tooltip></>,
                                                        Running: <><Icon mr="2" fontSize="25" as={RiCheckDoubleLine} color={'#0acf83'} /><Tooltip hasArrow label='Cluster is running' bg='#101230'color='white'>Running</Tooltip></>,
                                                        
                                                    }[cluster.xson_data?.status] : '-'
                                                }
                                            </Flex>
                                        </Td>
                                        <Td borderBottom="2px" borderBottomColor={'#f2f2f2'}>
                                            <Flex align="center">
                                            {cluster.xson_data?.status ?
                                                {
                                                    Suspended: <>
                                                        <Flex align="center" onClick={(e)=>resumeCluster(e, cluster.xson_id)} cursor="pointer">
                                                            <Icon mr="2" fontSize="25" as={RiPlayCircleLine} color={'#0acf83'} />Resume
                                                        </Flex>
                                                    </>,
                                                    Running: <>
                                                        <Flex align="center" onClick={(e)=>stopCluster(e, cluster.xson_id)} cursor="pointer">
                                                            <Icon mr="2" fontSize="25" as={RiStopCircleLine} color={'#f24e1e'} />Stop
                                                        </Flex>
                                                    </>,
                                                }[cluster.xson_data?.status] : '-'
                                            }
                                            </Flex>
                                        </Td>
                                        <Td>{ cluster.xson_data?.initial_workers || 0} </Td>
                                        <Td>{ cluster.xson_data?.created || ''}</Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton
                                                    p={0}
                                                    fontSize="22"
                                                    as={IconButton}
                                                    aria-label='Options'
                                                    icon={<FiMoreHorizontal />}
                                                    borderRadius={'full'}
                                                    bg={'none'}
                                                    _hover={{  
                                                        bg: '#bbb',  
                                                    }}
                                                />
                                                <MenuList>
                                                    <MenuItem p={4} fontSize="14" onClick={(e) => deleteCluster(e, cluster.xson_id)}>
                                                        <Icon mr="2" fontSize="20" as={RiDeleteBin6Line}  />
                                                        Delete Cluster
                                                    </MenuItem>
                                                    <MenuItem p={4} fontSize="14"  onClick={(e)=> editCluster(e, cluster.xson_id)}>
                                                        <Icon mr="2" fontSize="20" as={RiEdit2Line}  />
                                                        Edit Cluster
                                                    </MenuItem>
                                                    <MenuItem p={4} fontSize="14"  onClick={(e) => editClusterOwner(e, cluster.xson_id)}>
                                                        <Icon mr="2" fontSize="20" as={RiUserSettingsLine}  />
                                                        Change Owner
                                                    </MenuItem>
                                                    <MenuItem p={4} fontSize="14"  onClick={(e) => restartCluster(e, cluster.xson_id)}>
                                                        <Icon mr="2" fontSize="20" as={RiLoginCircleLine}  />
                                                        Restart
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                );
                            })
                        }
                        {!clusters || (!clusters.length && (
                            <Tr>
                                <Td  borderBottom="2px" borderBottomColor={'#f2f2f2'} colSpan={6} style={{textAlign: 'center'}}>
                                    No cluster has been created
                                </Td>
                            </Tr>
                        ))}

                        </Tbody>
                    </Table>
                </TableContainer>

                <BoardPaging
                    currentPage={currentPage}
                    cntPerPage={cntPerPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                <CreateClusterPop isOpen={isOpen} onClose={onClose} catalogs={catalogs} loadClusters={loadClusters}/>
            </>} />
        </>
    )
}

export default ClusterList