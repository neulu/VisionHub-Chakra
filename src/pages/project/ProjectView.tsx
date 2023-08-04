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
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';

  import {
    RiUserSettingsLine,
    RiArrowDownSLine,
    RiCloseCircleFill,
    RiFilterFill,
    RiAddCircleLine,
    RiArrowDropLeftLine,
    RiArrowDropRightLine,
    RiArrowRightSLine,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ProjectView = () : JSX.Element => { 

    const navigate = useNavigate();

    // 프로젝트 수정 page
    const modifyProject = () => {
        navigate({pathname  : '/project/ProjectModify' })
    }


    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box p={'30px'} border={'solid 1px #E3E3E3'} borderRadius={'5px'} bg={'#fff'}>
                        <Box mb={'30px'}>
                            {/* location */}
                            <Breadcrumb spacing={"3px"} separator={<RiArrowRightSLine color={"gray"} />}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#n">프로젝트</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink>명화(신성)6th 프로젝트</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>

                            <Flex alignItems={'center'}>
                                <Heading variant={'typeMd'}>
                                    명화(신성)6th 프로젝트
                                </Heading>
                            </Flex>

                            {/* <Flex align="center" justifyContent={'space-between'}> */}
                                
                                {/* <HStack spacing={"10px"}>
                                <Button onClick={modifyProject} >수정</Button>
                                <Button>취소</Button>
                                <Button variant={'typeGrayBtn'}>삭제</Button>
                                </HStack> */}
                            {/* </Flex> */}
                        </Box>

                        <Box mb={'30px'}>
                            {/* table */}
                            <TableContainer>
                                <Table variant={'typeView'}>
                                    <TableCaption>프로젝트 상세</TableCaption>
                                    <Tbody>
                                    <Tr>
                                        <Th>프로젝트명</Th>
                                        <Td>명화(신성) 6th 프로젝트</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>클러스터</Th>
                                        <Td>VHUB-DEV-EKS00</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>네임 스페이스</Th>
                                        <Td>myunghwa-6th</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>라이선스 기간</Th>
                                        <Td>2023.06.02 ~ 2023.12.31</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>설명</Th>
                                        <Td>(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블</Td>
                                    </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            
                            {/* cont list */}
                            {/* <SimpleGrid spacing={30}>
                                <VStack align={'top'} gap={'0'}>
                                    <HStack alignItems={'flex-start'} p={'18px 0'} gap={'0'}>
                                        <Text variant={'typeDltLg'}>프로젝트명</Text>
                                        <Text variant={'typeDldLg'}>명화(신성) 6th 프로젝트</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} p={'18px 0'} gap={'0'}>
                                        <Text variant={'typeDltLg'}>클러스터</Text>
                                        <Text variant={'typeDldLg'}>VHUB-DEV-EKS00</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} p={'18px 0'} gap={'0'}>
                                        <Text variant={'typeDltLg'}>네임 스페이스</Text>
                                        <Text variant={'typeDldLg'}>myunghwa-6th</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} p={'18px 0'} gap={'0'}>
                                        <Text variant={'typeDltLg'}>라이선스 기간</Text>
                                        <Text variant={'typeDldLg'}>2023.06.02 ~ 2023.12.31</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} p={'18px 0'}>
                                        <Text variant={'typeDltLg'}>설명</Text>
                                        <Text variant={'typeDldLg'}>화(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블라 명화(신성)6th 프로젝트 블라 블라 블라</Text>
                                    </HStack>
                                </VStack>
                            </SimpleGrid> */}
                        </Box>

                        <Box>
                            <Flex align="center" justifyContent={'space-between'}>
                                <Button variant={'typeWhiteMd'}>목록으로</Button>
                                <HStack spacing={"8px"}>
                                    <Button variant={'typeWhiteMd'} onClick={modifyProject} >수정</Button>
                                    <Button variant={'typeWhiteMd'}>삭제</Button>
                                </HStack>
                            </Flex>
                        </Box>
                        
                    </Box>
                </Container>
            </>} />
        </>
    )
}


export default ProjectView;