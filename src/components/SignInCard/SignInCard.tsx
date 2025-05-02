import { Box, Button, Card, Field, Input, Stack } from "@chakra-ui/react";

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
              <Input placeholder="you@example.com" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" placeholder="••••••••" />
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
