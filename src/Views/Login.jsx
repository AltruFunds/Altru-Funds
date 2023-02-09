import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "../Stylesheets/Auth.css";
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
  Text,
  Container,
} from "@chakra-ui/react";

const Login = () => {
  const containerStyle = {
    boxShadow: "md",
    rounded: "md",
    maxWidth: "316px",
    my: "2%",
    padding: "1rem",
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loadingState, setLoadingState] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section className="auth-background">
        <Container as="section" sx={containerStyle}>
          <Heading as="h4" size="md" mb={2} className="login-text">
            Log in
          </Heading>
          <Text fontSize="xs" color="gray" mb={4}>
            Hey, enter your details to sign in to your account{" "}
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("email should not be empty"),
              password: Yup.string()
                .required("No password provided.")
                .matches(
                  /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,24}$/,
                  "Password should contain minimum of 8 Alphanumeric characters and a symbol (~!@#$%^&*()+=)."
                ),
            })}
            onSubmit={(values) => {
              setLoadingState(true);
              setTimeout(() => {
                setLoadingState(false), console.log(values), navigate("/");
              }, 4000);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} action="submit">
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel m={0} p={0}>
                      Email address
                    </FormLabel>
                    <Input
                      variant="filled"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <Text color="red" fontSize="sm">
                        {formik.errors.email}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel m={0} p={0}>
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        variant="filled"
                        placeholder="Enter your password"
                        type={show ? "text" : "password"}
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={handleClick}
                          background="none"
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {formik.touched.password && formik.errors.password ? (
                      <Text color="red" fontSize="sm">
                        {formik.errors.password}
                      </Text>
                    ) : null}
                  </FormControl>

                  <Button
                    isLoading={loadingState}
                    loadingText="Checking"
                    colorScheme="orange"
                    type="submit"
                  >
                    Log in
                  </Button>
                  <Text align="center">Or</Text>
                  <Button>Log in with Google</Button>
                  <Button>Log in with Facebook</Button>

                  <Text align="center">
                    Don't have an account ? <Link to="/register">Register</Link>
                  </Text>
                </Stack>
              </form>
            )}
          </Formik>
        </Container>
      </section>
    </>
  );
};

export default Login;
