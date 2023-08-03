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
    FormControl,
    FormLabel,
    Textarea,
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
    CircularProgress, 
    CircularProgressLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import {
    RiUserSettingsLine,
    RiArrowDownSLine,
    RiAddCircleLine,
    RiDownloadLine,
    RiFilePptFill,
  } from 'react-icons/ri';
  import { IconType } from 'react-icons';
  import { Link, useNavigate } from 'react-router-dom';

const ModelWrite = () : JSX.Element => { 

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // 추가 page
    const writeModel = () => {
        navigate({pathname  : '/' })
    }

    return (
        <>
            <MainPage children={<>
                <Container>
                    <Box mb={'40px'}>
                        <Flex align={"center"} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Heading>
                                  모델 추가
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
                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>모델명</FormLabel>
                              <Input type={'text'} variant={'typeWrite'} placeholder={'모델명을 입력해주세요.'} />
                            </FormControl>

                            <SimpleGrid templateColumns='repeat(3, 1fr)' gap={'100px'}>
                                <FormControl variant={'typeWrite'} isRequired>
                                  <FormLabel>버전</FormLabel>
                                  <Menu variant={'typeFlexible'}>
                                      <MenuButton as={Button} variant={'typeSelectWriteBtn'} rightIcon={<RiArrowDownSLine />}>
                                        v1.1
                                      </MenuButton>
                                      <MenuList w={'180px'}>
                                          <MenuItem>v1.1</MenuItem>
                                          <MenuItem>v1.2</MenuItem>
                                          <MenuItem>v1.3</MenuItem>
                                      </MenuList>
                                  </Menu>
                                </FormControl>
                                <FormControl variant={'typeWriteSm'} isRequired>
                                  <FormLabel>모델학습</FormLabel>
                                  <Menu variant={'typeFlexible'}>
                                      <MenuButton as={Button} variant={'typeSelectBtnSm'} rightIcon={<RiArrowDownSLine />}>
                                        학습형태 선택
                                      </MenuButton>
                                      <MenuList w={'180px'}>
                                          <MenuItem>학습형태 111111</MenuItem>
                                          <MenuItem>학습형태 2222</MenuItem>
                                          <MenuItem>학습형태 33</MenuItem>
                                      </MenuList>
                                  </Menu>
                                </FormControl>
                                <FormControl variant={'typeWriteSm'} isRequired>
                                  <FormLabel>저장소</FormLabel>
                                  <Menu variant={'typeFlexible'}>
                                      <MenuButton as={Button} variant={'typeSelectBtnSm'} rightIcon={<RiArrowDownSLine />}>
                                        저장소 선택
                                      </MenuButton>
                                      <MenuList w={'180px'}>
                                          <MenuItem>저장소 111111</MenuItem>
                                          <MenuItem>저장소 2222</MenuItem>
                                          <MenuItem>저장소 33</MenuItem>
                                      </MenuList>
                                  </Menu>
                                </FormControl>
                            </SimpleGrid>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>Detection</FormLabel>
                              <Button variant={'typeSimple'} pos={'absolute'} top={'35px'} >
                                Template file
                                <Icon as={RiDownloadLine} fontSize={'18px'} ml={'5px'} />
                              </Button>
                              <Flex flexDirection={'column'} alignItems={'flex-end'} w={'calc(100% - 200px)'}>
                                <Flex alignItems={'center'} justifyContent={'center'} w={'100%'} minH={'120px'} border={'dashed 1px #e5e5e5'} borderRadius={'4px'}>
                                  <Icon as={RiAddCircleLine} fontSize={'24px'} color={'#e5e5e5'} mr={'10px'} />
                                  <Text color={'#b3b3b3'} m={0}>
                                    파일을 마우스로 이곳에 끌어오세요.
                                  </Text>
                                  <Input type={'file'} accept={'.zip'} display={'none !important'} />
                                </Flex>
                                <Text variant={'typeDescMd'} mt={'10px'}>최대 100MB까지 업로드 가능합니다.</Text>
                              </Flex>
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>Detection</FormLabel>
                              <Button variant={'typeSimple'} pos={'absolute'} top={'35px'} >
                                Template file
                                <Icon as={RiDownloadLine} fontSize={'18px'} ml={'5px'} />
                              </Button>
                              {/* Hover ==>> border, icon, text color => #3725FF */}
                              <Flex flexDirection={'column'} alignItems={'flex-end'} w={'calc(100% - 200px)'}>
                                <Flex alignItems={'center'} justifyContent={'center'} w={'100%'} minH={'120px'} border={'dashed 1px #e5e5e5'} borderRadius={'4px'} borderColor={'#3725FF'}>
                                  <Icon as={RiAddCircleLine} fontSize={'24px'} color={'#3725FF'} mr={'10px'} />
                                  <Text color={'#3725FF'} m={0}>
                                    파일을 마우스로 이곳에 끌어오세요.
                                  </Text>
                                  <Input type={'file'} accept={'.zip'} display={'none !important'} />
                                </Flex>
                                <Text variant={'typeDescMd'} mt={'10px'}>최대 100MB까지 업로드 가능합니다.</Text>
                              </Flex>
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>Config</FormLabel>
                              <Button variant={'typeSimple'} pos={'absolute'} top={'35px'} >
                                Template file
                                <Icon as={RiDownloadLine} fontSize={'18px'} ml={'5px'} />
                              </Button>
                              <Flex flexDirection={'column'} alignItems={'flex-end'} w={'calc(100% - 200px)'}>
                                <Flex alignItems={'center'} justifyContent={'center'} w={'100%'} minH={'120px'} border={'dashed 1px #e5e5e5'} borderRadius={'4px'}>
                                  {/* <Icon as={RiAddCircleLine} fontSize={'24px'} color={'#e5e5e5'} mr={'10px'} />
                                  <Text color={'#b3b3b3'} m={0}>
                                    파일을 마우스로 이곳에 끌어오세요.
                                  </Text> */}
                                  <Flex flexDirection={'column'} alignItems={'center'} >
                                    <CircularProgress value={40} size={'60px'} color={'#3725FF'} thickness='8px'>
                                      <CircularProgressLabel fontWeight={'700'} >40%</CircularProgressLabel>
                                    </CircularProgress>
                                    <Flex alignItems={'center'} justifyContent={'center'}>
                                      <Text variant={'typeDescSm'}> Uploading file...</Text>
                                      <Button variant={'typeSimpleSm'} ml={'10px'}>취소</Button>
                                    </Flex>
                                  </Flex>
                                  <Input type={'file'} accept={'.zip'} display={'none !important'} />
                                </Flex>
                                <Text variant={'typeDescMd'} mt={'10px'}>최대 100MB까지 업로드 가능합니다.</Text>
                              </Flex>
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>Check Point(*.pt)</FormLabel>
                              <Flex flexDirection={'column'} alignItems={'flex-end'} w={'calc(100% - 200px)'}>
                                <Flex alignItems={'center'} justifyContent={'center'} w={'100%'} minH={'120px'} border={'dashed 1px #e5e5e5'} borderRadius={'4px'}>

                                  <Flex flexDirection={'column'} justifyContent={'flex-start'} w={'100%'} minH={'120px'} p={'7px 15px'}>
                                    {/* file */}
                                    <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                      <Flex alignItems={'center'} justifyContent={'center'}>
                                        <Button variant={'typeSimpleSm'} mr={'10px'}>삭제</Button>
                                        <Icon as={RiFilePptFill} fontSize={'24px'} color={'#3725FF'} mr={'5px'} />
                                        <Text variant={'typeDescMd'} color={'#3725FF'}>check point .pt</Text>
                                        <Button variant={'typeSimpleWhiteSm'} ml={'10px'} onClick={onOpen}>미리보기</Button>
                                      </Flex>
                                      <Text variant={'typeDescMd'} color={'#3725FF'}>258 MB</Text>
                                    </Flex>

                                    {/* file */}
                                    <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                      <Flex alignItems={'center'} justifyContent={'center'}>
                                        <Button variant={'typeSimpleSm'} mr={'10px'}>삭제</Button>
                                        <Icon as={RiFilePptFill} fontSize={'24px'} color={'#3725FF'} mr={'5px'} />
                                        <Text variant={'typeDescMd'} color={'#3725FF'}>check pointpoint .pt</Text>
                                        <Button variant={'typeSimpleWhiteSm'} ml={'10px'} onClick={onOpen}>미리보기</Button>
                                      </Flex>
                                      <Text variant={'typeDescMd'} color={'#3725FF'}>58 MB</Text>
                                    </Flex>

                                    {/* file */}
                                    <Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                      <Flex alignItems={'center'} justifyContent={'center'}>
                                        <Button variant={'typeSimpleSm'} mr={'10px'}>삭제</Button>
                                        <Icon as={RiFilePptFill} fontSize={'24px'} color={'#3725FF'} mr={'5px'} />
                                        <Text variant={'typeDescMd'} color={'#3725FF'}>check pointpoint .pt</Text>
                                        <Button variant={'typeSimpleWhiteSm'} ml={'10px'} onClick={onOpen}>미리보기</Button>
                                      </Flex>
                                      <Text variant={'typeDescMd'} color={'#3725FF'}>58 MB</Text>
                                    </Flex>
                                    

                                  </Flex>

                                </Flex>
                                <Text variant={'typeDescMd'} mt={'10px'}>최대 100MB까지 업로드 가능합니다.</Text>
                              </Flex>
                            </FormControl>

                            <FormControl variant={'typeWrite'} isRequired>
                              <FormLabel>설명</FormLabel>
                              <Textarea variant={'typeWrite'} placeholder={'설명을 작성해 주세요.'} />
                            </FormControl>
                          </VStack>
                      </SimpleGrid>
                      
                    </Box>


                    {/* modal 미리보기 */}
                    <Modal isOpen={isOpen} onClose={onClose} variant={'typePreview'} scrollBehavior={'inside'}>
                      <ModalOverlay />
                      <ModalContent maxW={'880px'}>
                        <ModalHeader>
                          <Icon as={RiFilePptFill} fontSize={'24px'} color={'#3725FF'} mr={'10px'} />
                           check pointpoint .pt 미리보기
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                        apiVersion: 0.1.0<br />
                        kind: vhubDetector<br />
                        checkpointPath: yolov5n6.pt<br />
                        confidenceThreshold: 0.5<br />
                        classNames:<br />
                          - person<br />
                          - bicycle<br />
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
                          - broccoli<br />
                          - carrot<br />
                          - hot dog<br />
                          - pizza<br />
                          - donut<br />
                          - cake<br />
                          - chair<br />
                          - couch<br />
                          - potted plant<br />
                          - bed<br />
                          - dining table<br />
                          - toilet<br />
                          - tv<br />
                          - laptop<br />
                          - mouse<br />
                          - remote<br />
                          - keyboard<br />
                          - cell phone<br />
                          - microwave<br />
                          - oven<br />
                          - toaster<br />
                          - sink<br />
                          - refrigerator<br />
                          - book<br />
                          - clock<br />
                          - vase<br />
                          - scissors<br />
                          - teddy bear<br />
                          - hair drier<br />
                          - toothbrush<br />
                        outputConfig:<br />
                          data:<br />
                            roundingDigit: 3<br />
                          meta:<br />
                        </ModalBody>
                      </ModalContent>
                    </Modal>


                </Container>
            </>} />
        </>
    )
}



export default ModelWrite;