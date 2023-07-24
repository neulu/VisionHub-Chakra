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
    RiUserSettingsLine,
    RiArrowDownSLine,
    RiCloseCircleFill,
    RiFilterFill,
    RiAddCircleLine,
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
                    <Box mb={5}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>프로젝트</Heading>
                                <Button variant={'outline'} color={'blackAlpha.200'} w={'34px'} minW={'auto'} h={'34px'} p={'0'} ml={'20px'}>
                                    <Icon as={RiUserSettingsLine}  color={'blackAlpha.300'} fontSize={'24px'} />
                                </Button>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button onClick={writeProject}>프로젝트 추가</Button>
                            </HStack>
                        </Flex>
                    </Box>

                    <Box mb={5}>
                        <Flex justifyContent={'space-between'}>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Text variant={'typeTitleLg'}>프로젝트 (총3개)</Text>
                            </Flex>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Center h={'38px'} p={'0 10px'}>
                                    <Divider orientation={'vertical'} h={'38px'} bg={'#efefef'} />
                                </Center>
                                <Flex whiteSpace={'normal'} alignItems={'center'}>
                                    <InputGroup>
                                        <Input variant={'outline'} w={'230px'} placeholder={'검색어를 입력해 주세요.'} />
                                        <InputRightElement>
                                            <Icon as={RiCloseCircleFill} fontSize={'22px'} color={'blackAlpha.200'} cursor={'pointer'} />
                                        </InputRightElement>
                                    </InputGroup>
                                    <Button ml={'10px'}>
                                        검색
                                    </Button>
                                </Flex>
                                
                                <Center h={'38px'} p={'0 10px'}>
                                    <Divider orientation={'vertical'} h={'38px'} bg={'#efefef'} />
                                </Center>
                                <Menu variant={'typeSelect'}>
                                    <MenuButton as={Button} variant={'typeSelectBtn'} rightIcon={<RiArrowDownSLine />}>
                                        20줄 보기
                                    </MenuButton>
                                    <MenuList w={'120px'}>
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
                        <TableContainer>
                            <Table variant={'simple'}>
                                <TableCaption>프로젝트 목록</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th w={'60px'}>No</Th>
                                    <Th>프로젝트명</Th>
                                    <Th>클러스터</Th>
                                    <Th>네임스페이스</Th>
                                    <Th w={'280px'}>라이센스</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td colSpan={5} p={'100px 0'} bg={'none !important'}>
                                        내용이 없습니다.
                                    </Td>
                                </Tr>
                                {/* New */}
                                <Tr bg={'#e5e5e5'}>
                                    <Td>New</Td>
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
                                    <Td>15</Td>
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
                                    <Td>14</Td>
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