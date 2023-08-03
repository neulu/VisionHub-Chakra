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
  RiMore2Fill,
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
} from 'react-icons/ri';
import {
  LuNetwork,
} from 'react-icons/lu';

import { IconType } from 'react-icons';
import { ReactText } from 'react';
// import { useNavigate } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

interface LinkItemProps {
  name: string;
  cate: string;
  icon: IconType;
  linkUrl: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: '프로젝트', cate: 'project', icon: RiFileListLine, linkUrl: "/project"},
  { name: '모델', cate: 'models', icon: RiFlowChart, linkUrl: "/models"},
  { name: '데이터', cate: '/', icon: RiFileListLine, linkUrl: "/"},
  { name: '레이블링', cate: '/', icon: RiDatabase2Line, linkUrl: "/"},
  { name: '실행', cate: 'execution', icon: RiPlayCircleLine, linkUrl: "/execution"},
  { name: '테스트', cate: 'test', icon: RiDraftLine, linkUrl: "/test"},
  { name: '모니터링', cate: '/', icon: RiLineChartLine, linkUrl: "/"},
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


  return (
    <Box w={{ sm: 1600}}  minH={"100vh"} > 
      <Flex flexDirection={{ sm: 'row' }}>
        <SidebarContent  onClose={() => onClose} w={{ sm: '80px', lg: '300px' }} h={'auto'} minH={'100vh'} display={{ base: 'block' }} fontFamily={'NanumSquare'} borderRight={'solid 1px #ddd'} onLogout={onLogout} />
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
        <Box w={{ sm: 'calc(100% - 80px)', lg: 'calc(100% - 300px)' }} p={{ sm: '40px 0px 30px 30px' }} >
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

  return (
    <Box
      // w={{ base: 0, md: 80 }}
      pos={"relative"} h={"full"}
      {...rest}>
      <Flex h={"85"} p={'0 30px'} justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Icon as={RiBearSmileLine} fontSize={'24px'} mr={'8px'} />
          <Text fontSize={{base: '0px', lg: '22px'}} fontWeight={'700'} m={'0'}>Vision Hub</Text>
        </Flex>

        <Button variant={'typeIcon'} pos={{base: 'absolute', lg: 'relative'}} bottom={{base: '95px', lg: 'auto'}} >
          <Icon as={RiNotification2Line} />
          {/* 알림 new 일때 Badge Show */}
          <Badge variant={'alarm'}>New</Badge>
        </Button>

        {/* <Button p={'0'} variant={'none'}> 
          <Icon as={RiMenuLine} fontSize={'24px'} />
        </Button> */}
       
        {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} cate={link.cate} icon={link.icon} linkUrl={link.linkUrl}>
          {link.name}
        </NavItem>
      ))}

      {/* account Area */}
      <Flex justifyContent={"space-between"} alignItems={"center"} pos={'absolute'} bottom={'40px'} w={'100%'} p={{ sm: '0 25px', lg: '0 30px' }}>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"}  mr={'4px'} gap={'0'}>
            <Menu placement="right">
              <MenuButton>
                <Avatar
                  boxSize={"33px"}
                  maxW={'33px'}
                  borderRadius={'full'}
                  src={"https://bit.ly/sage-adebayo"}
                  name={'홍길동'}
                />
              </MenuButton>
              <MenuList display={{ sm: 'block', lg: 'none' }} >
                {/* <MenuArrow /> */}
                <MenuItem onClick={accountMng}>내 정보 관리</MenuItem>
                <MenuItem onClick={()=>onLogout()}>로그아웃</MenuItem>
              </MenuList>
            </Menu>
            <Text display={{ sm: 'none', lg: 'block' }} fontSize={'lg'} m={'0 0 0 8px'}>홍길동</Text>
          </Stack>
          
          <Button onClick={accountMng} display={{ sm: 'none', lg: 'block' }} variant={'typeIcon'}>
            <Icon as={RiSettings3Line} />
          </Button>
        </Flex>
        <Button variant={'grayRoundBtn'} display={{ sm: 'none', lg: 'block' }} onClick={()=>onLogout()}>
            로그아웃
        </Button>
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
  return (
    <Link to={linkUrl}  style={{ textDecoration: 'none'}}  >
        {cate.toString().toLowerCase().indexOf(pathname) > -1 ? (
          <Flex align={"center"} role={"group"} cursor={"pointer"} h={'60px'} p={'0 30px'} color={'#000'}  fontSize={{base: '0px', lg: '18px'}} fontWeight={'normal'} bg={'#f5f8fd'}  _hover={{ bg: '#f5f8fd', color: 'black', }}
          {...rest}>
            {icon && (
              <Icon mr={"3"} fontSize={"24px"} as={icon} />
            )}
            {children}
          </Flex>
        ) : (
          <Flex align={"center"} role={"group"} cursor={"pointer"} h={'60px'} p={'0 30px'} color={'#333'} fontSize={{base: '0px', lg: '18px'}}  _hover={{ bg: '#f5f8fd', color: 'black', }}
          {...rest}>
            {icon && (
              <Icon mr={"3"} fontSize={"24px"} as={icon} />
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