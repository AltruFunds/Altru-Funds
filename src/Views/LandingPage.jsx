import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Stylesheets/LandingPage.css'

// import required modules
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper';

import Hero1 from '../Asset/Images/hero-image-1.png'


const LandingPage = () => {

  return (
    <>
    <Box as='section' height={{lg : '100vh', md : '80vh', sm: '56vh', base: '40vh'}} bgPosition="center" bgRepeat="no-repeat" bgSize='cover'>

      <Swiper
        effect='creative'
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,            
        }}
        loop={true}
        navigation={false}
        pagination={true}
        modules={[Pagination, Navigation, Autoplay, EffectCreative]}
       
      >
            <Box as='div' className='custom-content' width='sm' padding={2} top={{lg : '35%', md: '35%', sm : '30%', base : '8%'}}>
              <Heading as='h3' fontSize='2xl' color='white' mb='8px'>
              RAISE FUNDS FOR PERSONAL <span>NEEDS,</span> CHARITABLE <span>CAUSES</span> OR CREATIVE <span>IDEAS</span>
              </Heading>
              <Button variant='outline' color='white' _hover={{ bg: 'none' }} width='60%'>Explore</Button>
            </Box>
        <SwiperSlide className='slideImage-1'></SwiperSlide>
        <SwiperSlide className='slideImage-2'></SwiperSlide>
        <SwiperSlide className='slideImage-3'></SwiperSlide>
      </Swiper>
    </Box>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis accusamus sequi ipsa nemo vel alias, unde dolore voluptas quae.</p>

    </>
  )
}

export default LandingPage