import React, { useEffect, useState } from 'react'
import MainPage from 'pages/MainPage'
import {
    Box,
    Flex,
    Text
  } from '@chakra-ui/react';


const ProjectList = () : JSX.Element => { 


    return (
        <>
            <MainPage children={<>

                <Box>
                    <Flex align="center" justifyContent={'space-between'} pb={4}>
                        <Text fontSize="3xl" fontWeight={'bold'}>실행</Text>
                    </Flex>
                </Box>

                <Box pb={2}>
                    <Flex align="center" justifyContent={'space-between'}>
                        준비중... 
                    </Flex>
                </Box>

            </>} />
        </>
    )
}


export default ProjectList;