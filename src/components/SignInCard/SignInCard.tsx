import {
  Box,
  Button,
  Card,
  Field,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import content from "../../locale/en";
import { Colors } from "../../constants/Colors";
import { getAuthApiUrl, parseBackendError } from "../../utils/authApi";

export const SignInCard = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim().toLowerCase());

  const handleLogin = async () => {
    setErrorMessage("");
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!validateEmail(normalizedEmail)) {
      setErrorMessage(content.login.error.invalidEmail);
      return;
    }

    if (!normalizedPassword) {
      setErrorMessage(content.login.error.emptyPassword);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(getAuthApiUrl("/user/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: normalizedEmail,
          password: normalizedPassword,
        }),
      });

      if (!response.ok) {
        const backendMessage = await parseBackendError(
          response,
          `Login failed (${response.status}). Please try again.`,
        );
        setErrorMessage(backendMessage);
        return;
      }

      onClose();
    } catch {
      setErrorMessage(content.login.error.network);
    } finally {
      setIsLoading(false);
    }
  };

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
        boxShadow="0 20px 40px rgba(30, 58, 138, 0.18)"
        bg="white"
        borderRadius="2xl"
      >
        <Card.Header>
          <Card.Title fontSize="34px" lineHeight="38px">
            {content.login.title}
          </Card.Title>
        </Card.Header>

        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Input
                placeholder={content.login.emailPlaceholder}
                bg="white"
                borderRadius="14px"
                color={Colors.light.text}
                border="0.85px solid"
                borderColor={Colors.light.border}
                px={4}
                py={6}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                _focus={{
                  borderColor: Colors.brand.primary,
                  boxShadow: "none",
                }}
              />
            </Field.Root>
            <Field.Root>
              <Input
                type="password"
                placeholder={content.login.passwordPlaceholder}
                bg="white"
                borderRadius="14px"
                color={Colors.light.text}
                border="0.85px solid"
                borderColor={Colors.light.border}
                px={4}
                py={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                _focus={{
                  borderColor: Colors.brand.primary,
                  boxShadow: "none",
                }}
              />
            </Field.Root>
            <HStack justify="space-between">
              <Link
                asChild
                color={Colors.brand.primary}
                fontWeight="600"
                onClick={onClose}
              >
                <RouterLink to="/forgotPassword">
                  {content.login.forgotPassword}
                </RouterLink>
              </Link>
            </HStack>
            {errorMessage ? (
              <Text color="red.500" fontSize="sm">
                {errorMessage}
              </Text>
            ) : null}
          </Stack>
        </Card.Body>

        <Card.Footer pt={2}>
          <VStack w="full" align="stretch" gap={4}>
            <HStack justify="flex-start" gap={1} flexWrap="wrap">
              <Text color={Colors.brand.descriptionText} fontSize="sm">
                {content.login.noAccount}
              </Text>
              <Link
                asChild
                color={Colors.brand.primary}
                fontWeight="700"
                fontSize="sm"
                onClick={onClose}
              >
                <RouterLink to="/register">{content.login.register}</RouterLink>
              </Link>
            </HStack>

            <HStack w="full" justify="flex-end" gap={2}>
              <Button
                variant="outline"
                onClick={onClose}
                borderRadius="14px"
                borderColor={Colors.light.border}
                color={Colors.light.icon}
                disabled={isLoading}
                minW="110px"
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogin}
                color="white"
                bg={isLoading ? Colors.brand[400] : Colors.brand.primary}
                _hover={{
                  bg: isLoading ? Colors.brand[400] : Colors.brand[600],
                }}
                borderRadius="14px"
                disabled={isLoading}
                minW="140px"
              >
                {isLoading ? "Loading..." : content.login.cta}
              </Button>
            </HStack>
          </VStack>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
};
