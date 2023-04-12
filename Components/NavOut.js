import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { useSelector } from 'react-redux';
  
  export default function NavOut() {
    const { isOpen, onOpen, onClose } = useDisclosure();
   const Auth = useSelector(state=>state.Auth);
   let isLogin = Auth.isAuth;
   const name = Auth.name;
  
   const NavLink = ({children,href}) => (
    <Link
      px={5}
      py={2.5}
      rounded={'xl'}
      fontWeight={'bold'}
      fontSize={'18px'}
      color= {'blue.500'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.400', 'blue.700'),
        color: 'white'
      }}
      href={href}>
      {children}
    </Link>
  );

  
    return (
      <>
        <Box bg={useColorModeValue('white', 'white')} p={2} style={{position:"fixed",zIndex:"100", width:"100%"}} >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              border={'4px solid lightblue'}
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
                   <NavLink href={"/login"}>
                      <Box onClick={onClose}>Login/Signup</Box>
                  </NavLink>
              </HStack>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                  <NavLink href={"/login"}>
                      <Box onClick={onClose}>Login/Signup</Box>
                  </NavLink>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }