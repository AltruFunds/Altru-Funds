import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import Logo from '../../Asset/Icons/Afunds-org.svg'
import NavMenu from './NavMenu';

const Navbar = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
    { windowSize.innerWidth <= 880 ? <NavMenu /> :
    <Flex as='nav' py='0.5rem' px='4rem' alignItems='center' boxShadow='md' position='sticky' top='0' backgroundColor='white' zIndex={100000}>
      <Box>
        <Image src={Logo}/>
      </Box>

      <HStack spacing={4}>
      <Text>|</Text>
      <Text>Explore Campaign</Text>
      <Text>About Us</Text>
      </HStack>

      <Spacer />
      
      <HStack spacing={4} >
      <Text>Log in</Text>
      <Button color='white' colorScheme='orange'>+ Start a project</Button>
      </HStack>
      
    </Flex>
  
  }
  </>
  )
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Navbar