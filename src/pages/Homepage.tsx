import React, { useEffect, useState } from "react";
import content from "../locale/en";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Colors } from "../constants/Colors";
import { Link as RouterLink } from "react-router-dom";

import heroBudgets from "../assets/images/heroBudgets.png";
import heroReceipts from "../assets/images/heroReceipts.png";
import heroDash from "../assets/images/heroDash.png";
import heroInsights from "../assets/images/heroInsights.png";

const HomePage: React.FC = () => {
  const iphoneScreenshotAspectRatio = 1170 / 2412;
  const previewScreenshots = [
    heroDash,
    heroBudgets,
    heroReceipts,
    heroInsights,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % previewScreenshots.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [previewScreenshots.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % previewScreenshots.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + previewScreenshots.length) % previewScreenshots.length,
    );
  };

  return (
    <Box
      bg={Colors.light.background}
      minH="100vh"
      px={4}
      py={{ base: 8, md: 14 }}
    >
      <Stack maxW="1100px" mx="auto" gap={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
          <Stack gap={5}>
            <Heading fontSize={{ base: "34px", md: "44px" }} lineHeight="1.1">
              {content.home.title}
            </Heading>
            <Text color={Colors.brand.descriptionText} fontSize="lg">
              {content.home.subtitle}
            </Text>
            <HStack gap={3} pt={2}>
              <Button
                asChild
                bg={Colors.brand.primary}
                color="white"
                borderRadius="14px"
                px={6}
                _hover={{ bg: Colors.brand[600] }}
              >
                <a
                  href={content.home.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.home.primaryCta}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                borderRadius="14px"
                borderColor={Colors.light.border}
              >
                <RouterLink to="/about">{content.home.secondaryCta}</RouterLink>
              </Button>
            </HStack>
          </Stack>
          <Box display="flex" justifyContent="center">
            <Box
              w="100%"
              maxW={{ base: "360px", md: "560px" }}
              borderRadius="2xl"
              p={3}
              bg="white"
              border="1px solid"
              borderColor={Colors.light.border}
            >
              <Box borderRadius="xl" overflow="hidden" aspectRatio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/--4v7Ppnx7E"
                  title="BudgetBuddy demo video"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading fontSize={{ base: "28px", md: "34px" }} mb={6}>
            {content.home.highlightsTitle}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            {content.home.highlights.map((highlight) => (
              <Box
                key={highlight.title}
                bg="white"
                borderRadius="xl"
                p={6}
                border="1px solid"
                borderColor={Colors.light.border}
              >
                <Heading fontSize="xl" mb={3}>
                  {highlight.title}
                </Heading>
                <Text color={Colors.brand.descriptionText}>
                  {highlight.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor={Colors.light.border}
          p={{ base: 6, md: 8 }}
          boxShadow="0 20px 45px rgba(15, 23, 42, 0.08)"
        >
          <Heading fontSize={{ base: "26px", md: "32px" }} mb={3}>
            {content.home.previewTitle}
          </Heading>
          <Text color={Colors.brand.descriptionText} mb={6}>
            {content.home.previewDesc}
          </Text>
          <Stack gap={5} align="center">
            <Box
              bg="linear-gradient(180deg, #F8FAFC 0%, #EEF4FF 100%)"
              borderRadius="2xl"
              p={4}
              border="1px solid"
              borderColor={Colors.light.border}
              maxW={{ base: "260px", md: "320px" }}
              mx="auto"
              w="100%"
              position="relative"
              boxShadow="0 18px 35px rgba(59, 130, 246, 0.18)"
            >
              <Box
                borderRadius="xl"
                overflow="hidden"
                aspectRatio={iphoneScreenshotAspectRatio}
              >
                <Image
                  key={`slide-${currentSlide}`}
                  src={previewScreenshots[currentSlide]}
                  alt={`BudgetBuddy preview screenshot ${currentSlide + 1}`}
                  w="100%"
                  h="100%"
                  display="block"
                  objectFit="contain"
                  transition="transform 0.35s ease"
                />
              </Box>

              <Button
                size="xs"
                onClick={goToPreviousSlide}
                position="absolute"
                top="50%"
                left="-14px"
                transform="translateY(-50%)"
                borderRadius="full"
                minW="30px"
                w="30px"
                h="30px"
                p={0}
                bg="white"
                border="1px solid"
                borderColor={Colors.light.border}
                boxShadow="md"
                _hover={{ bg: "#F8FAFC" }}
                aria-label="Previous screenshot"
              >
                {"<"}
              </Button>

              <Button
                size="xs"
                onClick={goToNextSlide}
                position="absolute"
                top="50%"
                right="-14px"
                transform="translateY(-50%)"
                borderRadius="full"
                minW="30px"
                w="30px"
                h="30px"
                p={0}
                bg="white"
                border="1px solid"
                borderColor={Colors.light.border}
                boxShadow="md"
                _hover={{ bg: "#F8FAFC" }}
                aria-label="Next screenshot"
              >
                {">"}
              </Button>
            </Box>

            <HStack gap={2}>
              {previewScreenshots.map((_, index) => (
                <Box
                  key={`dot-${index}`}
                  onClick={() => setCurrentSlide(index)}
                  cursor="pointer"
                  w={index === currentSlide ? "22px" : "8px"}
                  h="8px"
                  borderRadius="999px"
                  transition="all 0.2s ease"
                  bg={
                    index === currentSlide
                      ? Colors.brand.primary
                      : Colors.light.border
                  }
                />
              ))}
            </HStack>
            <Text fontSize="sm" color={Colors.brand.descriptionText}>
              {currentSlide + 1} / {previewScreenshots.length}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomePage;
