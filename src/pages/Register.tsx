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
import content from "../locale/en";

const Register: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bg="gray.50"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box maxW="md" w="full">
        <Stack gap="2" mb="6" textAlign="center">
          <Heading size="lg">{content.register.title}</Heading>
          <Text color="gray.600">{content.register.subtitle}</Text>
        </Stack>

        <Stack gap="4">
          <Field.Root>
            <Field.Label>{content.register.email}</Field.Label>
            <Input placeholder="you@example.com" />
          </Field.Root>

          <Field.Root>
            <Field.Label>{content.register.username}</Field.Label>
            <Input placeholder="your username" />
          </Field.Root>

          <Field.Root>
            <Field.Label>{content.register.password}</Field.Label>
            <Input type="password" placeholder="••••••••" />
          </Field.Root>

          <Field.Root>
            <Field.Label>{content.register.confirmPassword}</Field.Label>
            <Input type="password" placeholder="••••••••" />
          </Field.Root>
        </Stack>

        <Button
          mt="6"
          w="full"
          size={{ base: "md", lg: "lg" }}
          fontSize={{ base: "sm", lg: "md" }}
          bg="brand.500"
          color="white"
          _hover={{ bg: "brand.600" }}
          onClick={() => {
            // Handle registration logic here
          }}
        >
          {content.register.cta}
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
