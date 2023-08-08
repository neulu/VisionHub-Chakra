import React, { ReactNode, useState } from 'react';
import {
  chakra,
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
  LuLogOut,
} from 'react-icons/lu';
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
  // icon: IconType;
  linkUrl: string;
  icoSrc: string;
}





const LinkItems: Array<LinkItemProps> = [

  
  { name: '프로젝트', cate: 'project', icoSrc: 'ico-project', linkUrl: "/project"},
  { name: '모델', cate: 'models', icoSrc: 'ico-models', linkUrl: "/models"},
  { name: '데이터', cate: '/', icoSrc: 'ico-data', linkUrl: "/"},
  { name: '레이블링', cate: '/', icoSrc: 'ico-labeling', linkUrl: "/"},
  { name: '실행', cate: 'execution', icoSrc: 'ico-execution', linkUrl: "/execution"},
  { name: '테스트', cate: 'test', icoSrc: 'ico-test', linkUrl: "/test"},
  { name: '모니터링', cate: '/', icoSrc: 'ico-monitoring', linkUrl: "/"},
  { name: '사용자', cate: 'user', icoSrc: 'ico-user', linkUrl: "/user"},
  { name: '클러스터', cate: 'cluster', icoSrc: 'ico-cluster', linkUrl: "/cluster"},
  { name: '저장소', cate: 'storage', icoSrc: 'ico-storage', linkUrl: "/storage"},
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
        <SidebarContent  onClose={() => onClose} w={'270px'} h={'auto'} minH={'100vh'} display={{ base: 'block' }} bg={'#22252b'} onLogout={onLogout} />
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


  return (
    <Box
      pos={"relative"} h={"full"}
      {...rest}>
      <Flex h={"90"} p={'0 25px'} justifyContent={"flex-start"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          {/* <Icon as={HomeAppLogo} fontSize={'19px'} color={'#fff'} mr={'15px'}  /> */}
          <Image src={'/assets/images/logo.svg'} alt={'Vision Hub'} mr={'8px'} />
          <Text fontSize={'20px'} fontWeight={'600'} fontFamily={'SUIT'} color={'#fff'}>VISION HUB</Text>
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
        <NavItem key={link.name} cate={link.cate} icoSrc={link.icoSrc} linkUrl={link.linkUrl} m={'0 12px 6px 12px'}>
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

          <Menu variant={'typeAccount'} placement="right">
            <Button as={MenuButton} variant={'typeIcon'}>
              <Icon as={RiMore2Fill}  fontSize={'18px'} color={'#fff'} />
            </Button>
            <MenuList boxShadow='md'>
              {/* <MenuArrow /> */}
              <MenuItem onClick={accountMng}>프로필설정</MenuItem>
              <MenuItem onClick={()=>onLogout()}>
                로그아웃<Image src={'/assets/images/icons/ico-logout.svg'} alt={'로그아웃'} ml={'8px'} />
              </MenuItem>
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
  icoSrc: string;
  cate: string;
  linkUrl: string;
  children: ReactText;
}

const NavItem = ({cate, icoSrc, children, linkUrl, ...rest }: NavItemProps) => {
  const pathname = window.location.pathname.split("/")[1];
  // console.log(children.toString().toLocaleLowerCase())
  // console.log('** menu 영문 cate >> ' + cate)
  // console.log('** url 경로임=>> ' + pathname)
  // console.log('** 폴더 경로임=>> ' + linkUrl)

  return (
    <Link to={linkUrl}  style={{ textDecoration: 'none'}}  >
        {cate.toString().toLowerCase().indexOf(pathname) > -1 ? (
          <Flex align={"center"} role={"group"} cursor={"pointer"} h={'45px'}  color={'#fff'}  fontSize={'15px'} fontWeight={'500'} fontFamily={'Pretendard'} p={'0 12px'} borderRadius={'4px'} bg={'#3d6dfe'}  _hover={{ bg: '#3d6dfe', color: '#fff', }}
          {...rest}>
            {icoSrc && (
              //<Icon mr={"3"} fontSize={"20px"} as={icon} color={'#fff'} />
              <Image src={'/assets/images/icons/'+ icoSrc + '-active.svg'} alt={'icon'} mr={'13px'} />
            )}
            <chakra.span>{children}</chakra.span>
          </Flex>
        ) : (
          <Flex align={"center"} role={"group"} cursor={"pointer"} h={'45px'} color={'#A8B1C0'} fontSize={'15px'} fontWeight={'500'} fontFamily={'Pretendard'} p={'0 12px'}borderRadius={'4px'} _hover={{ bg: '#1a1c21' }}
          {...rest}>
            {icoSrc && (
              <Image src={'/assets/images/icons/'+ icoSrc + '.svg'} alt={'icon'} mr={'13px'} />
              //<Icon mr={"3"} fontSize={"20px"} as={icon} color={'#636D7E'} />
            )}
            <chakra.span>{children}</chakra.span>
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