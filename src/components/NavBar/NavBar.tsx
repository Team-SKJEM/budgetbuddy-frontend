import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import logo from "../../assets/images/budgetBuddyLogo.png";

export const Navbar: React.FC = () => {
  return (
    <Box
      w="100%"
      p={{ base: 1.5, sm: 2, md: 4 }}
      color="#D3E6F6"
      position="fixed"
      top="0"
      bg="#D3E6F6"
      zIndex="1"
    >
      <Flex
        align="center"
        w="100%"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <RouterLink to="/">
          <Image
            src={logo}
            alt="Logo"
            maxHeight={{ base: "30px", sm: "40px", md: "55px", lg: "65px" }}
            objectFit="contain"
          />
        </RouterLink>

        <Flex
          gap={{ base: 2, sm: 3, md: 5 }}
          flexWrap="wrap"
          justify="flex-end"
        >
          {/* Navigation Links */}
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Our Mission", to: "/mission" },
            { label: "Sign In" },
          ].map((item, i) => (
            <ChakraLink asChild key={i}>
              <RouterLink to={item.to || "#"}>
                <Text
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                  position="relative"
                  color="#89C3F3"
                  _hover={{
                    boxShadow: "inset 0 -2px 0 #87C2F3",
                    transition: "box-shadow 0.2s ease-in-out",
                  }}
                >
                  {item.label}
                </Text>
              </RouterLink>
            </ChakraLink>
          ))}

          {/* Register Button */}
          <ChakraLink asChild>
            <Button
              fontSize={{ base: "2xs", sm: "xs", md: "sm", lg: "md" }}
              px={{ base: 2, sm: 3, md: 4, lg: 5 }}
              py={{ base: 1, sm: 2, md: 2.5 }}
              height="auto"
              minW="auto"
              variant="solid"
              bg="white"
              color="#89C3F3"
              _hover={{
                textDecoration: "none",
                boxShadow: "0 0 10px rgba(135, 194, 243, 0.8)", // Light-up effect
                transform: "scale(1.025)", // Slightly increase size for more emphasis
              }}
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
