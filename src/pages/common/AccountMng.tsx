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
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center,
    SimpleGrid,
    Stack,
    HStack,
    VStack, 
    Input ,
    Textarea,
    InputGroup,
    InputLeftElement, 
    InputRightElement,  
  } from '@chakra-ui/react';

  import {
    RiEyeOffFill,
    RiEyeFill,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const AccountMng = () : JSX.Element => { 

    const navigate = useNavigate();


    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>
                                  내 정보 관리
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
                              <HStack alignItems={'flex-start'} p={'15px 0'} gap={'0'}>
                                  <Text variant={'typeDltLg'}>아이디</Text>
                                  <Text variant={'typeDldLg'}>ux-vision-hub-admin</Text>
                              </HStack>
                              <HStack alignItems={'flex-start'} p={'15px 0'} gap={'0'}>
                                  <Text variant={'typeDltLg'}>권한</Text>
                                  <Text variant={'typeDldLg'}>관리자</Text>
                              </HStack>
                              
                              <FormControl pos={'relative'} display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'flex-start'} p={'15px 0'} isRequired>
                                <FormLabel w={'200px'} fontWeight={'bold'} m={'0'}>비밀번호 변경</FormLabel>
                                <InputGroup w={'500px'}>
                                  <Input type={'password'} name={"password"} variant={'typeWrite'} placeholder={"변경할 비밀번호를 입력해주세요."} />
                                  <InputRightElement h={'32px'} mr={'3px'}>
                                    {/* 비밀번호 hidden icon={<RiEyeOffFill />} / 비밀번호 view icon={<RiEyeFill />} */}
                                    <IconButton aria-label={'password-hidden'} icon={<RiEyeFill />} variant={'none'} color={'blackAlpha.400'} fontSize={'24px'} />
                                  </InputRightElement>
                                </InputGroup>
                              </FormControl>

                              <FormControl pos={'relative'} display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'flex-start'} p={'15px 0'} isRequired>
                                <FormLabel w={'200px'} fontWeight={'bold'} m={'0'}>비밀번호 재확인</FormLabel>
                                <InputGroup w={'500px'}>
                                  <Input type={'password'} name={"password"} variant={'typeWrite'} placeholder={"정보를 안전하게 보호하기 위해 다시 한 번 확인합니다."} />
                                  <InputRightElement h={'32px'} mr={'3px'}>
                                    {/* 비밀번호 hidden icon={<RiEyeOffFill />} / 비밀번호 view icon={<RiEyeFill />} */}
                                    <IconButton aria-label={'password-hidden'} icon={<RiEyeOffFill />} variant={'none'} color={'blackAlpha.400'} fontSize={'24px'} />
                                  </InputRightElement>
                                </InputGroup>
                              </FormControl>

                              
                          </VStack>
                      </SimpleGrid>

                    </Box>
                </Container>
            </>} />
        </>
    )
}


export default AccountMng;