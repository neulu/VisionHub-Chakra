import React, { useEffect, useState } from 'react'
import MainPage from 'pages/MainPage'
import {
    Container,
    Heading,
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
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Badge,
    Switch,
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

  import {
    RiNotification2Line,
    RiUserSettingsLine,
    RiMenuLine,
    RiMore2Fill,
    RiBarChartBoxLine,
    RiCloseFill,
    RiFileListLine,
    RiLineChartLine,
    RiFlowChart,
    RiDatabase2Line,
    RiSaveLine,
    RiNodeTree,
    RiPlayCircleLine,
    RiUser6Line,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';


const ProjectList = () : JSX.Element => { 


    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        <Flex align="center" justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading fontSize={'30px'} fontWeight={'500'} lineHeight={'1.8'}>프로젝트</Heading>
                                <Button variant='outline' color={'blackAlpha.200'} w={'34px'} h={'34px'} p={'0'} ml={'20px'}>
                                    <Icon as={RiUserSettingsLine}  color={'blackAlpha.300'} fontSize={'24px'} />
                                </Button>
                            </Flex>
                            <Button>
                                프로젝트 추가
                            </Button>
                        </Flex>
                    </Box>

                    <Box mb={5}>
                        <Flex align="center" justifyContent={'space-between'}>
                            filter... 
                        </Flex>
                    </Box>
                    <Box>
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>프로젝트 목록</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>프로젝트</Th>
                                    <Th>상태</Th>
                                    <Th>실행 아이디</Th>
                                    <Th>모델명</Th>
                                    <Th>버전</Th>
                                    <Th>수명</Th>
                                    <Th>생성일시</Th>
                                    <Th>실행</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td w={'60px'}>15</Td>
                                    <Td>명화(신성) 4th 프로젝트</Td>
                                    <Td w={'100px'}>
                                        <Badge variant='simple'>생성중</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbucks/classification
                                    </Td>
                                    <Td w={'100px'}>v.1.5.2</Td>
                                    <Td w={'100px'}>2021 시간</Td>
                                    <Td w={'180px'}>2023-07-10 15:09:41</Td>
                                    <Td w={'80px'}>
                                        <Switch variant='simple' size='md' isInvalid  />
                                    </Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </>} />
        </>
    )
}


export default ProjectList;