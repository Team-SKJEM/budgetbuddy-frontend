import React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import logo from "../../assets/images/budgetBuddyLogo.png";

export const Navbar: React.FC = () => {
  return (
    <Box
      w="100%"
      p={{ base: 1.5, sm: 2, md: 4 }}
      color="white"
      position="fixed"
      top="0"
      bg="#89C3F3"
      zIndex="1"
      borderBottom="2px solid white"
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
          gap={{ base: 1, sm: 2, md: 4 }}
          flexWrap="wrap"
          justify="flex-end"
        >
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Our Mission", to: "/mission" },
            { label: "Sign In" },
            { label: "Register", to: "/register" },
          ].map((item, i) => (
            <ChakraLink asChild key={i}>
              <Button
                fontSize={{ base: "2xs", sm: "xs", md: "sm", lg: "md" }}
                px={{ base: 2, sm: 3, md: 4, lg: 5 }}
                py={{ base: 1, sm: 2, md: 2.5 }}
                height="auto"
                minW="auto"
                variant="solid"
                bg="white"
                color="#89C3F3"
                _hover={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none", outline: "none" }}
                _active={{ boxShadow: "none" }}
              >
                {item.to ? (
                  <RouterLink to={item.to} style={{ color: "#89C3F3" }}>
                    {item.label}
                  </RouterLink>
                ) : (
                  item.label
                )}
              </Button>
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
