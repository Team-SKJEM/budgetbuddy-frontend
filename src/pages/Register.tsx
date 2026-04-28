import React from "react";
import {
  Box,
  Button,
  Field,
  Input,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import content from "../locale/en";
import { Colors } from "../constants/Colors"; // your custom color definitions

const Register: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/user/register", {
        method: "POST",
      });

      if (!response.ok) {
        setErrorMessage(content.register.error.backendDown);
      }
    } catch {
      setErrorMessage(content.register.error.backendDown);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      w="100vw"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      bg={Colors.light.background}
      py={16}
    >
      <Box
        maxW="md"
        w="full"
        bg="white"
        p={8}
        borderRadius="2xl"
        boxShadow="0 20px 40px rgba(30, 58, 138, 0.18)"
      >
        <Stack gap="2" mb="6">
          <Heading fontSize="34px" lineHeight="38px">
            {content.register.title}
          </Heading>
          <Text color={Colors.brand.descriptionText}>
            {content.register.subtitle}
          </Text>
        </Stack>

        <Stack gap="4">
          <Field.Root>
            <Input
              placeholder="Enter your email"
              bg="white"
              borderRadius="14px"
              color={Colors.light.text}
              border="0.85px solid"
              borderColor={Colors.light.border}
              px={4}
              py={6}
              _focus={{
                borderColor: Colors.brand.primary,
                boxShadow: "none",
              }}
            />
          </Field.Root>

          <Field.Root>
            <Input
              placeholder="Enter a username"
              bg="white"
              borderRadius="14px"
              color={Colors.light.text}
              border="0.85px solid"
              borderColor={Colors.light.border}
              px={4}
              py={6}
              _focus={{
                borderColor: Colors.brand.primary,
                boxShadow: "none",
              }}
            />
          </Field.Root>

          <Field.Root>
            <Input
              type="password"
              placeholder="Create a password"
              bg="white"
              borderRadius="14px"
              color={Colors.light.text}
              border="0.85px solid"
              borderColor={Colors.light.border}
              px={4}
              py={6}
              _focus={{
                borderColor: Colors.brand.primary,
                boxShadow: "none",
              }}
            />
          </Field.Root>

          <Field.Root>
            <Input
              type="password"
              placeholder="Re-enter your password"
              bg="white"
              borderRadius="14px"
              color={Colors.light.text}
              border="0.85px solid"
              borderColor={Colors.light.border}
              px={4}
              py={6}
              _focus={{
                borderColor: Colors.brand.primary,
                boxShadow: "none",
              }}
            />
          </Field.Root>
        </Stack>

        <Button
          mt="6"
          w="full"
          size={{ base: "md", lg: "lg" }}
          fontSize={{ base: "sm", lg: "md" }}
          bg={Colors.brand.primary}
          color="white"
          borderRadius="14px"
          py={6}
          _hover={{
            bg: Colors.brand[600],
          }}
          onClick={handleRegister}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : content.register.cta}
        </Button>
        {errorMessage ? (
          <Text mt={4} color="red.500" fontSize="sm">
            {errorMessage}
          </Text>
        ) : null}
        <Text mt={4} fontSize="sm" color={Colors.brand.descriptionText}>
          {content.register.appSignInNote}
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
