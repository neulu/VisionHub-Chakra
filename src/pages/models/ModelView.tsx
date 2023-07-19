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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Grid, 
    GridItem,
  } from '@chakra-ui/react';
  import {
    RiUserSettingsLine,
    RiArrowRightSLine,
    RiAddCircleLine,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ModelView = () : JSX.Element => { 

    const navigate = useNavigate();

    // 추가 page
    const writeModelLearning = () => {
        navigate({pathname  : '/models/ModelLearning' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        {/* location */}
                        <Breadcrumb spacing={"3px"} separator={<RiArrowRightSLine color={"gray"} />}>
                          <BreadcrumbItem>
                            <BreadcrumbLink href="#">모델</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink fontSize={'0'}>vh-model/t2k/detection</BreadcrumbLink>
                          </BreadcrumbItem>
                        </Breadcrumb>

                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading fontSize={'30px'} fontWeight={'500'} lineHeight={'1.8'}>vh-model/t2k/detection</Heading>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button onClick={writeModelLearning}>
                                    <Icon as={RiAddCircleLine} color={'white'} fontSize={'24px'} mr={'5px'} />
                                    모델학습
                                </Button>
                                <Button variant={'typeGrayBtn'}>삭제</Button>
                                <Button variant={'typeGrayBtn'}>취소</Button>
                            </HStack>
                        </Flex>
                    </Box>

                    <Box mb={5}>
                        <SimpleGrid templateColumns='repeat(5, 1fr)' gap={3} pos={'relative'} p={'30px 90px 30px 20px'} mb={'10px'} bg={'#ddd'}>
                            <Flex alignItems={'center'}>
                                <Text variant={'typeDltXl'} w={'100px'}>버전</Text>
                                <Text variant={'typeDldXl'}>v1.2.1</Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                                <Text variant={'typeDltXl'} w={'100px'}>모델 빌드 수</Text>
                                <Text variant={'typeDldXl'}>1</Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                                <Text variant={'typeDltXl'} w={'100px'}>모델 상태</Text>
                                <Text variant={'typeDldXl'}>빌드 완료</Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                                <Text variant={'typeDltXl'} w={'100px'}>저장소</Text>
                                <Text variant={'typeDldXl'}>vp-eks</Text>
                            </Flex>
                            <Flex alignItems={'center'}>
                                <Text variant={'typeDltXl'} w={'100px'}>Threshold</Text>
                                <Text variant={'typeDldXl'}>v1.2</Text>
                            </Flex>
                            <Button pos={'absolute'} right={'20px'} top={'20px'}>
                                변경
                            </Button>
                        </SimpleGrid>

                        <SimpleGrid templateColumns='repeat(2, 1fr)' gap={5}>
                            {/* before Ver */}
                            <Flex flexDirection={'column'} w={'100%'} p={'20px 15px'} border={'solid 1px #3725FF'} borderRadius={'4px'}>
                                <Flex alignItems={'center'} justifyContent={'space-between'}>
                                    <Text variant={'typeDltXl'}>버전</Text>
                                    <Text variant={'typeDldXl'} fontWeight={'bold'}>v.1.0.1</Text>
                                </Flex>
                                <Divider borderColor={'#ddd'} />
                                <VStack align={'top'} gap={'2'}>
                                    <HStack alignItems={'flex-start'} gap={'5'}>
                                        <Text variant={'typeDltSm'}>생성일자</Text>
                                        <Text variant={'typeDldSm'}>2023-06-30 15:09:41</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} gap={'5'}>
                                        <Text variant={'typeDltSm'}>작성자</Text>
                                        <Text variant={'typeDldSm'}>vh-admin</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} gap={'5'}>
                                        <Text variant={'typeDltSm'} m={'0'}>설명</Text>
                                        <Text variant={'typeDldSm'} m={'0'}>설명 설명 블라명이렇게 블라 블라</Text>
                                    </HStack>
                                </VStack>
                                <Divider variant={'dashed'} borderColor={'#ddd'} />
                                <Flex flexDirection={'column'}>
                                    <Text variant={'typeDltSm'}>Config Data</Text>
                                    <Box  maxH={'calc(100vh - 510px)'} color={'#bababa'} lineHeight={'1.4'} mr={'-10px'} overflowY={"auto"}
                                        css={{
                                            '&::-webkit-scrollbar': {
                                                width: '6px',
                                                background: '#fff',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: '#f9f9f9',
                                                borderRadius: '10px',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                background: '#aaa',
                                                borderRadius: '10px',
                                                backgroundClip: 'padding-box',
                                                border: '0px solid transparent',
                                            },
                                        }}
                                    >
                                        apiVersion: 0.1.0<br />
                                        kind: vhubDetector<br />
                                        <span>checkpointPath: yolov5n6.pt</span><br />
                                        confidenceThreshold: 0.5<br />
                                        classNames:<br />
                                            - person<br />
                                            - <span>bicycle</span><br />
                                            - car<br />
                                            - motorcycle<br />
                                            - airplane<br />
                                            - bus<br />
                                            - train<br />
                                            - truck<br />
                                            - boat<br />
                                            - traffic light<br />
                                            - fire hydrant<br />
                                            - stop sign<br />
                                            - parking meter<br />
                                            - bench<br />
                                            - bird<br />
                                            - cat<br />
                                            - dog<br />
                                            - horse<br />
                                            - sheep<br />
                                            - cow<br />
                                            - elephant<br />
                                            - bear<br />
                                            - zebra<br />
                                            - giraffe<br />
                                            - backpack<br />
                                            - umbrella<br />
                                            - handbag<br />
                                            - tie<br />
                                            - suitcase<br />
                                            - frisbee<br />
                                            - skis<br />
                                            - snowboard<br />
                                            - sports ball<br />
                                            - kite<br />
                                            - baseball b<br />
                                            - baseball glove<br />
                                            - skateboard<br />
                                            - surfboard<br />
                                            - tennis racket<br />
                                            - bottle<br />
                                            - wine glass<br />
                                            - cup<br />
                                            - fork<br />
                                            - knife<br />
                                            - spoon<br />
                                            - bowl<br />
                                            - banana<br />
                                            - apple<br />
                                            - sandwich<br />
                                            - orange<br />
                                            - toothbrush
                                    </Box>
                                </Flex>
                            </Flex>

                            {/* after Ver */}
                            <Flex flexDirection={'column'} w={'100%'} p={'20px 15px'} border={'solid 1px #e3e3e3'} borderRadius={'4px'}>
                                <Flex alignItems={'center'} justifyContent={'space-between'}>
                                    <Text variant={'typeDltXl'}>버전</Text>
                                    <Text variant={'typeDldXl'} fontWeight={'bold'}>v2.1.1</Text>
                                </Flex>
                                <Divider borderColor={'#ddd'} />
                                <VStack align={'top'} gap={'2'}>
                                    <HStack alignItems={'flex-start'} gap={'5'}>
                                        <Text variant={'typeDltSm'}>생성일자</Text>
                                        <Text variant={'typeDldSm'}>2023-06-30 15:09:41</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} gap={'5'}>
                                        <Text variant={'typeDltSm'}>작성자</Text>
                                        <Text variant={'typeDldSm'}>vh-admin</Text>
                                    </HStack>
                                    <HStack alignItems={'flex-start'} gap={'5'}>
                                        <Text variant={'typeDltSm'} m={'0'}>설명</Text>
                                        <Text variant={'typeDldSm'} m={'0'}>설명 설명 블라명이렇게 블라 블라</Text>
                                    </HStack>
                                </VStack>
                                <Divider variant={'dashed'} borderColor={'#ddd'} />
                                <Flex flexDirection={'column'}>
                                    <Text variant={'typeDltSm'}>Config Data</Text>
                                    <Box  maxH={'calc(100vh - 510px)'} color={'#bababa'} lineHeight={'1.4'} mr={'-10px'}  overflowY={"auto"}
                                        css={{
                                            '&::-webkit-scrollbar': {
                                                width: '6px',
                                                background: '#fff',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: '#f9f9f9',
                                                borderRadius: '10px',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                background: '#aaa',
                                                borderRadius: '10px',
                                                backgroundClip: 'padding-box',
                                                border: '0px solid transparent',
                                            },
                                        }}
                                    >
                                        apiVersion: 0.1.0<br />
                                        kind: vhubDetector<br />
                                        <Badge variant={'point'}>checkpointPath: yolov5n6.pt</Badge><br />
                                        confidenceThreshold: 0.5<br />
                                        classNames:<br />
                                            - <Badge variant={'point'}>person</Badge><br />
                                            - <Badge variant={'point'}>bicycle</Badge><br />
                                            - car<br />
                                            - motorcycle<br />
                                            - airplane<br />
                                            - bus<br />
                                            - train<br />
                                            - truck<br />
                                            - boat<br />
                                            - traffic light<br />
                                            - fire hydrant<br />
                                            - stop sign<br />
                                            - parking meter<br />
                                            - bench<br />
                                            - bird<br />
                                            - cat<br />
                                            - dog<br />
                                            - horse<br />
                                            - sheep<br />
                                            - cow<br />
                                            - elephant<br />
                                            - bear<br />
                                            - zebra<br />
                                            - giraffe<br />
                                            - backpack<br />
                                            - umbrella<br />
                                            - handbag<br />
                                            - tie<br />
                                            - suitcase<br />
                                            - frisbee<br />
                                            - skis<br />
                                            - snowboard<br />
                                            - sports ball<br />
                                            - kite<br />
                                            - baseball b<br />
                                            - baseball glove<br />
                                            - skateboard<br />
                                            - surfboard<br />
                                            - tennis racket<br />
                                            - bottle<br />
                                            - wine glass<br />
                                            - cup<br />
                                            - fork<br />
                                            - knife<br />
                                            - spoon<br />
                                            - bowl<br />
                                            - banana<br />
                                            - apple<br />
                                            - sandwich<br />
                                            - orange<br />
                                            - toothbrush
                                    </Box>
                                </Flex>
                            </Flex>
                        </SimpleGrid>
                    </Box>
                   
                </Container>
            </>} />
        </>
    )
}



export default ModelView;