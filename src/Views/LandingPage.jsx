import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import Hero1 from '../Asset/Images/hero-image-1.png'


const LandingPage = () => {
  return (
    <>
    <Box as='section' backgroundImage={Hero1} height={{lg : '100vh', md : '80vh', sm: '56vh', base: '40vh'}} bgPosition="center" bgRepeat="no-repeat" bgSize='cover'>
      <Box >
        <Heading as='h3' fontSize='lg' color='white'>
        RAISE FUNDS FOR PERSONAL NEEDS, CHARITABLE CAUSES OR CREATIVE IDEAS
        </Heading>
      </Box>
    </Box>
    </>
  )
}

export default LandingPage