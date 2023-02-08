import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import Hero1 from '../Asset/Images/hero-image-1.png'
const LandingPage = () => {
  return (
    <>
    <Box as='section' backgroundImage={Hero1} height='100vh' bgPosition="center" bgRepeat="no-repeat" bgSize='cover'>
      <Box >
        <Heading as='h3' fontSize='lg' color='white'>
        RAISE FUNDS FOR PERSONAL NEEDS, CHARITABLE CAUSES OR CREATIVE IDEAS
        </Heading>
        <Button>Explore</Button>
      </Box>
    </Box>
    </>
  )
}

export default LandingPage