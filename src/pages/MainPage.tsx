import React, { ReactNode, useState } from 'react';
import {
  IconButton,
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
  Image, 
  useColorMode,
  Center
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
  RiFileListLine,
  RiLineChartLine,
  RiFlowChart,
  RiDatabase2Line,
  RiSaveLine,
  RiNodeTree,
  RiPlayCircleLine,
  RiUser6Line,
} from 'react-icons/ri';
import {
  LuNetwork,
} from 'react-icons/lu';

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  linkUrl: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: '프로젝트', icon: RiFileListLine, linkUrl: "/project"},
  { name: '모델', icon: RiFlowChart, linkUrl: "/models"},
  { name: '데이터', icon: RiFileListLine, linkUrl: "/"},
  { name: '레이블링', icon: RiDatabase2Line, linkUrl: "/"},
  { name: '실행', icon: RiPlayCircleLine, linkUrl: "/execution"},
  { name: '테스트', icon: LuNetwork, linkUrl: "/test"},
  { name: '모니터링', icon: RiLineChartLine, linkUrl: "/"},
  { name: '사용자', icon: RiUser6Line, linkUrl: "/user"},
  { name: '클러스터', icon: RiNodeTree, linkUrl: "/cluster"},
  { name: '저장소', icon: RiSaveLine, linkUrl: "/storage"},
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
    // bg={{ base: '#eee', sm: '#aaa', md: '#888', lg: '#666', xl: '#222' }}ml={{ base: 0, sm: 0, md: '80px', lg: '300px' }}
    <Box w={{ base: 'full', sm: 'full', md: 1600, lg: 1600 }}  minH="100vh" > 
      <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
        <SidebarContent  onClose={() => onClose} w={{ md: '80px', lg: '300px' }} display={{ base: 'none', md: 'block' }} onLogout={onLogout} />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
              <SidebarContent onClose={onClose} onLogout={onLogout}/>
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box w={{ base: 'full', sm: 'full', md: 'calc(100% - 80px)', lg: 'calc(100% - 300px)' }} p={{ base: '10px', sm: '10px', md: '30px 0px 30px 30px' }} >
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
  return (
    <Box
      // w={{ base: 0, md: 80 }}
      // pos="fixed"
      h="full"
      {...rest}>
      <Flex h="85" p={'0 30px'} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Icon as={RiBearSmileLine} fontSize={'24px'} mr={'8px'} />
          <Text fontSize={{base: '0px', lg: '22px'}} fontWeight={'500'} letterSpacing={'0'} m={'0'}>Vision Hub</Text>
        </Flex>

        <Button p={'0'} variant='none'>
          <Icon as={RiNotification2Line} fontSize={'24px'} />
        </Button>
        <Button p={'0'} variant='none'>
          <Icon as={RiMenuLine} fontSize={'24px'} />
        </Button>
       
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} linkUrl={link.linkUrl}>
          {link.name}
        </NavItem>
      ))}

      {/* Logout Button */}
      {/* <Box position="absolute" textAlign="center" w={"240px"} bottom={10} backgroundColor="cyon">
        <Text>administrator</Text>
        <Center>
          <Box w={"50%"} h={"30px"} bgColor={"teal"} borderRadius="md" style={{cursor:'pointer'}} onClick={()=>onLogout()}>
            <Flex>
              <IconButton variant="unstyle" color="white" marginTop={-1} aria-label="open menu" icon={<FiLogOut />} />
              <Text fontSize="md" color="white" marginTop={1} >Log out</Text>
            </Flex>
          </Box>
        </Center>
      </Box> */}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  linkUrl: string;
  children: ReactText;
}

const NavItem = ({ icon, children, linkUrl, ...rest }: NavItemProps) => {
  const pathname = window.location.pathname.split("/")[1];

  return (
    <Link to={linkUrl}  style={{ textDecoration: 'none'}}  >
      {/* <Link to={linkUrl}  style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}  _activeLink={{fontWeight:'bold'}} > */}
        {children.toString().toLowerCase().indexOf(pathname) > -1 ? (
          <Flex align="center" role="group" cursor="pointer" h={'60px'} p={'0 30px'} color={'#000'}  fontSize={{base: '0px', lg: '18px'}}
          _hover={{
            bg: '#f5f8fd',
            color: 'black',
          }}
          bg='#f5f8fd'
          {...rest}>
            {icon && (
              <Icon mr="3" fontSize="24px" as={icon} />
            )}
            {children}
          </Flex>
        ) : (
          <Flex align="center" role="group" cursor="pointer" h={'60px'} p={'0 30px'} color={'#333'} fontSize={{base: '0px', lg: '18px'}}
          _hover={{
            bg: '#f5f8fd',
            color: 'black',
          }}
          {...rest}>
            {icon && (
              <Icon mr="3" fontSize="24px" as={icon} />
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
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Icon as={RiBearSmileLine} fontSize={'24px'} mr={'10px'} />
      <Text fontSize="lg" fontWeight={'500'}>Vision Hub</Text>
    </Flex>
  );
};

export default MainPage