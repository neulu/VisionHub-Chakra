import React, { useEffect, useState } from 'react'
import MainPage from 'pages/MainPage'
import {
    chakra,
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
    Popover,
    Portal,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Center,
    SimpleGrid,
    Stack,
    HStack,
    VStack,
    Select,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem, 
    Input ,
    InputGroup,
    InputLeftElement, 
    InputRightElement,  
  } from '@chakra-ui/react';

  import {
    AiOutlineSearch,
  } from 'react-icons/ai';
  import {
    HiOutlineChevronDown,
  } from 'react-icons/hi';
  import {
    RiAddFill,
    RiArrowDropLeftLine,
    RiArrowDropRightLine,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ProjectList = () : JSX.Element => { 

    const navigate = useNavigate();

    // 프로젝트 추가 page
    const writeProject = () => {
        navigate({pathname  : '/project/ProjectWrite' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={'15px'} pb={'15px'} borderBottom={'solid 1px #E4E4E4'}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading variant={'typeLg'}>프로젝트</Heading>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button onClick={writeProject}>
                                    <Icon as={RiAddFill}  fontSize={'18px'} mr={'5px'} />
                                    프로젝트 추가
                                </Button>
                            </HStack>
                        </Flex>
                    </Box>

                    <Box mb={'15px'}>
                        <Flex justifyContent={'space-between'}>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Text variant={'typeMd'}>프로젝트 <chakra.span color={'#6155E9'}>3</chakra.span></Text>
                            </Flex>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Flex whiteSpace={'normal'} alignItems={'center'} mr={'10px'}>
                                    <InputGroup>
                                        <Input variant={'outline'} w={'250px'} placeholder={'검색어를 입력해 주세요.'} />
                                        <InputRightElement>
                                            <Icon as={AiOutlineSearch} fontSize={'21px'} color={'#6D6D6D'} cursor={'pointer'} />
                                        </InputRightElement>
                                    </InputGroup>
                                </Flex>
                                <Menu variant={'typeSelect'}>
                                    <MenuButton as={Button} variant={'typeSelect'} w={'130px'} textAlign={'left'} rightIcon={<HiOutlineChevronDown />}>
                                        20줄 보기
                                    </MenuButton>
                                    <MenuList w={'130px'}>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>30줄 보기</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        {/* table */}
                        <TableContainer border={'solid 1px #dadada'} borderRadius={'4px'}>
                            <Table variant={'typeList'}>
                                <TableCaption>프로젝트 목록</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th w={'80px'} textAlign={'center'}>No</Th>
                                    <Th>프로젝트명</Th>
                                    <Th>클러스터</Th>
                                    <Th>네임스페이스</Th>
                                    <Th>라이센스</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td colSpan={5} textAlign={'center'} p={'100px 0'} bg={'none !important'}>
                                        내용이 없습니다.
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign={'center'}>New</Td>
                                    <Td>
                                        <Link to={'/project/projectView'}>
                                            명화(신성) 4th 프로젝트
                                        </Link>
                                    </Td>
                                    <Td> VHUB-DEV-EKS00</Td>
                                    <Td>Myunghwa-4th</Td>
                                    <Td>2022-12-26 ~ 2022-12-26</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign={'center'}>15</Td>
                                    <Td>
                                        <Link to={'/project/projectView'}>
                                            명화(신성) 4th 프로젝트
                                        </Link>
                                    </Td>
                                    <Td> VHUB-DEV-EKS00</Td>
                                    <Td>Myunghwa-4th</Td>
                                    <Td>2022-12-26 ~ 2022-12-26</Td>
                                </Tr>
                                <Tr>
                                    <Td textAlign={'center'}>14</Td>
                                    <Td>
                                        <Link to={'/project/projectView'}>
                                            명화(신성) 4th 프로젝트
                                        </Link>
                                    </Td>
                                    <Td> VHUB-DEV-EKS00</Td>
                                    <Td>Myunghwa-4th</Td>
                                    <Td>2022-12-26 ~ 2022-12-26</Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                        {/* pagination */}
                        <Flex alignItems={"center"} justifyContent={"center"} w={"full"} m={'20px auto'}>
                            <Flex alignItems={"center"} justifyContent={"center"} border={'1px solid #e5e5e5'} borderRadius={'3px'} >
                                <Button variant={'paginationIconBtn'}>
                                  <Icon as={RiArrowDropLeftLine} />
                                </Button>
                                <Button variant={'paginationBtn'}>1</Button>
                                <Button variant={'paginationBtn'}>2</Button>
                                <Button variant={'paginationBtn'}>3</Button>
                                <Button variant={'paginationIconBtn'}>
                                  <Icon as={RiArrowDropRightLine} />
                                </Button>
                            </Flex>
                        </Flex>

                    </Box>
                </Container>
            </>} />
        </>
    )
}


export default ProjectList;