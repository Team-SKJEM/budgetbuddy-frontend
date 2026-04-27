import React from "react";
import content from "../locale/en";
import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Colors } from "../constants/Colors";

import teamPhoto from "../assets/images/teamPhoto.png";

const About: React.FC = () => {
  return (
    <Box
      bg={Colors.light.background}
      minH="100vh"
      px={4}
      py={{ base: 8, md: 14 }}
    >
      <Stack maxW="1000px" mx="auto" gap={10}>
        <Stack gap={4}>
          <Heading fontSize={{ base: "34px", md: "44px" }} lineHeight="1.1">
            {content.about.title}
          </Heading>
          <Text fontSize="lg" color={Colors.brand.descriptionText}>
            {content.about.intro}
          </Text>
        </Stack>

        <Box
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor={Colors.light.border}
          p={{ base: 6, md: 8 }}
        >
          <Heading fontSize={{ base: "26px", md: "30px" }} mb={4}>
            {content.about.storyTitle}
          </Heading>
          <Stack gap={3}>
            {content.about.storyParagraphs.map((paragraph) => (
              <Text key={paragraph} color={Colors.brand.descriptionText}>
                {paragraph}
              </Text>
            ))}
          </Stack>
        </Box>

        <Box>
          <Heading fontSize={{ base: "26px", md: "30px" }} mb={5}>
            {content.about.valuesTitle}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            {content.about.values.map((value) => (
              <Box
                key={value.title}
                bg="white"
                borderRadius="xl"
                border="1px solid"
                borderColor={Colors.light.border}
                p={6}
              >
                <Heading fontSize="xl" mb={3}>
                  {value.title}
                </Heading>
                <Text color={Colors.brand.descriptionText}>
                  {value.description}
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
        >
          <Heading fontSize={{ base: "26px", md: "30px" }} mb={3}>
            {content.about.teamTitle}
          </Heading>
          <Text color={Colors.brand.descriptionText} mb={6}>
            {content.about.teamDesc}
          </Text>
          <Box w="100%" display="flex" justifyContent="center">
            <Image
              src={teamPhoto}
              alt="BudgetBuddy team"
              w="100%"
              maxW={{ base: "100%", md: "820px", lg: "760px" }}
              h="auto"
              objectFit="contain"
              borderRadius="xl"
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
