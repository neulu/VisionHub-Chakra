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
import { Link, useNavigate } from 'react-router-dom';



interface LinkItemProps {
  name: string;
  cate: string;
  // icon: IconType;
  linkUrl: string;
  icoSrc: string;
  addCss: string;
}





const LinkItems: Array<LinkItemProps> = [
  
  { name: '프로젝트', cate: 'project', icoSrc: 'ico-project', linkUrl: "/project", addCss: ''},
  { name: '모델', cate: 'models', icoSrc: 'ico-models', linkUrl: "/models", addCss: ''},
  { name: '데이터', cate: '/', icoSrc: 'ico-data', linkUrl: "/", addCss: 'blank'},
  { name: '레이블링', cate: '/', icoSrc: 'ico-labeling', linkUrl: "/", addCss: 'blank'},
  { name: '실행', cate: 'execution', icoSrc: 'ico-execution', linkUrl: "/execution", addCss: ''},
  { name: '테스트', cate: 'test', icoSrc: 'ico-test', linkUrl: "/test", addCss: ''},
  { name: '모니터링', cate: '/', icoSrc: 'ico-monitoring', linkUrl: "/", addCss: 'blank'},
  { name: '사용자', cate: 'user', icoSrc: 'ico-user', linkUrl: "/user", addCss: 'divider'},
  { name: '클러스터', cate: 'cluster', icoSrc: 'ico-cluster', linkUrl: "/cluster", addCss: ''},
  { name: '저장소', cate: 'storage', icoSrc: 'ico-storage', linkUrl: "/storage", addCss: ''},
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



  return (
    <Box
      pos={"relative"} h={"full"}
      {...rest}>
      <Flex h={"100px"} p={'0 0 10px 22px'} justifyContent={"flex-start"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Image src={'/assets/images/logo.svg'} alt={'Vision Hub'} mr={'8px'} />
          <Text fontSize={'20px'} fontWeight={'600'} fontFamily={'SUIT'} color={'#fff'}>VISION HUB</Text>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} className={'nav'}>
      {LinkItems.map((link) => (
        <NavItem key={link.name} cate={link.cate} icoSrc={link.icoSrc} linkUrl={link.linkUrl} addCss={link.addCss} m={'0 12px 6px 12px'}>
          {link.name}
        </NavItem>
      ))}
      </Flex>

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
  addCss: string;
  children: ReactText;
}

const NavItem = ({cate, icoSrc, children, linkUrl, addCss, ...rest }: NavItemProps) => {
  const pathname = window.location.pathname.split("/")[1];
  // console.log(children.toString().toLocaleLowerCase())
  // console.log('** menu 영문 cate >> ' + cate)
  // console.log('** url 경로임=>> ' + pathname)
  // console.log('** 폴더 경로임=>> ' + addCss)

  return (
    <Link to={linkUrl} className={addCss}>
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