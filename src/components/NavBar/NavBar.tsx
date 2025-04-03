import React from "react";
import { Box, Image } from "@chakra-ui/react";
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
      <Image src={logo} alt="Logo" aspectRatio={4 / 3} width="75px" />
    </Box>
  );
};

export default Navbar;
