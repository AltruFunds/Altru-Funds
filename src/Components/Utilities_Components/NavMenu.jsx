import { useState, useRef } from "react";
import { Box, Button, Flex, Heading, Image, Spacer, Text, useDisclosure, VStack  } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Logo from '../../Asset/Icons/Afunds-org.svg'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


const NavMenu = () => {

  const [hamBurger, setHamBurger] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const svgStyle = {width: '32px', height: '32px'}

  return (
    
    <Flex
      as="nav"
      py="0.5rem"
      px="2rem"
      alignItems="center"
      justifyContent='space-between'
      gap='1%'
      boxShadow="md"
      position="sticky"
      top="0"
      backgroundColor="white"
      
    >
      <Box>
        <Image src={Logo} />
      </Box>
      <Spacer />
      <Box>
        <Button variant='ghost' _hover={{ bg: 'none' }} ref={btnRef} onClick={onOpen}><BiMenuAltRight style={svgStyle}/></Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent padding={0} position='absolute'>
          
          <DrawerCloseButton />
          
          <DrawerBody>
          <VStack spacing={8} align='left' pt={16}>
          <Text>Explore Campaign</Text>
          <Text>About Us</Text>
           <Button color='orange' colorScheme='orange' variant='outline'>Log in</Button>
           <Button color='white' colorScheme='orange'>+ Start a project</Button>
           </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Flex>


   
  );
};

export default NavMenu;
