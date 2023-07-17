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
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ModelLearning = () : JSX.Element => { 

    const navigate = useNavigate();

    // 추가 page
    const writeModel = () => {
        navigate({pathname  : '/' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={5}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading fontSize={'30px'} fontWeight={'500'} lineHeight={'1.8'}>모델</Heading>
                                <Button variant={'outline'} color={'blackAlpha.200'} w={'34px'} h={'34px'} p={'0'} ml={'20px'}>
                                    <Icon as={RiUserSettingsLine}  color={'blackAlpha.300'} fontSize={'24px'} />
                                </Button>
                            </Flex>
                            <HStack spacing={"10px"}>
                                <Button onClick={writeModel}>모델 추가</Button>
                            </HStack>
                        </Flex>
                    </Box>

                    <Box mb={5}>
                        모델 ModelLearning ... 
                    </Box>
                </Container>
            </>} />
        </>
    )
}



export default ModelLearning;