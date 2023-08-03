import React, { ReactNode, useState } from 'react';
import {
  IconButton,
  Badge,
  Button,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  // Link,
  Slide,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Stack,
  Image, 
  useColorMode,
  Avatar,
  Center,
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  // MenuArrow,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiServer,
  FiMenu,
  FiLogOut,
} from 'react-icons/fi';
import {
  RiBearSmileLine,
  RiNotification2Line,
  RiMenuLine,
  RiBarChartBoxLine,
  RiCloseFill,
  RiFileEditLine,
  RiFileListLine,
  RiLineChartLine,
  RiFlowChart,
  RiDatabase2Line,
  RiSaveLine,
  RiNodeTree,
  RiPlayCircleLine,
  RiUser6Line,
  RiDraftLine,
  RiSettings3Line,
  RiMore2Fill,
  RiFileList2Line,
  // RiShapesLine,
} from 'react-icons/ri';
import {
  MdOutlineScreenSearchDesktop,
} from 'react-icons/md';
import { createIcon } from "@chakra-ui/react";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { render } from "react-dom";
// import { useNavigate } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
// import { MnModels } from 'theme/icons/iconMnModels'
// import { UpDownIcon } from 'theme/icons/iconMnModels'



interface LinkItemProps {
  name: string;
  cate: string;
  icon: IconType;
  linkUrl: string;
}





const LinkItems: Array<LinkItemProps> = [

  
  { name: '프로젝트', cate: 'project', icon: RiFileList2Line, linkUrl: "/project"},
  { name: '모델', cate: 'models', icon: RiFileListLine, linkUrl: "/models"},
  { name: '데이터', cate: '/', icon: RiFileListLine, linkUrl: "/"},
  { name: '레이블링', cate: '/', icon: RiDatabase2Line, linkUrl: "/"},
  { name: '실행', cate: 'execution', icon: RiPlayCircleLine, linkUrl: "/execution"},
  { name: '테스트', cate: 'test', icon: RiDraftLine, linkUrl: "/test"},
  { name: '모니터링', cate: '/', icon: MdOutlineScreenSearchDesktop, linkUrl: "/"},
  { name: '사용자', cate: 'user', icon: RiUser6Line, linkUrl: "/user"},
  { name: '클러스터', cate: 'cluster', icon: RiNodeTree, linkUrl: "/cluster"},
  { name: '저장소', cate: 'storage', icon: RiSaveLine, linkUrl: "/storage"},
  // { name: 'Catalogs', icon: RiBarChartBoxLine, linkUrl: "/catalogs" },
  // { name: 'NeoVis1', icon: FiTrendingUp, linkUrl: "/neo4j/neoviz" },
  // { name: 'NeoVis2', icon: FiStar, linkUrl: "/neo4j/neovis" },
  // { name: '3D-Force', icon: FiCompass, linkUrl: "/neo4j/neoforce" },
  // { name: 'Settings', icon: FiSettings, linkUrl: "/" },
];

const MainPage = ({ children }: { children: ReactNode }) : JSX.Element => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [ isAuthenticated, setIsAuthenticated ] = useState<string|null>(sessionStorage.getItem('isAuthenticated'));

  const onLogout = () => {
    setIsAuthenticated("false");
    sessionStorage.setItem('isAuthenticated', "false");
    navigate("/login");
  }

  // const CircleIcon = (props) => (
  //   <Icon viewBox='0 0 200 200' {...props}>
  //     <path
  //       fill='currentColor'
  //       d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  //     />
  //   </Icon>
  // )


  return (
    <Box minW={"1600px"} minH={"100vh"} bg={'#f6f6f6'}> 
      <Flex w={{ sm: 1600}}>
        <SidebarContent  onClose={() => onClose} w={'270px'} h={'auto'} minH={'100vh'} display={{ base: 'block' }} fontFamily={'NanumSquare'} bg={'#22252b'} onLogout={onLogout} />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement={"left"}
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size={"full"}>
          <DrawerContent>
              <SidebarContent onClose={onClose} onLogout={onLogout}/>
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'none' }} onOpen={onOpen} />
        <Box w={'calc(100% - 270px)'} p={'35px 10px 50px 50px'} >
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  onLogout: () => void;
}

const SidebarContent = ({ onClose, onLogout, ...rest }: SidebarProps) => {

  const navigate = useNavigate();
  // 알람 list page
  const alarmList = () => {
    navigate({pathname  : '/common/alarmList' })
  }
  // 내 정보 관리 list page
  const accountMng = () => {
    navigate({pathname  : '/common/accountMng' })
  }

  // home icon
  const HomeAppLogo = createIcon({
    displayName: "HomeAppLogo",
    viewBox: "0 0 19 19",
    d: "M1.343 18.129c-.373 0-.69-.131-.951-.392A1.295 1.295 0 010 16.786v-2.07l4.029-3.47v6.883H1.343zm4.028 0V14.1h8.058v4.029H5.37zm9.4 0V9.484l-4.336-3.72 3.077-2.659 4.812 4.113c.15.13.266.285.35.464.084.179.126.369.126.571v8.533c0 .373-.13.69-.392.95a1.295 1.295 0 01-.95.393H14.77zM0 12.925V8.253a1.39 1.39 0 01.476-1.035L8.533.336c.13-.112.268-.196.414-.252a1.24 1.24 0 01.9 0c.15.056.29.13.42.224l2.21 1.902L0 12.925z",
  });

  // SNB icon
// const MnModels = createIcon({
//   displayName: "MnModels",
//   viewBox: "0 0 19 20",
//   d: "M4.192 8.615L9 .731l4.808 7.884H4.192zm10.308 11c-1.147 0-2.12-.399-2.918-1.197s-1.197-1.77-1.197-2.918c0-1.147.399-2.12 1.197-2.918s1.77-1.197 2.918-1.197c1.148 0 2.12.399 2.918 1.197s1.198 1.77 1.198 2.918c0 1.147-.4 2.12-1.198 2.918-.798.798-1.77 1.197-2.918 1.197zm-14.115-.5v-7.23h7.23v7.23H.385zm14.115-1c.732 0 1.351-.252 1.857-.758s.759-1.124.759-1.857c0-.732-.253-1.35-.759-1.857-.505-.506-1.124-.758-1.857-.758-.732 0-1.35.252-1.857.758-.505.506-.758 1.124-.758 1.857 0 .732.252 1.351.758 1.857s1.125.758 1.857.758zm-12.615-.5h4.23v-4.23h-4.23v4.23zm4.954-10.5h4.323L9 3.638 6.84 7.115z",
// });

// const CircleIcon = (props) => (
//   <Icon viewBox='0 0 200 200' {...props}>
//     <path
//       fill='currentColor'
//       d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
//     />
//   </Icon>
// )

  return (
    <Box
      pos={"relative"} h={"full"}
      {...rest}>
      <Flex h={"90"} p={'0 25px'} justifyContent={"flex-start"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Icon as={HomeAppLogo} fontSize={'19px'} color={'#fff'} mr={'15px'}  />
          {/* <Icon as={MnModels} fontSize={'19px'} color={'#fff'} mr={'15px'}  /> */}
          {/* <Icon name={MnModels} fontSize={'19px'} color={'#fff'} mr={'15px'}  /> */}
          <Text fontSize={'20px'} fontWeight={'700'} fontFamily={'SUIT'} color={'#fff'}>VISION HUB</Text>
        </Flex>

        {/* <Button variant={'typeIcon'} pos={{base: 'absolute', lg: 'relative'}} bottom={{base: '95px', lg: 'auto'}} >
          <Icon as={RiNotification2Line} /> */}
          {/* 알림 new 일때 Badge Show */}
          {/* <Badge variant={'alarm'}>New</Badge>
        </Button> */}

        {/* <Button p={'0'} variant={'none'}> 
          <Icon as={RiMenuLine} fontSize={'24px'} />
        </Button> */}
       
        {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} cate={link.cate} icon={link.icon} linkUrl={link.linkUrl} m={'0 12px 6px 12px'}>
          {link.name}
        </NavItem>
      ))}

      {/* account Area */}
      <Flex alignItems={"center"} pos={'absolute'} bottom={'0px'} w={'100%'} h={'95px'} p={'0 10px 0 20px'} borderTop={'solid 1px #1d1f24'}>
        <Flex alignItems={"flex-start"}  justifyContent={"space-between"} w={'100%'}>
          <Stack direction={"row"} alignItems={"center"} gap={'0'}>
            <Avatar
              boxSize={"30px"}
              maxW={'30px'}
              borderRadius={'full'}
              src={"https://bit.ly/sage-adebayo"}
              name={'홍길동'}
            />
            <VStack alignItems={"flex-start"} gap={'0'} ml={'15px'}>
              <Text fontSize={'15px'} color={'#A8B1C0'} mb={'7px'}>홍길동</Text>
              <Text fontSize={'13px'} color={'#636D7E'}>honggildong@gmail.com</Text>
            </VStack>
          </Stack>

          <Menu placement="right">
            <Button as={MenuButton} variant={'typeIcon'}>
              <Icon as={RiMore2Fill}  fontSize={'18px'} color={'#fff'} />
            </Button>
            <MenuList>
              {/* <MenuArrow /> */}
              <MenuItem onClick={accountMng}>내 정보 관리</MenuItem>
              <MenuItem onClick={()=>onLogout()}>로그아웃</MenuItem>
            </MenuList>
          </Menu>
          
          {/* <Button onClick={accountMng} display={{ sm: 'none', lg: 'block' }} variant={'typeIcon'}>
            <Icon as={RiSettings3Line} />
          </Button> */}
        </Flex>
        {/* <Button variant={'grayRoundBtn'} display={{ sm: 'none', lg: 'block' }} onClick={()=>onLogout()}>
            로그아웃RiMore2Fill
        </Button> */}
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  cate: string;
  linkUrl: string;
  children: ReactText;
}

const NavItem = ({cate, icon, children, linkUrl, ...rest }: NavItemProps) => {
  const pathname = window.location.pathname.split("/")[1];
  // console.log(children.toString().toLocaleLowerCase())
  // console.log('** menu 영문 cate >> ' + cate)
  // console.log('** url 경로임=>> ' + pathname)
  // console.log('** 폴더 경로임=>> ' + linkUrl)


  // SNB icon
// const MnModels = createIcon({
//   displayName: "MnModels",
//   viewBox: "0 0 19 20",
//   d: "M4.192 8.615L9 .731l4.808 7.884H4.192zm10.308 11c-1.147 0-2.12-.399-2.918-1.197s-1.197-1.77-1.197-2.918c0-1.147.399-2.12 1.197-2.918s1.77-1.197 2.918-1.197c1.148 0 2.12.399 2.918 1.197s1.198 1.77 1.198 2.918c0 1.147-.4 2.12-1.198 2.918-.798.798-1.77 1.197-2.918 1.197zm-14.115-.5v-7.23h7.23v7.23H.385zm14.115-1c.732 0 1.351-.252 1.857-.758s.759-1.124.759-1.857c0-.732-.253-1.35-.759-1.857-.505-.506-1.124-.758-1.857-.758-.732 0-1.35.252-1.857.758-.505.506-.758 1.124-.758 1.857 0 .732.252 1.351.758 1.857s1.125.758 1.857.758zm-12.615-.5h4.23v-4.23h-4.23v4.23zm4.954-10.5h4.323L9 3.638 6.84 7.115z",
// });

// const CircleIcon = (props) => (
//   <Icon viewBox='0 0 200 200' {...props}>
//     <path
//       fill='currentColor'
//       d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
//     />
//   </Icon>
// )

  return (
    <Link to={linkUrl}  style={{ textDecoration: 'none'}}  >
        {cate.toString().toLowerCase().indexOf(pathname) > -1 ? (
          <Flex align={"center"} role={"group"} cursor={"pointer"} h={'45px'}  color={'#fff'}  fontSize={'15px'} fontWeight={'500'} fontFamily={'Pretendard'} p={'0 12px'} borderRadius={'4px'} bg={'#3d6dfe'}  _hover={{ bg: '#3d6dfe', color: '#fff', }}
          {...rest}>
            {icon && (
              <Icon mr={"3"} fontSize={"20px"} as={icon} color={'#fff'} />
            )}
            {children}
          </Flex>
        ) : (
          <Flex align={"center"} role={"group"} cursor={"pointer"} h={'45px'} color={'#A8B1C0'} fontSize={'15px'} fontWeight={'500'} fontFamily={'Pretendard'} p={'0 12px'}borderRadius={'4px'} _hover={{ bg: '#1a1c21' }}
          {...rest}>
            {icon && (
               <Icon mr={"3"} fontSize={"20px"} as={icon} color={'#636D7E'} />
              // <Icon />
              // <Image as={icon} mr={"3"} fontSize={"20px"}  color={'#636D7E'}  src={'/assets/images/MnModels.svg'} />
            )}
            {children}
          </Flex>
        )}
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height={"20"}
      alignItems={"center"}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth={"1px"}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={"flex-start"}
      {...rest}>
      <IconButton
        variant={"outline"}
        onClick={onOpen}
        aria-label={"open menu"}
        icon={<FiMenu />}
      />
      <Icon as={RiBearSmileLine} fontSize={'24px'} mr={'10px'} />
      <Text fontSize={"lg"} fontWeight={'500'}>Vision Hub</Text>
    </Flex>
  );
};

export default MainPage