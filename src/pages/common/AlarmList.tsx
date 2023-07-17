import React, { useEffect, useState } from 'react'
import MainPage from 'pages/MainPage'
import {
    Container,
    Heading,
    IconButton,
    Box,
    Button,
    Flex,
    Icon,
    Text,
    Badge,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';

  import {
    RiArrowDropLeftLine,
    RiArrowDropRightLine,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const AlarmList = () : JSX.Element => { 

    const navigate = useNavigate();

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading fontSize={'30px'} fontWeight={'500'} lineHeight={'1.8'}>
                                  알림
                                </Heading>
                            </Flex>
                        </Flex>
                    </Box>
                    
                    <Box>
                      {/* cont list */}
                      <VStack align={'top'} gap={'0'}>
                          <HStack justifyContent={'space-between'} p={'10px 0'} gap={'0'}>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={'0'}>
                              <Badge variant={'category'}>프로젝트</Badge>
                              <Text variant={'typeAlarm'}> ux-test 사용자의 vh-model/t3k/detection 권한이 할당 되었습니다.</Text>
                            </Stack>
                            <Text variant={'typeDate'}>2023-07-30 11:33:52</Text>
                          </HStack>

                          <HStack justifyContent={'space-between'} p={'10px 0'} gap={'0'}>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={'0'}>
                              <Badge variant={'category'}>모델</Badge>
                              <Text variant={'typeAlarm'}> ux-test 사용자의 vh-model/t3k/detection 권한이 할당 되었습니다.</Text>
                            </Stack>
                            <Text variant={'typeDate'}>2023-07-30 11:33:52</Text>
                          </HStack>

                          <HStack justifyContent={'space-between'} p={'10px 0'} gap={'0'}>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={'0'}>
                              <Badge variant={'category'}>모니터링</Badge>
                              <Text variant={'typeAlarm'}> ux-test 사용자의 vh-model/t3k/detection 권한이 할당 되었습니다.</Text>
                            </Stack>
                            <Text variant={'typeDate'}>2023-07-30 11:33:52</Text>
                          </HStack>

                          <HStack justifyContent={'space-between'} p={'10px 0'} gap={'0'}>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={'0'}>
                              <Badge variant={'category'}>테스트</Badge>
                              <Text variant={'typeAlarm'}> ux-test 사용자의 vh-model/t3k/detection 권한이 할당 되었습니다.</Text>
                            </Stack>
                            <Text variant={'typeDate'}>2023-07-30 11:33:52</Text>
                          </HStack>

                      </VStack>
                      

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


export default AlarmList;