import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import content from "../locale/en";
import { Colors } from "../constants/Colors";
import { getAuthApiUrl, parseBackendError } from "../utils/authApi";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setErrorMessage("");
    if (!token) {
      setErrorMessage(content.resetPassword.error.missingToken);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(getAuthApiUrl("/user/resetPassword"), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          token,
          newPassword: newPassword.trim(),
        }),
      });

      if (!response.ok) {
        const backendMessage = await parseBackendError(
          response,
          `Unable to reset password (${response.status}).`,
        );
        setErrorMessage(backendMessage);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setErrorMessage(content.login.error.network);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      bg={Colors.light.background}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={16}
    >
      <Box
        w="full"
        maxW="460px"
        bg="white"
        borderRadius="2xl"
        p={8}
        boxShadow="0 20px 40px rgba(30, 58, 138, 0.18)"
      >
        {!isSubmitted ? (
          <Stack gap={4}>
            <Heading fontSize="34px" lineHeight="38px">
              {content.resetPassword.title}
            </Heading>
            <Text color={Colors.brand.descriptionText}>
              {content.resetPassword.desc}
            </Text>
            <Input
              type="password"
              placeholder={content.resetPassword.passwordPlaceholder}
              borderRadius="14px"
              border="0.85px solid"
              borderColor={Colors.light.border}
              bg="white"
              px={4}
              py={6}
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              _focus={{
                borderColor: Colors.brand.primary,
                boxShadow: "none",
              }}
            />
            {errorMessage ? (
              <Text color="red.500" fontSize="sm">
                {errorMessage}
              </Text>
            ) : null}
            <Button
              bg={isLoading ? Colors.brand[400] : Colors.brand.primary}
              color="white"
              borderRadius="14px"
              py={6}
              onClick={handleSubmit}
              _hover={{
                bg: isLoading ? Colors.brand[400] : Colors.brand[600],
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : content.resetPassword.submit}
            </Button>
          </Stack>
        ) : (
          <Stack gap={3} textAlign="center">
            <Heading fontSize="34px" lineHeight="38px">
              {content.resetPassword.successTitle}
            </Heading>
            <Text color={Colors.brand.descriptionText}>
              {content.resetPassword.successDesc}
            </Text>
          </Stack>
        )}

        <Stack direction="row" justify="center" mt={8} gap={1}>
          <Text color={Colors.brand.descriptionText}>
            {content.resetPassword.backToLogin}
          </Text>
          <Link asChild color={Colors.brand.primary} fontWeight="700">
            <RouterLink to="/">{content.resetPassword.login}</RouterLink>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResetPassword;
