
import React, { useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Flex,
    Text,
    Icon,
    Spacer,
    Checkbox
} from '@chakra-ui/react';

import MainPage from 'pages/MainPage'
import { MdCircle } from 'react-icons/md';

export default function Cluster() { 

    return (
        <>
            <MainPage children={<>
                <Box>
                    <Text fontSize="2xl">기본정보</Text>
                </Box>
                <TableContainer flex={'1'} maxW={'70%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'sm'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='gray.300' width={'2xs'}>
                                <Text marginBottom={0}>Name</Text>
                            </Td>
                            <Td>
                                Trino-Cluster-1
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Description
                            </Td>
                            <Td>
                                ASML 로그 분석을 위한 Trino Cluster 제공
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Status
                            </Td>
                            <Td>
                                <Flex align="center">
                                    <Icon mr="2" fontSize="16" as={MdCircle} color={'green.500'}/>ON
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Created
                            </Td>
                            <Td>
                                Trino-Cluster-1
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Catalog
                            </Td>
                            <Td>
                                Trino-Cluster-1
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Image
                            </Td>
                            <Td>
                                Trino-Cluster-1
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Cluster Size
                            </Td>
                            <Td>
                                Trino-Cluster-1
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>
                <Spacer p={5}/>
                <Box>
                    <Text fontSize="2xl">세부정보</Text>
                </Box>
                <TableContainer flex={'1'} maxW={'70%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'sm'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='gray.300' width={'2xs'}>
                                <Text marginBottom={0}>Initial Workers</Text>
                            </Td>
                            <Td>
                                3
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Coordinator Heap Size
                            </Td>
                            <Td>
                                64G
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Worker Heap Size
                            </Td>
                            <Td>
                                48G
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Query Memory
                            </Td>
                            <Td>
                                32G
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                Query Memory per Worker
                            </Td>
                            <Td>
                                24G
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                CPU allocation for each coordinator
                            </Td>
                            <Td>
                                4
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                CPU allocation for each worker
                            </Td>
                            <Td>
                                4
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>
                <Spacer p={5}/>
                <Checkbox size='md' 
                    border={1}
                    borderStyle={'none'}
                    borderColor={'gray.400'}
                    colorScheme='teal'
                    fontWeight='normal'
                    >Enable Auto Scaling</Checkbox>
                <TableContainer flex={'1'} maxW={'70%'} marginTop={1} whiteSpace={'nowrap'}>
                    <Table variant='simple' size={'sm'} colorScheme='blackAlpha' bgColor={'white'} borderWidth={1}>
                    <Tbody>
                        <Tr>
                            <Td bgColor='gray.300' width={'2xs'}>
                                <Text marginBottom={0}>Max Workers</Text>
                            </Td>
                            <Td>
                                10
                            </Td>
                        </Tr>
                        <Tr>
                            <Td bgColor='gray.300'>
                                CPU Utilzation Threshold
                            </Td>
                            <Td>
                                70
                            </Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>



            </>} />

        </>
    )


}