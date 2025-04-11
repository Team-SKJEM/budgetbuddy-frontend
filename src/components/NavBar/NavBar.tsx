import React from "react";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import logo from "../../assets/images/budgetBuddyLogo.png";
import { LuMenu } from "react-icons/lu";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../Menu/Menu";

export const Navbar: React.FC = () => {
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Our Mission", to: "/mission" },
    { label: "Sign In", to: "/signin" },
  ];

  return (
    <Box w="100%" p={4} position="fixed" top="0" zIndex="1">
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
            maxHeight={{ base: "55px", lg: "65px" }}
            objectFit="contain"
          />
        </RouterLink>

        <Flex
          gap={{ base: 2, sm: 3, md: 5 }}
          flexWrap="wrap"
          justify="flex-end"
        >
          {/* Navigation Links */}
          {menuItems.map((item, i) => (
            <ChakraLink
              hideBelow="lg"
              asChild
              key={i}
              colorPalette={"blue"}
              _focus={{ outline: "none" }} // Remove focus outline
              _active={{ outline: "none" }} // Remove active outline
            >
              <RouterLink to={item.to || "#"}>
                <Text fontSize="md">{item.label}</Text>
              </RouterLink>
            </ChakraLink>
          ))}

          {/* Register Button */}
          <ChakraLink asChild>
            <Button
              hideBelow={"lg"}
              fontSize={{ base: "sm", lg: "md" }}
              size={{ base: "sm", sm: "md", lg: "lg" }}
              variant="solid"
              rounded="md"
              colorPalette={"blue"}
              color={"white"}
              _hover={{
                textDecoration: "none",
                transform: "scale(1.025)", // Slightly increase size for more emphasis
              }}
              _focus={{ boxShadow: "none", outline: "none" }}
              _active={{ boxShadow: "none" }}
            >
              <RouterLink to="/register">Register</RouterLink>
            </Button>
          </ChakraLink>

          {/* Dropdown Menu for Small/Medium Screens */}
          <MenuRoot size={{ base: "md", md: "md" }}>
            <MenuTrigger asChild>
              <IconButton
                display={{ base: "block", md: "block", lg: "none" }}
                aria-label="Open Menu"
                hideFrom="lg"
                variant="outline"
                size={{ base: "sm", sm: "md", lg: "lg" }}
                color="rgb(37, 99, 235)"
                justifyContent="center"
                alignItems="center"
                _icon={{ fontSize: "lg" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <LuMenu size={"lg"} />
                </Box>
              </IconButton>
            </MenuTrigger>
            <MenuContent bgColor="white">
              {menuItems.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={item.label}
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    <ChakraLink
                      asChild
                      colorPalette={"cyan"}
                      _focus={{ outline: "none" }} // Remove focus outline
                      _active={{ outline: "none" }} // Remove active outline
                    >
                      <RouterLink to={item.to || "#"}>
                        <Text position="relative">{item.label}</Text>
                      </RouterLink>
                    </ChakraLink>
                  </MenuItem>
                );
              })}
              <MenuItem
                value={"Register"}
                fontSize={{ base: "md", md: "lg" }}
                hideFrom="lg"
              >
                <ChakraLink
                  asChild
                  colorPalette={"blue"}
                  _focus={{ outline: "none" }} // Remove focus outline
                  _active={{ outline: "none" }} // Remove active outline
                >
                  <RouterLink to={"/register"}>
                    <Text position="relative">Register</Text>
                  </RouterLink>
                </ChakraLink>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
