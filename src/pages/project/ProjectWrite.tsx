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

const ProjectWrite = () : JSX.Element => { 

    const navigate = useNavigate();


    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={'40px'}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>
                                  프로젝트 추가
                                </Heading>
                            </Flex>
                            <HStack spacing={"10px"}>
                              <Button>저장</Button>
                              <Button variant={'typeGrayBtn'}>취소</Button>
                            </HStack>
                        </Flex>
                    </Box>
                    
                    <Box>
                      {/* cont list */}
                      <SimpleGrid spacing={30}>
                          <VStack align={'top'} gap={'0'}>
                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>프로젝트명</FormLabel>
                              <Input type={'text'} variant={'typeWrite'} placeholder={'프로젝트명을 입력해주세요.'} />
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>클러스터</FormLabel>
                              <Menu variant={'typeWrite'}>
                                  <MenuButton as={Button} variant={'typeSelectWriteBtn'} rightIcon={<RiArrowDownSLine />}>
                                    클러스터 선택
                                  </MenuButton>
                                  <MenuList>
                                      <MenuItem>클러스터 11111111111111111 보기</MenuItem>
                                      <MenuItem>클러스터 2222 보기</MenuItem>
                                      <MenuItem>클러스터 3333333333333333 보기</MenuItem>
                                  </MenuList>
                              </Menu>
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>네임 스페이스</FormLabel>
                              <Input type={'text'} variant={'typeWrite'} placeholder={'네임 스페이스를 입력해주세요.'} />
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>라이선스 기간</FormLabel>
                                <Flex alignItems={'center'}>
                                  <InputGroup>
                                    <Input type={'text'} variant={'typeWrite'} w={'100px'} />
                                    <Input type={'text'} variant={'typeWrite'} w={'60px'} ml={'-1px'} />
                                    <Input type={'text'} variant={'typeWrite'} w={'60px'} ml={'-1px'} />
                                  </InputGroup>
                                  <Text m={'8px'}>~</Text>
                                  <InputGroup>
                                    <Input type={'text'} variant={'typeWrite'} w={'100px'} />
                                    <Input type={'text'} variant={'typeWrite'} w={'60px'} ml={'-1px'} />
                                    <Input type={'text'} variant={'typeWrite'} w={'60px'} ml={'-1px'} />
                                  </InputGroup>
                                </Flex>
                            </FormControl>

                            <FormControl variant={'typeWrite'}>
                              <FormLabel>설명</FormLabel>
                              <Textarea variant={'typeWrite'} placeholder={'설명을 작성해 주세요.'} />
                            </FormControl>
                          </VStack>
                      </SimpleGrid>
                      
                    </Box>
                </Container>
            </>} />
        </>
    )
}


export default ProjectWrite;