import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Emoji from "../Asset/Images/worried-emoji.png";
import { Link } from "react-router-dom";

const ErrorUi = () => {
  const linkStyle = { color: "blue" };
  return (
    <Box mt="8%" align="center">
      <Box align="center">
        <Image
          src={Emoji}
          objectFit="cover"
          width="4rem"
          height="4rem"
          borderRadius="full"
        />
      </Box>
      <Heading color="orange.400">Something went wrong</Heading>
      <Text padding={4}>
        We could not access the page you are trying to view, please do one of
        the following to continue using the platform
      </Text>
      <Container align="left" padding={4}>
        <Text>1. Check the address in your browser search tab</Text>
        <Text>2. Check your internet connection</Text>
        <Text>3. You can go back to our <Link to="/" style={linkStyle}> home page</Link> to resume your journey</Text>
      </Container>
    </Box>
  );
};

export default ErrorUi;
