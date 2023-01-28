import React from 'react'
import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../../Asset/Icons/Afunds-org.svg'

const Navbar = () => {
  return (
    <Flex as='nav' py='0.5rem' px='4rem' alignItems='center' gap='2rem' boxShadow='md'>
      <Box>
        <Image src={Logo}/>
      </Box>

      <HStack spacing={4}>
      <Text>|</Text>
      <Text>Explore</Text>
      </HStack>
    </Flex>
  )
}

export default Navbar