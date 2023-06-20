import React, { ReactNode, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
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
  FiSettings,
  FiMenu,
  FiLogOut,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useNavigate } from 'react-router';

interface LinkItemProps {
  name: string;
  icon: IconType;
  linkUrl: string | undefined;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, linkUrl: "/" },
  { name: 'NeoVis', icon: FiTrendingUp, linkUrl: "/neo4j/neoviz" },
  { name: '3D-Force', icon: FiCompass, linkUrl: "/neo4j/neoforce" },
  { name: 'Favourites', icon: FiStar, linkUrl: "/" },
  { name: 'Settings', icon: FiSettings, linkUrl: "/" },
];

export default function MainPage({ children }: { children: ReactNode }) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isAuthenticated, setIsAuthenticated] = useState<string|null>(sessionStorage.getItem('isAuthenticated'));

  const onLogout = () => {
    setIsAuthenticated("false");
    sessionStorage.setItem('isAuthenticated', "false");
    navigate("/login");
  }

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} onLogout={onLogout} />
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
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
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
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="10" justifyContent="space-between">
        <Image src="https://demo.datahubproject.io/assets/platforms/datahublogo.png" width={25} />
        <Text fontSize="lg" fontWeight="bold" marginTop={3}>IDP-Datamesh</Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} linkUrl={link.linkUrl}>
          {link.name}
        </NavItem>
      ))}

      {/* Logout Button */}
      <Box position="absolute" textAlign="center" w={"100%"} bottom={10} backgroundColor="cyon">
        <Text>administrator</Text>
        <Center>
          <Box w={"50%"} h={"30px"} bgColor={"teal"} borderRadius="md" style={{cursor:'pointer'}} onClick={()=>onLogout()}>
            <Flex>
              <IconButton variant="unstyle" color="white" marginTop={-1} aria-label="open menu" icon={<FiLogOut />} />
              <Text fontSize="md" color="white" marginTop={1} >Log out</Text>
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  linkUrl: string | undefined;
  children: ReactText;
}

const NavItem = ({ icon, children, linkUrl, ...rest }: NavItemProps) => {
  return (
    <Link href={linkUrl} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer"
        _hover={{
          bg: 'teal',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon mr="4" fontSize="16" _groupHover={{ color: 'white',}} as={icon} />
        )}
        {children}
      </Flex>
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
      <Image src="https://demo.datahubproject.io/assets/platforms/datahublogo.png" marginLeft={5} width={25} />
      <Text fontSize="lg" fontFamily="monospace" fontWeight="bold" marginTop={3}>IDP-Datamesh</Text>
    </Flex>
  );
};