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
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      p={4}
    >
      <Box maxW="md" w="full" bg="white" p={6} borderRadius="lg" boxShadow="lg">
        <Stack gap="2" mb="6" textAlign="center">
          <Heading size="lg">{content.register.title}</Heading>
          <Text color="gray.600">{content.register.subtitle}</Text>
        </Stack>

        <Stack gap="4">
          <Field.Root>
            <Input placeholder="Enter your email" />
          </Field.Root>

          <Field.Root>
            <Input placeholder="Enter a username" />
          </Field.Root>

          <Field.Root>
            <Input type="password" placeholder="Create a password" />
          </Field.Root>

          <Field.Root>
            <Input type="password" placeholder="Re-enter your password" />
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
