import React, { useState } from 'react'
import MainPage from 'pages/MainPage'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    Box,
    Text,
    Button,
    Checkbox, 
    CheckboxGroup,
    IconButton,
    Flex,
    Stack,
    Spacer,
} from '@chakra-ui/react'
import BoardPaging from 'components/common/BoardPaging'
import { SearchIcon } from '@chakra-ui/icons'

export default function DataBoard() { 

    const [checkedItems, setCheckedItems] = React.useState([false, false, false, false, false, false, false])
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    const handleCheckboxChange = (index : number) => {
        setCheckedItems((prevCheckedItems) => {
          const newCheckedItems = [...prevCheckedItems];
          newCheckedItems[index] = !prevCheckedItems[index];
          return newCheckedItems
        })
    }

    const totalPages = 10;
    const cntPerPage = 20;
    const currentPage = 1;

    const handlePageChange = (page: number) => {
        // 현재 페이지를 상태로 업데이트하거나 다른 동작을 수행합니다.
    };


    return ( 
        <>
            <MainPage children={<>
                <Box>
                    <Text fontSize="sm">Cloud based Train & Inference List</Text>
                    <Text fontSize="sm">Train & Predict</Text>
                    <Box textAlign='right'>
                        <Input size="xs" width="250px" bgColor={'gray.200'} borderStyle="none" placeholder='Search for'/><IconButton size={'xs'} bgColor={'gray.200'} borderRadius={0} marginBottom={0.5} aria-label='Search database' icon={<SearchIcon />} />
                    </Box>
                    <Box textAlign='left'marginTop={'3'}>
                        <Flex>
                            <Text fontSize={'sm'}>Train</Text>
                            <Button size={'xs'} bgColor={'#55677d'} colorScheme={'blackAlpha'} borderRadius={0} width={"120px"} marginLeft={'5'}>Hide/Show All</Button>
                            <Spacer />
                            <Button size={'xs'} bgColor={'#55677d'} colorScheme={'blackAlpha'} borderRadius={0} width={"120px"}>+New Train</Button>
                        </Flex>
                    </Box>
                    <TableContainer marginTop={1} whiteSpace={'nowrap'}>
                        <Table variant='striped' size={'sm'} colorScheme='blackAlpha'>
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead bgColor={"gray.300"}>
                            <Tr>
                                <Th>
                                <Checkbox size='md'
                                    border={1}
                                    borderStyle={'none'}
                                    borderColor={'gray.500'}
                                    colorScheme='teal'
                                    isChecked={allChecked}
                                    isIndeterminate={isIndeterminate}
                                    onChange={(e) => setCheckedItems([
                                        e.target.checked, 
                                        e.target.checked,
                                        e.target.checked,
                                        e.target.checked,
                                        e.target.checked,
                                        e.target.checked,
                                        e.target.checked,
                                    ])}></Checkbox>
                                </Th>
                                <Th>Model Output Name</Th>
                                <Th>version</Th>
                                <Th>Status</Th>
                                <Th>Progress</Th>
                                <Th>Last Modified</Th>
                                <Th>Train Dataset</Th>
                                <Th>Created By</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md'
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[0]} 
                                        onChange={() => handleCheckboxChange(0)}></Checkbox>
                                    </Td>
                                    <Td>SIDNET</Td>
                                    <Td></Td>
                                    <Td>InProgress</Td>
                                    <Td>80%</Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Train-1</Td>
                                    <Td>Choong</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md' 
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[1]}
                                        onChange={() => handleCheckboxChange(1)}></Checkbox>
                                    </Td>
                                    <Td>SIDNet_v1</Td>
                                    <Td></Td>
                                    <Td>Completed</Td>
                                    <Td>100%</Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Escalator_DB_train1</Td>
                                    <Td>Choong</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md' 
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[2]}
                                        onChange={() => handleCheckboxChange(2)}></Checkbox>
                                    </Td>
                                    <Td>SIDNet_test1</Td>
                                    <Td></Td>
                                    <Td>InProgress</Td>
                                    <Td>80%</Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Escalator_DB_train2</Td>
                                    <Td>Peter</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md' 
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[3]}
                                        onChange={() => handleCheckboxChange(3)}></Checkbox>
                                    </Td>
                                    <Td>Person_DET</Td>
                                    <Td></Td>
                                    <Td>Completed</Td>
                                    <Td></Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Escalator_DB_train1</Td>
                                    <Td>Choong</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md' 
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[4]}
                                        onChange={() => handleCheckboxChange(4)}></Checkbox>
                                    </Td>
                                    <Td>Person_DET</Td>
                                    <Td></Td>
                                    <Td>Completed</Td>
                                    <Td></Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Escalator_DB_train1</Td>
                                    <Td>BH</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md' 
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[5]}
                                        onChange={() => handleCheckboxChange(5)}></Checkbox>
                                    </Td>
                                    <Td>Person_DET</Td>
                                    <Td></Td>
                                    <Td>Completed</Td>
                                    <Td></Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Escalator_DB_train1</Td>
                                    <Td>BH</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Checkbox size='md' 
                                        border={1}
                                        borderStyle={'none'}
                                        borderColor={'gray.400'}
                                        colorScheme='teal'
                                        isChecked={checkedItems[6]}
                                        onChange={() => handleCheckboxChange(6)}></Checkbox>
                                    </Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td>InProgress</Td>
                                    <Td></Td>
                                    <Td>2023.3.3 12:30</Td>
                                    <Td>Escalator_DB_train3</Td>
                                    <Td>BH</Td>
                                </Tr>
                                
                            </Tbody>
                            {/* <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                            </Tfoot> */}
                        </Table>
                    </TableContainer>


                    {/* ############## paging 영역 ############## */}
                    <BoardPaging
                        currentPage={currentPage}
                        cntPerPage={cntPerPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </Box>

                <Box marginTop={10}>
                    <Box textAlign='right'>
                        <Input size="xs" width="250px" bgColor={'gray.200'} borderStyle="none" placeholder='Search for'/><IconButton size={'xs'} bgColor={'gray.200'} borderRadius={0} marginBottom={0.5} aria-label='Search database' icon={<SearchIcon />} />
                    </Box>
                    <Box textAlign='left'marginTop={'3'}>
                        <Flex>
                            <Text fontSize={'sm'}>Predict</Text>
                            <Button size={'xs'} bgColor={'#55677d'} colorScheme={'blackAlpha'} borderRadius={0} width={"120px"} marginLeft={'5'}>Hide/Show All</Button>
                            <Spacer />
                            <Button size={'xs'} bgColor={'#55677d'} colorScheme={'blackAlpha'} borderRadius={0} width={"120px"} marginRight={'1'}>Graph</Button>
                            <Button size={'xs'} bgColor={'#55677d'} colorScheme={'blackAlpha'} borderRadius={0} width={"120px"}>+New Predict</Button>
                        </Flex>
                    </Box>

                    <TableContainer maxWidth={'100%'} marginTop={1} whiteSpace={'nowrap'} overflowX="hidden">
                        <Table variant='striped' size={'sm'} colorScheme='blackAlpha'>
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead bgColor={"gray.300"}>
                            <Tr>
                                <Th px={2}>ID</Th>
                                <Th px={0}>Model</Th>
                                <Th px={0}>Version</Th>
                                <Th px={0}>Output Dataset</Th>
                                <Th px={0}>Test Dataset</Th>
                                <Th px={0}>Status</Th>
                                <Th px={0}>Progress</Th>
                                <Th px={0}>Last Modified</Th>
                                <Th px={0}>mAP</Th>
                                <Th px={0}>Created By</Th>
                                <Th px={0}>Release</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={2}></Td>
                                    <Td px={0}>SIDNET</Td>
                                    <Td px={0}></Td>
                                    <Td px={0}>Output Inf 1</Td>
                                    <Td px={0}>Test1</Td>
                                    <Td px={0}>InProgress</Td>
                                    <Td px={0}>80%</Td>
                                    <Td px={0}>2023.3.3 12:30</Td>
                                    <Td px={0}>70.0</Td>
                                    <Td px={0}>Choong</Td>
                                    <Td px={0}>On/OFF</Td>
                                </Tr>
                                <Tr>
                                    <Td px={2}></Td>
                                    <Td px={0}>SIDNet_v1</Td>
                                    <Td px={0}></Td>
                                    <Td px={0}>Output Inf 2</Td>
                                    <Td px={0}>Test1</Td>
                                    <Td px={0}>Completed</Td>
                                    <Td px={0}>100%</Td>
                                    <Td px={0}>2023.3.3 12:30</Td>
                                    <Td px={0}>73.3</Td>
                                    <Td px={0}>Choong</Td>
                                    <Td px={0}>-</Td>
                                </Tr>
                                <Tr>
                                    <Td px={2}></Td>
                                    <Td px={0}>SIDNet_test1</Td>
                                    <Td px={0}></Td>
                                    <Td px={0}>Output Inf 3</Td>
                                    <Td px={0}>Test1</Td>
                                    <Td px={0}>Completed</Td>
                                    <Td px={0}>100%</Td>
                                    <Td px={0}>2023.3.3 12:30</Td>
                                    <Td px={0}>84.0</Td>
                                    <Td px={0}>Peter</Td>
                                    <Td px={0}>-</Td>
                                </Tr>
                                <Tr>
                                    <Td px={2}></Td>
                                    <Td px={0}>SIDNett</Td>
                                    <Td px={0}></Td>
                                    <Td px={0}>Output Inf 4</Td>
                                    <Td px={0}>Test1</Td>
                                    <Td px={0}>Completed</Td>
                                    <Td px={0}></Td>
                                    <Td px={0}>2023.3.3 12:30</Td>
                                    <Td px={0}></Td>
                                    <Td px={0}>Peter</Td>
                                    <Td px={0}>-</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </>} />
        </>
    )
}