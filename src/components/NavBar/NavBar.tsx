import React from "react";
import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import logo from "../../assets/images/budgetBuddyLogo.png";

export const Navbar: React.FC = () => {
  return (
    <Box
      w="100%"
      p="4"
      color="white"
      position="fixed"
      top="0"
      bg="#89C3F3"
      zIndex="1"
      borderBottom="2px solid white"
    >
      <Flex align="center" maxW="1200px" mx="auto">
        <Image src={logo} alt="Logo" aspectRatio={4 / 3} width="75px" />

        <Spacer />

        <Flex gap={4}>
          <ChakraLink asChild>
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <RouterLink to="/">Home</RouterLink>
            </Button>
          </ChakraLink>
          <ChakraLink asChild>
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <RouterLink to="/about">About</RouterLink>
            </Button>
          </ChakraLink>
          <ChakraLink asChild>
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <RouterLink to="/mission">Our Mission</RouterLink>
            </Button>
          </ChakraLink>
          <ChakraLink asChild>
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <RouterLink to="/register">Register</RouterLink>
            </Button>
          </ChakraLink>
          <Button colorScheme="yellow">Sign In</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
