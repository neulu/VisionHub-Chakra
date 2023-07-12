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
    useToast,
    Tooltip
  } from '@chakra-ui/react';

  import {
    RiNotification2Line,
    RiMenuLine,
    RiMore2Fill,
    RiBarChartBoxLine,
    RiCloseFill,
    RiFileListLine,
    RiLineChartLine,
    RiFlowChart,
    RiDatabase2Line,
    RiUserSettingsLine,
    RiArrowDownSLine,
    RiCloseCircleFill,
    RiFilterFill,
    RiAddCircleLine,
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
                        <Flex justifyContent={'space-between'}>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Text fontSize='lg' whiteSpace={'nowrap'} m={'0'}>프로젝트 (총3개)</Text>
                                <Center h={'38px'} p={'0 10px'}>
                                    <Divider orientation='vertical' w={'2px'} h={'10px'} bg={'black'} />
                                </Center>
                                <Menu variant='typeSelect'>
                                    <MenuButton as={Button} variant='typeSelectBtnLineNone' rightIcon={<RiArrowDownSLine />}>
                                        전체 저장소
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>명화(신성) 4th 프로젝트</MenuItem>
                                        <MenuItem>명화(신성) 5th 프로젝트</MenuItem>
                                        <MenuItem>명화(신성) 6th 프로젝트</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Button variant='solid' color={'blackAlpha.900'} w={'38px'} h={'38px'} p={'0 7px'}>
                                    <Icon as={RiFilterFill}  color={'white'} fontSize={'24px'} />
                                </Button>
                                <Flex alignItems={'center'}>
                                    <Box display={'flex'} alignItems={'center'} h={'38px'} color={'blackAlpha.800'} borderRadius={' full'} bg={'blackAlpha.200'} ml={'10px'} p={'0 15px'} whiteSpace={'nowrap'} >
                                       생성중
                                        <Button p={'0'} ml={'5px'} variant='none'>
                                            <Icon as={RiCloseCircleFill} fontSize={'22px'} color={'blackAlpha.500'} />
                                        </Button>
                                    </Box>
                                    <Box display={'flex'} alignItems={'center'} h={'38px'} color={'blackAlpha.800'} borderRadius={' full'} bg={'blackAlpha.200'} ml={'10px'} p={'0 15px'} whiteSpace={'nowrap'} >
                                       종료
                                        <Button p={'0'} ml={'5px'} variant='none'>
                                            <Icon as={RiCloseCircleFill} fontSize={'22px'} color={'blackAlpha.500'} />
                                        </Button>
                                    </Box>
                                </Flex>
                            </Flex>
                            <Flex whiteSpace={'normal'} alignItems={'center'}>
                                <Center h={'38px'} p={'0 10px'}>
                                    <Divider orientation='vertical' h={'38px'} bg={'#efefef'} />
                                </Center>
                                <InputGroup>
                                    <Input variant='outline' w={'230px'} placeholder='검색어를 입력해 주세요.' _placeholder={{ color: '#bbb', letterSpacing: '-1px' }} />
                                    <InputRightElement>
                                        <Icon as={RiCloseCircleFill} fontSize={'22px'} color={'blackAlpha.200'} cursor="pointer" />
                                    </InputRightElement>
                                </InputGroup>
                                <Button ml={'10px'}>
                                    검색
                                </Button>
                                <Center h={'38px'} p={'0 10px'}>
                                    <Divider orientation='vertical' h={'38px'} bg={'#efefef'} />
                                </Center>
                                <Menu variant='typeSelect'>
                                    <MenuButton as={Button} variant='typeSelectBtn' rightIcon={<RiArrowDownSLine />}>
                                        20줄 보기
                                        {/* <Icon as={RiArrowDownSLine} color={'blackAlpha.300'} fontSize={'24px'} /> */}
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
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
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
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
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
                                        <MenuItem>30줄 보기</MenuItem>
                                        <MenuItem>50줄 보기</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>프로젝트 목록</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th w={'60px'}>No</Th>
                                    <Th>프로젝트</Th>
                                    <Th w={'100px'}>상태</Th>
                                    <Th>실행 아이디</Th>
                                    <Th>모델명</Th>
                                    <Th w={'100px'}>버전</Th>
                                    <Th w={'100px'}>수명</Th>
                                    <Th w={'180px'}>생성일시</Th>
                                    <Th w={'80px'}>실행</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>15</Td>
                                    <Td>명화(신성) 4th 프로젝트</Td>
                                    <Td>
                                        <Badge variant='state'>생성중</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbucks/classification
                                        <Popover placement="right" >
                                            <PopoverTrigger>
                                                <Button p={'0'} ml={'4px'} variant='none'>
                                                    <Icon as={RiAddCircleLine} color={'blackAlpha.300'} fontSize={'24px'}  _hover={{ color:'blackAlpha.700'}}  _active={{ color:'blackAlpha.700'}} />
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal>
                                                <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <SimpleGrid spacing={30}>
                                                        <VStack align={'top'} gap={'0'}>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>생성일자</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>2023-06-30 15:09:41</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>작성자</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>vh-admin</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>설명</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>td 15번15번15번 이렇게 블라 블라td 15번15번15번 이렇게 블라 블라td 15번15번15번 이렇게 블라 블라td 15번15번15번 이렇게 블라 블라td 15번15번15번 이렇게 블라 블라td 15번15번15번 이렇게 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'10px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                                            모델학습
                                                        </Button>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                                            Threshold
                                                        </Button>
                                                        <Button m={'0 5px'} color={'#000'} bg={'#999'}>
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
                                    <Td>14</Td>
                                    <Td>명화(신성) 4th 프로젝트</Td>
                                    <Td>
                                        <Badge variant='state'>생성중</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbuckn
                                        <Popover placement="right" >
                                            <PopoverTrigger>
                                                <Button p={'0'} ml={'4px'} variant='none'>
                                                    <Icon as={RiAddCircleLine} color={'blackAlpha.300'} fontSize={'24px'}  _hover={{ color:'blackAlpha.700'}}  _active={{ color:'blackAlpha.700'}} />
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal>
                                                <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <SimpleGrid spacing={30}>
                                                        <VStack align={'top'} gap={'0'}>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>생성일자</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>2023-06-30 15:09:41</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>작성자</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>vh-admin</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>설명</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>td 14번14번14번 이렇게 블라 블라td 14번 블라 블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'10px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                                            모델학습
                                                        </Button>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                                            Threshold
                                                        </Button>
                                                        <Button m={'0 5px'} color={'#000'} bg={'#999'}>
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
                                        <Switch  variant={'default'} m={'1px'} isInvalid  />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>13</Td>
                                    <Td>명화(신성) 4th 프로젝트</Td>
                                    <Td>
                                        <Badge variant='state'>생성중</Badge>
                                    </Td>
                                    <Td>eum-starbucks</Td>
                                    <Td>
                                        vh-model/starbucks/classification
                                        <Popover placement="right" >
                                            <PopoverTrigger>
                                                <Button p={'0'} ml={'4px'} variant='none'>
                                                    <Icon as={RiAddCircleLine} color={'blackAlpha.300'} fontSize={'24px'}  _hover={{ color:'blackAlpha.700'}}  _active={{ color:'blackAlpha.700'}} />
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal>
                                                <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <SimpleGrid spacing={30}>
                                                        <VStack align={'top'} gap={'0'}>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>생성일자</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>2023-06-30 15:09:41</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>작성자</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>vh-admin</Text>
                                                            </HStack>
                                                            <HStack alignItems={'flex-start'}>
                                                                <Text w={'85px'} fontSize={'16px'} color={'#666'} fontWeight={'bold'}>설명</Text>
                                                                <Text w={'calc(100% - 85px)'} fontSize={'16px'} color={'#666'}>td 13 이렇게 블라 블라td  블라</Text>
                                                            </HStack>
                                                        </VStack>
                                                    </SimpleGrid>
                                                    <Flex alignItems={'center'} justifyContent={'center'} mt={'10px'}>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                                            모델학습
                                                        </Button>
                                                        <Button m={'0 5px'}>
                                                            <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                                            Threshold
                                                        </Button>
                                                        <Button m={'0 5px'} color={'#000'} bg={'#999'}>
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
                                        <Switch variant={'default'} m={'1px'} isInvalid defaultChecked />
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