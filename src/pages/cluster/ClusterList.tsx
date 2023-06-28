import React, { useState } from 'react'
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
  } from '@chakra-ui/react';

  import BoardPaging from 'components/common/BoardPaging'
  import { FiMoreVertical, FiEdit, FiDelete, FiRepeat } from 'react-icons/fi';
  import { BsFillPauseFill } from 'react-icons/bs';

  import { MdSquare, MdPlayCircleOutline } from 'react-icons/md';
  import { CheckIcon, RepeatIcon, AddIcon } from '@chakra-ui/icons'
  
  import CreateClusterPop from 'components/cluster/CreateClusterPop'
  import { useNavigate } from 'react-router-dom';

  
const ClusterList = () : JSX.Element => { 

    const navigate = useNavigate();

    const totalPages : number = 1;
    const cntPerPage : number = 20;
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

    /**  */
    const deleteCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 삭제 하시겠습니까?")) { 
            console.log(`> Deleted cluster_id: ${clusterId}`)
        }
    }

    const editCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        console.log(`> Editing cluster_id: ${clusterId}`)
        navigate({pathname  : `/cluster/detail/${clusterId}` })
    }


    const editClusterOwner = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        console.log(`> Editing cluster_owner: ${clusterId}`)
        navigate({pathname  : `/cluster/detail/${clusterId}` })
    }

    const restartCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 재시작 하시겠습니까?")) {
            console.log("Restarting Cluster..")
        }
    }

    const resumeCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 재개 하시겠습니까?")) {
            console.log("Resuming Cluster..")
        }

    }


    const stopCluster = (e: React.MouseEvent, clusterId: number) => {
        e.preventDefault()
        if(window.confirm("클러스터를 정지 하시겠습니까?")) {
            console.log("Stopping Cluster..")
        }

    }


    return ( 
        <>
            <MainPage children={<>
                <Box>
                    <Text fontSize="3xl">Cluster</Text>
                    <Box p={3} textAlign='left' bgColor={'#e6eced'}>
                        <Flex align="center">
                            <Text size={'md'}>Trino Cluster (총x개)</Text>
                            <Spacer />
                            <Button size={'sm'} colorScheme={'teal'} borderRadius={'md'} width={"120px"} marginRight={2}>Refresh</Button>
                            <Button size={'sm'} colorScheme={'blackAlpha'} borderRadius={'md'} width={"120px"} onClick={onOpen}>Create</Button> 
                        </Flex>
                    </Box>
                </Box>

                <TableContainer marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='striped' size={'sm'} colorScheme='blackAlpha'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead bgColor={"gray.300"}>
                        <Tr h={'35px'}>
                            <Th>Cluster Name</Th>
                            <Th>Status</Th>
                            <Th>Action</Th>
                            <Th>Worker Status</Th>
                            <Th>Created</Th>
                            <Th>Edit</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text marginBottom={0} cursor="pointer" onClick={(e)=>editCluster(e, 1)}>Trino-Cluster-1</Text>
                                </Td>
                                <Td>
                                    <Flex align="center">
                                        <Icon mr="2" fontSize="16" as={RepeatIcon} color={'blue.500'}/>Starting
                                    </Flex>
                                </Td>
                                <Td></Td>
                                <Td>Auto scaling, 2 worker</Td>
                                <Td>11s</Td>
                                <Td>
                                    <Menu>
                                        <MenuButton
                                            size="xs"
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<FiMoreVertical />}
                                            variant='unstyled'
                                            
                                        />
                                        <MenuList>
                                            <MenuItem icon={<FiDelete />} onClick={(e) => deleteCluster(e, 1)}>
                                            Delete Cluster
                                            </MenuItem>
                                            <MenuItem icon={<FiEdit />} onClick={(e)=> editCluster(e, 1)}>
                                            Edit Cluster
                                            </MenuItem>
                                            <MenuItem icon={<FiEdit />} onClick={(e) => editClusterOwner(e, 1)}>
                                            Change Owner
                                            </MenuItem>
                                            <MenuItem icon={<FiRepeat />} onClick={(e) => restartCluster(e, 1)}>
                                            Restart
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text marginBottom={0} cursor="pointer" onClick={(e)=>editCluster(e, 2)}>Trino-Cluster-2</Text>
                                </Td>
                                <Td>
                                    <Flex align="center">
                                        <Icon mr="2" fontSize="17" as={BsFillPauseFill} color={'orange.500'}/>Suspended
                                    </Flex>
                                </Td>
                                <Td>
                                    <Flex align="center" onClick={(e)=>resumeCluster(e, 1)} cursor="pointer">
                                        <Icon mr="2" fontSize="17" as={MdPlayCircleOutline} color={'purple.500'} />Resume
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text marginBottom={0}>Auto scaling, 3 worker</Text>
                                </Td>
                                <Td>3m</Td>
                                <Td>
                                    <Menu>
                                        <MenuButton
                                            size="xs"
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<FiMoreVertical />}
                                            variant='unstyled'
                                        />
                                        <MenuList>
                                            <MenuItem icon={<FiDelete />} onClick={(e) => deleteCluster(e, 1)}>
                                            Delete Cluster
                                            </MenuItem>
                                            <MenuItem icon={<FiEdit />} onClick={(e)=> editCluster(e, 1)}>
                                            Edit Cluster
                                            </MenuItem>
                                            <MenuItem icon={<FiEdit />} onClick={(e) => editClusterOwner(e, 1)}>
                                            Change Owner
                                            </MenuItem>
                                            <MenuItem icon={<FiRepeat />} onClick={(e) => restartCluster(e, 1)}>
                                            Restart
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text marginBottom={0} cursor="pointer" onClick={(e)=>editCluster(e, 3)}>Trino-Cluster-3</Text>
                                </Td>
                                <Td>
                                    <Flex align="center">
                                        <Icon mr="2" fontSize="16" as={CheckIcon} color={'green.500'} />Running
                                    </Flex>
                                </Td>
                                
                                <Td>
                                    <Flex align="center" onClick={(e)=>stopCluster(e, 1)} cursor="pointer">
                                        <Icon mr="2" fontSize="16" as={MdSquare} color={'red.500'} />Stop
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text marginBottom={0}>Auto scaling, 10 worker</Text>
                                </Td>
                                <Td>2h</Td>
                                <Td>
                                    <Menu>
                                        <MenuButton
                                            size="xs"
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<FiMoreVertical />}
                                            variant='unstyled'
                                        />
                                        <MenuList>
                                            <MenuItem icon={<FiDelete />} onClick={(e) => deleteCluster(e, 1)}>
                                            Delete Cluster
                                            </MenuItem>
                                            <MenuItem icon={<FiEdit />} onClick={(e)=> editCluster(e, 1)}>
                                            Edit Cluster
                                            </MenuItem>
                                            <MenuItem icon={<FiEdit />} onClick={(e) => editClusterOwner(e, 1)}>
                                            Change Owner
                                            </MenuItem>
                                            <MenuItem icon={<FiRepeat />} onClick={(e) => restartCluster(e, 1)}>
                                            Restart
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        </Tbody>
                        {/* <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                        </Tfoot> */}
                    </Table>
                </TableContainer>

                <BoardPaging
                    currentPage={currentPage}
                    cntPerPage={cntPerPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                <CreateClusterPop isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </>} />
        </>
    )
}

export default ClusterList