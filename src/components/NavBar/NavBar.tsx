import React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
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
      <Flex align="center" w="100%" justifyContent="space-between">
        <RouterLink to="/">
          <Image
            src={logo}
            alt="Logo"
            maxHeight="60px" // Adjust the maxHeight as needed
            objectFit="contain" // Ensures the image scales without distortion
          />
        </RouterLink>

        <Flex gap={4}>
          <ChakraLink asChild>
            <Button
              variant="solid"
              bg="white"
              color="#89C3F3"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none", outline: "none" }}
              _active={{ boxShadow: "none" }}
            >
              <RouterLink to="/" style={{ color: "#89C3F3" }}>
                Home
              </RouterLink>
            </Button>
          </ChakraLink>
          <ChakraLink asChild>
            <Button
              variant="solid"
              bg="white"
              color="#89C3F3"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none", outline: "none" }}
              _active={{ boxShadow: "none" }}
            >
              <RouterLink to="/about" style={{ color: "#89C3F3" }}>
                About
              </RouterLink>
            </Button>
          </ChakraLink>
          <ChakraLink asChild>
            <Button
              variant="solid"
              bg="white"
              color="#89C3F3"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none", outline: "none" }}
              _active={{ boxShadow: "none" }}
            >
              <RouterLink to="/mission" style={{ color: "#89C3F3" }}>
                Our Mission
              </RouterLink>
            </Button>
          </ChakraLink>
          <Button
            variant="solid"
            bg="white"
            color="#89C3F3"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none", outline: "none" }}
            _active={{ boxShadow: "none" }}
          >
            Sign In
          </Button>
          <ChakraLink asChild>
            <Button
              variant="solid"
              bg="white"
              color="#89C3F3"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none", outline: "none" }}
              _active={{ boxShadow: "none" }}
            >
              <RouterLink to="/register" style={{ color: "#89C3F3" }}>
                Register
              </RouterLink>
            </Button>
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
