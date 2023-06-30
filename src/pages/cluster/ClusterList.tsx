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
    useToast,
} from '@chakra-ui/react';

import BoardPaging from 'components/common/BoardPaging'
import { FiMoreVertical, FiEdit, FiDelete, FiRepeat } from 'react-icons/fi';
import { RiCheckDoubleLine, RiStopCircleLine, RiPlayCircleLine, RiPauseMiniLine, RiEdit2Line, RiUserSettingsLine, RiLoginCircleLine, RiDeleteBin6Line } from 'react-icons/ri';
import { LuLoader2 } from 'react-icons/lu';
import { MdPlayCircleOutline, MdOutlineStopCircle, MdOutlinePause } from 'react-icons/md';
import { CheckIcon, RepeatIcon, AddIcon, Search2Icon } from '@chakra-ui/icons'

import CreateClusterPop from 'components/cluster/CreateClusterPop'
import { useNavigate } from 'react-router-dom';
import { fetchCluster, ClusterData, CatalogData } from 'clients/cluster/FetchCluster'
  
const ClusterList = () : JSX.Element => { 

    const navigate = useNavigate();
    const toast = useToast()

    const totalPages : number = 1;
    const cntPerPage : number = 10;
    const currentPage: number = 1;

    const handlePageChange = (page: number) => {
        // 현재 페이지를 상태로 업데이트하거나 다른 동작을 수행합니다.
    };

    const popOverClick = (e: React.MouseEvent, menu : string) => {
        e.preventDefault()
        console.log(`popOverClick: ${menu}`)
        popOverClose()
    }

    const [isPopOverOpen, setIsPopOverOpen] = useState(false);

    const popOverOpen = () => setIsPopOverOpen(true);
    const popOverClose = () : void => setIsPopOverOpen(false);

    /** modal 작업 */
    const { isOpen, onOpen, onClose } = useDisclosure()

    /** 클러스터 삭제 이벤트  */
    const deleteCluster = (e: React.MouseEvent, clusterId: string) => {
        e.preventDefault()
        if(window.confirm("클러스터를 삭제 하시겠습니까?")) { 

            fetchCluster.deleteCluster(clusterId).then((res : any) => { 
                if(res.status === 200) {
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

            console.log(`> Deleted cluster_id: ${clusterId}`)
        }
    }

    /** 클러스터 수정 이벤트 */
    const editCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        console.log(`> Editing cluster_id: ${clusterId}`)
        navigate({pathname  : `/cluster/detail/${clusterId}` })
    }

    /** 클러스터 Owner 수정 이벤트 */
    const editClusterOwner = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        console.log(`> Editing cluster_owner: ${clusterId}`)
        navigate({pathname  : `/cluster/detail/${clusterId}` })
    }

    /** 클러스터 재기동 이벤트 */
    const restartCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 재시작 하시겠습니까?")) {
            console.log("Restarting Cluster..")
        }
    }

    /** 클러스터 재게 이벤트 */
    const resumeCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 재개 하시겠습니까?")) {
            console.log("Resuming Cluster..")
        }

    }

    /** 클러스터 정지 이벤트 */
    const stopCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 정지 하시겠습니까?")) {
            console.log("Stopping Cluster..")
        }

    }

    const [ clusters, setClusters] = useState<ClusterData[]>([])
    const [ catalogs, setCatalogs ] = useState<string[]>([])

    const loadClusters = () => { 
        fetchCluster.findClusters().then((res : any) => {            
            if(res.status === 200) { 
                setClusters(res.data)
            } else { 
                console.error(res.message)
            }
            fetchCluster.findCatalogs().then((res : any) => { 
                if(res.status === 200) { 

                    const refineCatalogs : string[] = []
                    res.data.map((data : CatalogData) => { 
                        refineCatalogs.push(data.xson_data.catalog_name)
                    })

                    setCatalogs(refineCatalogs)
                } else { 
                    console.error(res.message)
                }
            })
        })
    }

    useEffect(() => {
        loadClusters()
    }, []);

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
                                <Input type='text' placeholder='Search Clusters' />
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
                            <Th color={'white'}>Cluster Name</Th>
                            <Th color={'white'}>Status</Th>
                            <Th color={'white'}>Action</Th>
                            <Th color={'white'}>Worker Status</Th>
                            <Th color={'white'}>Created</Th>
                            <Th color={'white'} w={'80px'}>Edit</Th>
                        </Tr>
                        </Thead>
                        <Tbody>

                        {
                            clusters && clusters.map(cluster => {
                                return ( 
                                    <Tr _hover={{  bg: '#f2f2f2',  }} key={cluster.xson_id}>
                                        <Td borderBottom="2px" borderBottomColor={'#f2f2f2'}>
                                            <Text marginBottom={0} cursor="pointer" onClick={(e)=>editCluster(e, 1)}>{cluster.xson_data?.cluster_name || ''}</Text>
                                        </Td>
                                        <Td borderBottom="2px" borderBottomColor={'#f2f2f2'}>
                                            <Flex align="center">
                                                {
                                                    {
                                                        Starting: <><Icon mr="2" fontSize="24" as={LuLoader2} color={'#1abcfe'} />Starting</>,
                                                        Suspended: <><Icon mr="2" fontSize="25" as={RiPauseMiniLine} color={'#f24e1e'}/>Suspended</>,
                                                        Running: <><Icon mr="2" fontSize="25" as={RiCheckDoubleLine} color={'#0acf83'} />Running</>,
                                                        
                                                    }[cluster.xson_data?.status]                                                }
                                            </Flex>
                                        </Td>
                                        <Td borderBottom="2px" borderBottomColor={'#f2f2f2'}>
                                            <Flex align="center">
                                            {
                                                {
                                                    Suspended: <>
                                                        <Flex align="center" onClick={(e)=>resumeCluster(e, 1)} cursor="pointer">
                                                            <Icon mr="2" fontSize="25" as={RiPlayCircleLine} color={'#0acf83'} />Resume
                                                        </Flex>
                                                    </>,
                                                    Running: <>
                                                        <Flex align="center" onClick={(e)=>stopCluster(e, 1)} cursor="pointer">
                                                            <Icon mr="2" fontSize="25" as={RiStopCircleLine} color={'#f24e1e'} />Stop
                                                        </Flex>
                                                    </>,
                                                }[cluster.xson_data?.status]
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
                                                    icon={<FiMoreVertical />}
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
                                                    <MenuItem p={4} fontSize="14"  onClick={(e)=> editCluster(e, 1)}>
                                                        <Icon mr="2" fontSize="20" as={RiEdit2Line}  />
                                                        Edit Cluster
                                                    </MenuItem>
                                                    <MenuItem p={4} fontSize="14"  onClick={(e) => editClusterOwner(e, 1)}>
                                                        <Icon mr="2" fontSize="20" as={RiUserSettingsLine}  />
                                                        Change Owner
                                                    </MenuItem>
                                                    <MenuItem p={4} fontSize="14"  onClick={(e) => restartCluster(e, 1)}>
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