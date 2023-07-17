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
    Textarea,
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

const ProjectModify = () : JSX.Element => { 

    const navigate = useNavigate();

    // 프로젝트 수정 page
    const modifyProject = () => {
        navigate({pathname  : '/project/ProjectModify' })
    }


    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        {/* location */}
                        <Breadcrumb spacing={"3px"} separator={<RiArrowRightSLine color={"gray"} />}>
                          <BreadcrumbItem>
                            <BreadcrumbLink href={"#"}>프로젝트</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink fontSize={'0'}>명화(신성)6th 프로젝트</BreadcrumbLink>
                          </BreadcrumbItem>
                        </Breadcrumb>

                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading fontSize={'30px'} fontWeight={'500'} lineHeight={'1.8'}>
                                  명화(신성)6th 프로젝트
                                </Heading>
                            </Flex>
                            <HStack spacing={"10px"}>
                              <Button>수정</Button>
                              <Button>취소</Button>
                              <Button variant={'typeGrayBtn'}>삭제</Button>
                            </HStack>
                        </Flex>
                    </Box>
                    
                    <Box>
                      {/* cont list */}
                      <SimpleGrid spacing={30}>
                          <VStack align={'top'} gap={'0'}>
                              <HStack alignItems={'flex-start'} p={'15px 0'} gap={'0'}>
                                  <Text variant={'typeDltLg'}>프로젝트명</Text>
                                  <Text variant={'typeDldLg'}>명화(신성) 6th 프로젝트</Text>
                              </HStack>
                              <HStack alignItems={'flex-start'} p={'15px 0'} gap={'0'}>
                                  <Text variant={'typeDltLg'}>클러스터</Text>
                                  <Text variant={'typeDldLg'}>VHUB-DEV-EKS00</Text>
                              </HStack>
                              <HStack alignItems={'flex-start'} p={'15px 0'} gap={'0'}>
                                  <Text variant={'typeDltLg'}>네임 스페이스</Text>
                                  <Text variant={'typeDldLg'}>myunghwa-6th</Text>
                              </HStack>
                              <HStack alignItems={'flex-start'} p={'15px 0'} gap={'0'}>
                                  <Text variant={'typeDltLg'}>라이선스 기간</Text>
                                  <Text variant={'typeDldLg'}>2023.06.02 ~ 2023.12.31</Text>
                              </HStack>

                              <FormControl pos={'relative'} display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'flex-start'} p={'10px 0'}>
                                <FormLabel w={'200px'} fontWeight={'bold'} m={'0'}>설명</FormLabel>
                                <Textarea variant={'typeWrite'} w={'calc(100% - 200px)'} placeholder={'설명을 작성해 주세요.'} />
                              </FormControl>
                          </VStack>
                      </SimpleGrid>

                    </Box>
                </Container>
            </>} />
        </>
    )
}


export default ProjectModify;