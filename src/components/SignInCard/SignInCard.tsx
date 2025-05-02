import { Box, Button, Card, Field, Input, Stack } from "@chakra-ui/react";
import { Colors } from "../../constants/Colors"; // your custom color definitions

export const SignInCard = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="blackAlpha.600"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="1000"
    >
      <Card.Root
        maxW="sm"
        w="full"
        p={6}
        boxShadow="lg"
        bg="white"
        borderRadius="lg"
      >
        <Card.Header>
          <Card.Title>Sign in</Card.Title>
          <Card.Description>Enter your details to continue</Card.Description>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
            {" "}
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                placeholder="you@example.com"
                bg={Colors.light.inputBg}
                borderRadius="md"
                color={Colors.light.text}
                border="1px solid transparent"
                outline="none" // removes browser focus ring
                _focus={{
                  outline: "none",
                  boxShadow: "none",
                  borderColor: "transparent",
                }}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input
                type="password"
                placeholder="••••••••"
                bg={Colors.light.inputBg}
                borderRadius="md"
                color={Colors.light.text}
                border="1px solid transparent"
                outline="none" // removes browser focus ring
                _focus={{
                  outline: "none",
                  boxShadow: "none",
                  borderColor: "transparent",
                }}
              />
            </Field.Root>
          </Stack>
        </Card.Body>

        <Card.Footer justifyContent="flex-end">
          <Button
            variant="outline"
            onClick={onClose}
            fontSize={{ base: "sm", lg: "md" }}
            size={{ base: "sm", md: "md", lg: "lg" }}
            colorPalette="brand"
            borderRadius="lg"
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            fontSize={{ base: "sm", lg: "md" }}
            size={{ base: "sm", md: "md", lg: "lg" }}
            color="white"
            bg="brand.500"
            _hover={{ bg: "brand.600" }}
            borderRadius="lg"
            onClick={() => {
              // Handle sign-in logic here
            }}
          >
            Sign In
          </Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
};
