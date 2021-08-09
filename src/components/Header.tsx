import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  StackDivider,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import CrowdFundLogo from '../assets/svg/logo-crowdfund.svg';
import { NavLinks } from '../utils/navLinks';

interface INavLink {
  children: string;
  index: number;
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink: React.FC<INavLink> = ({ children, index }) => (
    <Link
      href="#"
      textAlign="left"
      bg="white"
      p="5"
      display="block"
      w="full"
      onClick={isOpen ? onClose : onOpen}
      roundedTop={index === 0 ? 'lg' : 'none'}
      roundedBottom={index === NavLinks.length - 1 ? 'lg' : 'none'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.100',
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box mb={{ base: '24', md: '48' }}>
      <Flex align="center" p="6" justifyContent="space-between">
        <Link zIndex="overlay">
          <Image src={CrowdFundLogo} h="20px" />
        </Link>

        <HStack as="nav" spacing="6" display={{ base: 'none', md: 'flex' }}>
          {NavLinks.map((link) => (
            <Link
              href="#"
              key={link + Math.random()}
              color="white"
              fontSize="sm"
              fontWeight="bold"
            >
              {link}
            </Link>
          ))}
        </HStack>
        <IconButton
          colorScheme="whiteAlpha"
          aria-label="Open Menu"
          display={{ md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box>
          <Box
            bg="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);"
            h="100vh"
            display={{ base: 'flex', md: 'none' }}
            w="full"
            onClick={isOpen ? onClose : onOpen}
            justifyContent="flex-end"
            pos="absolute"
            pt="90px"
            top="0"
            zIndex="dropdown"
          >
            <VStack
              boxSize="full"
              as="nav"
              spacing="0"
              bg={'white'}
              display={{ md: 'none' }}
              rounded="xl"
              h="fit-content"
              mx="6"
              divider={<StackDivider borderColor="gray.00" />}
            >
              {NavLinks.map((link, index) => (
                <NavLink key={link + Math.random()} index={index}>
                  {link}
                </NavLink>
              ))}
            </VStack>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
