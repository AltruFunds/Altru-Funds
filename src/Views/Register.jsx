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

const Register = () => {
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
            Register
          </Heading>
          <Text fontSize="xs" color="gray" mb={4}>
            Hey, enter your details to sign in to your account{" "}
          </Text>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              password: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .min(2, "name should be at least 2 characters or more")
                .required("first name should not be empty"),
              lastName: Yup.string()
                .min(2, "name should be at least 2 characters or more")
                .required("last name should not be empty"),
              email: Yup.string()
                .email("Invalid email address")
                .required("email should not be empty"),
              phoneNumber: Yup.string()
                .matches(
                  /^[0]+[7-9]+[0-1]+[0-9]{8}$/,
                  "Phone number is not valid"
                )
                .required("phone number should not be empty"),
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
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel m={0} p={0}>
                      First Name
                    </FormLabel>
                    <Input
                      variant="filled"
                      placeholder="Enter your first name"
                      type="text"
                      id="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />

                    {formik.touched.firstName && formik.errors.firstName ? (
                      <Text color="red" fontSize="sm">
                        {formik.errors.firstName}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel m={0} p={0}>
                      Last Name
                    </FormLabel>
                    <Input
                      variant="filled"
                      placeholder="Enter your last name"
                      type="text"
                      id="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <Text color="red" fontSize="sm">
                        {formik.errors.lastName}
                      </Text>
                    ) : null}
                  </FormControl>

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
                      Phone Number
                    </FormLabel>
                    <Input
                      variant="filled"
                      placeholder="Enter your Phone number"
                      id="phoneNumber"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <Text color="red" fontSize="sm">
                        {formik.errors.phoneNumber}
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
                    loadingText="Submitting"
                    colorScheme="orange"
                    type="submit"
                  >
                    Register
                  </Button>

                  <Text align="center">
                    Don't have an account ? <Link to="/login">Login</Link>
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

export default Register;
