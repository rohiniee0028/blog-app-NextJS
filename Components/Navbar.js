import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Router = useRouter();

 const NavLink = ({children,href}) => (
  <Link
    px={5}
    py={2.5}
    rounded={'xl'}
    fontWeight={'bold'}
    fontSize={'18px'}
    color= {'#05a0e8'}
    _hover={{
      textDecoration: 'none',
      bg: '#05a0e8',
      color: 'white'
    }}
    href={href}>
    {children}
  </Link>
);


  const Links = [
    {
      label : 'Blogs',
      href : '/blogs'
    },
    {
      label : 'About Us',
      href : '/about'
    },
    {
      label : 'Services',
      href : '/services'
    },
    {
      label : 'Contacts',
      href : '/contact'
    },
    {
      label : <Button    
                fontWeight={'bold'}
                fontSize={'18px'} 
                bg={"transparent"} 
                _hover={{bg:"transparent"}} 
                onClick={()=>Router.push("/")}
                >
                  Logout
                </Button>,
      href : '/'
    }
  ]

  return (
    <>
      <Box bg={'white'} p={2} style={{position:"fixed",zIndex:"100", width:"100%"}} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            border={'4px solid #05a0e8'}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link href="/"><Image src="https://bookxpert.co.in/assets/img/logo.png" height="80px" /></Link>
            </Box>
          </HStack>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link,index) => (
                <NavLink key={index+1} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4}>
              {Links.map((link,index) => (
                <NavLink key={index+1} href={link.href}>
                    <Box onClick={onClose}>{link.label}</Box>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}