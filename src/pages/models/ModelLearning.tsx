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
    FormControl,
    FormLabel,
    Textarea,
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
    CircularProgress, 
    CircularProgressLabel,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import {
    RiUserSettingsLine,
    RiArrowDownSLine,
    RiAddCircleLine,
    RiDownloadLine,
    RiArrowRightSLine,
    RiFilePptFill,
    RiCheckFill,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ModelLearning = () : JSX.Element => { 

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // 추가 page
    const writeModel = () => {
        navigate({pathname  : '/' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={'35px'}>
                        {/* location */}
                        <Breadcrumb spacing={"3px"} separator={<RiArrowRightSLine color={"gray"} />}>
                          <BreadcrumbItem>
                            <BreadcrumbLink href="#">모델</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem>
                            <BreadcrumbLink href="#">모델 학습</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink fontSize={'0'}>vh-model/t2k/detection</BreadcrumbLink>
                          </BreadcrumbItem>
                        </Breadcrumb>

                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>vh-model/t2k/detection</Heading>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button>
                                    <Icon as={RiCheckFill} fontSize={'24px'} mr={'5px'} />
                                    실행
                                </Button>
                                <Button variant={'typeGrayBtn'}>취소</Button>
                            </HStack>
                        </Flex>
                    </Box>
                    
                    <Box>
                      {/* cont list */}
                      <SimpleGrid spacing={30}>
                          <VStack align={'top'} gap={'0'}>

                          <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>학습경로</FormLabel>
                              <Menu variant={'typeWrite'}>
                                  <MenuButton as={Button} variant={'typeSelectWriteBtn'} rightIcon={<RiArrowDownSLine />}>
                                  학습경로 선택
                                  </MenuButton>
                                  <MenuList>
                                      <MenuItem>학습경로 11111111111111111</MenuItem>
                                      <MenuItem>학습경로 2222</MenuItem>
                                      <MenuItem>학습경로 3333333333333333</MenuItem>
                                  </MenuList>
                              </Menu>
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>설정경로</FormLabel>
                              <Menu variant={'typeWrite'}>
                                  <MenuButton as={Button} variant={'typeSelectWriteBtn'} rightIcon={<RiArrowDownSLine />}>
                                  설정경로 선택
                                  </MenuButton>
                                  <MenuList>
                                      <MenuItem>설정경로 11111111111111111</MenuItem>
                                      <MenuItem>설정경로 2222</MenuItem>
                                      <MenuItem>설정경로 3333333333333333</MenuItem>
                                  </MenuList>
                              </Menu>
                            </FormControl>

                            

                            <SimpleGrid templateColumns='repeat(4, 1fr)' gap={'40px'}>
                                <FormControl variant={'typeWrite'} isRequired>
                                  <FormLabel>GPU</FormLabel>
                                  <Menu variant={'typeFlexible'}>
                                      <MenuButton as={Button} variant={'typeSelectWriteBtn'} rightIcon={<RiArrowDownSLine />}>
                                        GPU 선택
                                      </MenuButton>
                                      <MenuList w={'180px'}>
                                          <MenuItem>GPU.1</MenuItem>
                                          <MenuItem>GPU.2</MenuItem>
                                          <MenuItem>GPU.3</MenuItem>
                                      </MenuList>
                                  </Menu>
                                </FormControl>
                                <FormControl variant={'typeWriteXs'} isRequired>
                                  <FormLabel>학습횟수</FormLabel>
                                  <Menu variant={'typeFlexible'}>
                                      <MenuButton as={Button} variant={'typeSelectBtnXs'} rightIcon={<RiArrowDownSLine />}>
                                        학습횟수 선택
                                      </MenuButton>
                                      <MenuList w={'180px'}>
                                          <MenuItem>학습횟수 111111</MenuItem>
                                          <MenuItem>학습횟수 2222</MenuItem>
                                          <MenuItem>학습횟수 33</MenuItem>
                                      </MenuList>
                                  </Menu>
                                </FormControl>
                                <FormControl variant={'typeWriteXs'} isRequired>
                                  <FormLabel>데이터포맷</FormLabel>
                                  <Menu variant={'typeFlexible'}>
                                      <MenuButton as={Button} variant={'typeSelectBtnXs'} rightIcon={<RiArrowDownSLine />}>
                                        데이터포맷 선택
                                      </MenuButton>
                                      <MenuList w={'180px'}>
                                          <MenuItem>데이터포맷 111111</MenuItem>
                                          <MenuItem>데이터포맷 2222</MenuItem>
                                          <MenuItem>데이터포맷 33</MenuItem>
                                      </MenuList>
                                  </Menu>
                                </FormControl>
                                <FormControl variant={'typeWriteXs'}>
                                    <FormLabel>학습버전</FormLabel>
                                    <Input type={'text'} variant={'typeWrite'} w={'calc(100% - 120px)'} value={'v1.0.0'} readOnly />
                                </FormControl>
                            </SimpleGrid>

                            <FormControl variant={'typeWrite'} >
                              <FormLabel>옵션</FormLabel>
                              <Textarea variant={'typeWrite'} placeholder={'옵션을 넣어주세요.'} />
                            </FormControl>
                          </VStack>
                      </SimpleGrid>
                      
                    </Box>


                </Container>
            </>} />
        </>
    )
}



export default ModelLearning;