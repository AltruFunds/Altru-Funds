import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import '../Stylesheets/Auth.css'
import { 
  Box, 
  Heading,
  Input, 
  InputGroup, 
  InputRightElement, 
  Stack, 
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  Text,
  Container,
  } from "@chakra-ui/react"


const Login = () => {

  const containerStyle = {
    boxShadow : 'md',
    rounded : 'md',
    maxWidth : '316px',
    my : '2%',
    padding : '1rem'
  }

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
   <>
      <section className='auth-background'>
       <Container as='section' sx={containerStyle}>
        <Heading as='h4' size='md' mb={2} className='login-text'>Log in</Heading> 
        <Text fontSize='xs' color='gray' mb={4}>Hey, enter your details to sign in to your account </Text>

        <Formik 
          initialValues={{email: '', password: ''}}
          validationSchema={Yup.object({})}
          onSubmit={()=> {}}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel m={0} p={0}>Email address</FormLabel>
                  <Input placeholder='Enter your email'/>
                  </FormControl>

                 <FormControl isRequired>
                  <FormLabel m={0} p={0}>Password</FormLabel>
                  <InputGroup>
                  <Input placeholder='Enter your password' type={show ? 'text' : 'password'}/>
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick} background='none'>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>


                <Button colorScheme='orange'>Log in</Button>
                <Text align='center'>Or</Text>
                <Button>Log in with Google</Button>
                <Button>Log in with Facebook</Button>

               <Text align='center'>Don't have an account ? <Link to='/register'>Register</Link></Text> 
              </Stack>

              
            </form>
          )}
        </Formik>
       </Container>
      </section>
   </>
  )
}

export default Login