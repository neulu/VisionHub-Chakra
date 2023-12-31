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
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Menu,
    MenuButton,
    MenuList,
    MenuItem, 
    Input ,
    InputGroup,
    InputLeftElement, 
    InputRightElement,
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
    RiFilterFill,
    RiCloseCircleFill,
    RiAddCircleLine,
    RiArrowDropLeftLine,
    RiArrowDropRightLine,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ModelList = () : JSX.Element => { 

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // 추가 page
    const writeModel = () => {
        navigate({pathname  : '/models/ModelWrite' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}> 
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>모델</Heading>
                                <Button variant={'outline'} color={'blackAlpha.200'} w={'34px'} minW={'auto'} h={'34px'} p={'0'} ml={'20px'}>
                                    <Icon as={RiUserSettingsLine}  color={'blackAlpha.300'} fontSize={'24px'} />
                                </Button>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button onClick={writeModel}>모델 추가</Button>
                            </HStack>
                        </Flex>
                    </Box>

                    <Box mb={5}>
                        <Flex justifyContent={'space-between'}>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Text variant={'typeTitleLg'}>프로젝트 (총3개)</Text>
                                <Center h={'38px'} p={'0 10px'}>
                                    <Divider orientation={'vertical'} w={'2px'} h={'10px'} bg={'black'} />
                                </Center>
                                <Menu variant={'typeSelect'}>
                                    <MenuButton as={Button} variant={'typeSelectBtnLineNone'} rightIcon={<RiArrowDownSLine />}>
                                        전체 저장소
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>명화(신성) 4th 프로젝트</MenuItem>
                                        <MenuItem>명화(신성) 5th 프로젝트</MenuItem>
                                        <MenuItem>명화(신성) 6th 프로젝트</MenuItem>
                                    </MenuList>
                                </Menu>
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
                                <TableCaption>모델 목록</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th w={'60px'}>No</Th>
                                    <Th>저장소</Th>
                                    <Th>모델명</Th>
                                    <Th w={'120px'}>최신버전</Th>
                                    <Th w={'120px'}>상태</Th>
                                    <Th w={'120px'}>모델 빌드 수</Th>
                                    <Th w={'250px'}>생성일시</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td colSpan={7} p={'100px 0'} bg={'none !important'}>
                                        내용이 없습니다.
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>15</Td>
                                    <Td>
                                        <Link to={'/models/modelView'}>
                                            aws-ecr
                                        </Link>
                                    </Td>
                                    <Td>
                                        vh-model/t2k/classification
                                        <Popover placement={"right"} >
                                            <PopoverTrigger>
                                                <Button variant={'typePopoverBtn'}>
                                                    <Icon as={RiAddCircleLine} />
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal>
                                                <PopoverContent>
                                                <PopoverArrow />
                                                {/* <PopoverCloseButton /> */}
                                                <PopoverBody>
                                                    <SimpleGrid spacing={30}>
                                                        <VStack align={'top'} gap={'3'}>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>생성일자</Text>
                                                                <Text variant={'typeDldSm'}>2023-06-30 15:09:41</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>작성자</Text>
                                                                <Text variant={'typeDldSm'}>vh-admin</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>설명</Text>
                                                                <Text variant={'typeDldSm'}>td 15번15번이렇게15번1515번15번이 렇게15 번1515번15번게15번1515 번15번이렇게 15번15   번이렇게15번15번이렇게15번15  번이렇게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'15px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            모델학습
                                                        </Button>
                                                        <Button m={'0 5px'} onClick={onOpen}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            Threshold
                                                        </Button>
                                                        <Button variant={'typeGrayBtn'} m={'0 5px'}>
                                                            닫기
                                                        </Button>
                                                    </Flex>
                                                </PopoverBody>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>
                                    </Td>
                                    <Td>v.1.5.2</Td>
                                    <Td>
                                        <Badge variant={'state'}>빌드 완료</Badge>
                                    </Td>
                                    <Td>2</Td>
                                    <Td>2023-07-10 15:09:41</Td>
                                </Tr>
                                <Tr>
                                    <Td>14</Td>
                                    <Td>
                                        <Link to={'/models/modelView'}>
                                            aws-ecr
                                        </Link>
                                    </Td>
                                    <Td>
                                        vh-model/t2k/classification
                                        <Popover placement={"right"} >
                                            <PopoverTrigger>
                                                <Button variant={'typePopoverBtn'}>
                                                    <Icon as={RiAddCircleLine} />
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal>
                                                <PopoverContent>
                                                <PopoverArrow />
                                                {/* <PopoverCloseButton /> */}
                                                <PopoverBody>
                                                    <SimpleGrid spacing={30}>
                                                        <VStack align={'top'} gap={'3'}>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>생성일자</Text>
                                                                <Text variant={'typeDldSm'}>2023-06-30 15:09:41</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>작성자</Text>
                                                                <Text variant={'typeDldSm'}>vh-admin</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>설명</Text>
                                                                <Text variant={'typeDldSm'}>td 14번14번이렇게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'15px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            모델학습
                                                        </Button>
                                                        <Button m={'0 5px'} onClick={onOpen}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            Threshold
                                                        </Button>
                                                        <Button variant={'typeGrayBtn'} m={'0 5px'}>
                                                            닫기
                                                        </Button>
                                                    </Flex>
                                                </PopoverBody>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>
                                    </Td>
                                    <Td>v.1.5.2</Td>
                                    <Td>
                                        <Badge variant={'state'}>빌드 완료</Badge>
                                    </Td>
                                    <Td>2</Td>
                                    <Td>2023-07-10 15:09:41</Td>
                                </Tr>
                                <Tr>
                                    <Td>13</Td>
                                    <Td>
                                        <Link to={'/models/modelView'}>
                                            aws-ecr
                                        </Link>
                                    </Td>
                                    <Td>
                                        vh-model/t2k/classification
                                        <Popover placement={"right"} >
                                            <PopoverTrigger>
                                                <Button variant={'typePopoverBtn'}>
                                                    <Icon as={RiAddCircleLine} />
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal>
                                                <PopoverContent>
                                                <PopoverArrow />
                                                {/* <PopoverCloseButton /> */}
                                                <PopoverBody>
                                                    <SimpleGrid spacing={30}>
                                                        <VStack align={'top'} gap={'3'}>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>생성일자</Text>
                                                                <Text variant={'typeDldSm'}>2023-06-30 15:09:41</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>작성자</Text>
                                                                <Text variant={'typeDldSm'}>vh-admin</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'} gap={'0'}>
                                                                <Text variant={'typeDltSm'}>설명</Text>
                                                                <Text variant={'typeDldSm'}>td 13번렇게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'15px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            모델학습
                                                        </Button>
                                                        <Button m={'0 5px'} onClick={onOpen}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            Threshold
                                                        </Button>
                                                        <Button variant={'typeGrayBtn'} m={'0 5px'}>
                                                            닫기
                                                        </Button>
                                                    </Flex>
                                                </PopoverBody>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>
                                    </Td>
                                    <Td>v.1.5.2</Td>
                                    <Td>
                                        <Badge variant={'state'}>빌드 완료</Badge>
                                    </Td>
                                    <Td>2</Td>
                                    <Td>2023-07-10 15:09:41</Td>
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


                    {/* modal  */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent maxW={'640px'}>
                        <ModalHeader>Threshold 업데이트</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <SimpleGrid spacing={30}>
                            <VStack align={'top'} gap={'0'}>

                                <FormControl variant={"typeModal"} isRequired>
                                    <FormLabel>Threshold 선택</FormLabel>
                                    <Menu variant={'typeModal'}>
                                        <MenuButton as={Button} variant={'typeSelectModalBtn'} rightIcon={<RiArrowDownSLine />}>
                                        threshold 선택
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>threshold 11111111111111111 </MenuItem>
                                            <MenuItem>threshold 2222 </MenuItem>
                                            <MenuItem>threshold 3333333333333333</MenuItem>
                                            <MenuItem>threshold 4 </MenuItem>
                                            <MenuItem>threshold 5555</MenuItem>
                                            <MenuItem>threshold 6 </MenuItem>
                                            <MenuItem>threshold 77</MenuItem>
                                            <MenuItem>threshold 3333333333333333</MenuItem>
                                            <MenuItem>threshold 4 </MenuItem>
                                            <MenuItem>threshold 5555</MenuItem>
                                            <MenuItem>threshold 6 </MenuItem>
                                            <MenuItem>threshold 77</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </FormControl>

                                <FormControl variant={'typeModal'}>
                                    <FormLabel>설명</FormLabel>
                                    <Textarea variant={'typeModal'} placeholder={'설명을 작성해 주세요.'} />
                                </FormControl>

                                <Flex alignItems={"center"} justifyContent={"center"} mt={'15px'}>
                                    <Text variant={'typeDesc'}>버전이 v1.0.1로 업데이트됩니다.</Text>
                                </Flex>

                            </VStack>
                          </SimpleGrid>
                        </ModalBody>
                        <ModalFooter>
                          <Button variant={'typeGrayBtnLg'} onClick={onClose}>
                            취소
                          </Button>
                          <Button variant={'typeBlackBtnLg'}>
                            저장
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>


                </Container>
            </>} />
        </>
    )
}



export default ModelList;