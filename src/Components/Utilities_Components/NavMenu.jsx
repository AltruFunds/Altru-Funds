import { useState, useRef } from "react";
import { Box, Button, Flex, Heading, Image, Spacer, Text, useDisclosure  } from "@chakra-ui/react";
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


const NavMenu = () => {

  const [hamBurger, setHamBurger] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const svgStyle = {width: '32px', height: '32px'}

  return (
    <>
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
      zIndex={100000}
    >
      <Box>
        <Image src={Logo} />
      </Box>
      <Spacer />
      <Box>
        <Button variant='ghost' _hover={{ bg: 'none' }} ref={btnRef} onClick={onOpen}><BiMenuAltRight style={svgStyle}/></Button>
      </Box>
    </Flex>


    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/*This Drawer Header section is currently not displayed except marginTop is added */}
          {/*TODO: Rectify this and sync the close button with the hamburger button that opens the menu */}
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
          <Text>Explore Campaign</Text>
          <Text>About Us</Text>
          <Text>Log in</Text>
           <Button color='white' colorScheme='orange'>+ Start a project</Button>
          </DrawerBody>

          <DrawerFooter textAlign='center'>
            <Text>copy right Altrufunds 2022</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
