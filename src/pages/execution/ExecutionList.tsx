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

const ExecutionList = () : JSX.Element => { 

    const navigate = useNavigate();

    // 추가 page
    const writeExecution = () => {
        navigate({pathname  : '/execution/ExecutionWrite' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>실행</Heading>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button onClick={writeExecution}>실행 추가</Button>
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
                                <Button w={'38px'} h={'38px'} color={'blackAlpha.900'} p={'0 7px'} >
                                    <Icon as={RiFilterFill}  color={'white'} fontSize={'24px'} />
                                </Button>
                                <Flex alignItems={'center'}>
                                    <Badge variant={'filter'}>
                                       생성중
                                        <Button variant={'typeIcon'}>
                                            <Icon as={RiCloseCircleFill} color={'blackAlpha.500'} />
                                        </Button>
                                    </Badge>
                                    <Badge variant={'filter'}>
                                        종료
                                        <Button variant={'typeIcon'}>
                                            <Icon as={RiCloseCircleFill} color={'blackAlpha.500'} />
                                        </Button>
                                    </Badge>
                                </Flex>
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
                                    <MenuList>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>20줄 보기</MenuItem>
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        {/* table */}
                        <TableContainer>
                            <Table variant={'simple'}>
                                <TableCaption>실행  목록</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th w={'60px'}>No</Th>
                                    <Th>프로젝트</Th>
                                    <Th w={'100px'}>상태</Th>
                                    <Th>실행 아이디</Th>
                                    <Th>모델명</Th>
                                    <Th w={'100px'}>버전</Th>
                                    <Th w={'100px'}>수명</Th>
                                    <Th w={'200px'}>생성일시</Th>
                                    <Th w={'80px'}>실행</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td colSpan={9} p={'100px 0'} bg={'none !important'}>
                                        내용이 없습니다.
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>15</Td>
                                    <Td>
                                        <Link to={'/execution/executionView'}>
                                            명화(신성) 4th 프로젝트
                                        </Link>
                                    </Td>
                                    <Td>
                                        <Badge variant={'state'}>종료</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbucks/classification
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
                                                                <Text variant={'typeDldSm'}>td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 td 15번렇게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'15px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            테스트실행
                                                        </Button>
                                                        <Button m={'0 5px'}>
                                                            테스트이력
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
                                    <Td>2021 시간</Td>
                                    <Td>2023-07-10 15:09:41</Td>
                                    <Td>
                                        <Switch variant={'default'} m={'1px'} isInvalid isChecked />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>14</Td>
                                    <Td>
                                        <Link to={'/execution/executionView'}>
                                            명화(신성) 4th 프로젝트
                                        </Link>
                                    </Td>
                                    <Td>
                                        <Badge variant={'state'}>종료</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbucks/classification
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
                                                                <Text variant={'typeDldSm'}>td 14 td 14번번렇게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'15px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            테스트실행
                                                        </Button>
                                                        <Button m={'0 5px'}>
                                                            테스트이력
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
                                    <Td>2021 시간</Td>
                                    <Td>2023-07-10 15:09:41</Td>
                                    <Td>
                                        <Switch variant={'default'} m={'1px'} isInvalid  />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>13</Td>
                                    <Td>
                                        <Link to={'/execution/executionView'}>
                                            명화(신성) 4th 프로젝트
                                        </Link>
                                    </Td>
                                    <Td>
                                        <Badge variant={'state'}>종료</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbucks/classification
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
                                                                <Text variant={'typeDldSm'}>td 13번렇게게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'15px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine}  fontSize={'24px'} mr={'5px'} />
                                                            테스트실행
                                                        </Button>
                                                        <Button m={'0 5px'}>
                                                            테스트이력
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
                                    <Td>2021 시간</Td>
                                    <Td>2023-07-10 15:09:41</Td>
                                    <Td>
                                        <Switch variant={'default'} m={'1px'} isInvalid  />
                                    </Td>
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


export default ExecutionList;