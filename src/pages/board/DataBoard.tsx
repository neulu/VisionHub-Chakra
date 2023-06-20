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
    Box,
    Text,
    Checkbox, 
    CheckboxGroup
} from '@chakra-ui/react'
import BoardPaging from 'components/common/BoardPaging'

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


    const totalPages = 5;
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
                    <TableContainer marginTop={5} whiteSpace={'nowrap'}>
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
                    {/* paging 영역 */}
                    <BoardPaging
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />


                </Box>

                
            </>} />
        </>
    )
}