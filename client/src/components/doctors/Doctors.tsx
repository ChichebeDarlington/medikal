import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import DoctorsCard from "./DoctorsCard";

const Doctors = () => {
  return (
    <Box h="auto" pos="relative">
      {/* Background color */}
      <Box
        height="100%"
        backgroundColor="rgba(52, 152, 219, 0.7)" // Semi-transparent color
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="1"
      ></Box>
      {/* Background image */}
      <Box
        bgImage="img/testi-bg.jpg"
        height="100%"
        backgroundSize="cover"
        backgroundPosition="center"
        background-attachment="fixed"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      ></Box>

      {/* content */}
      <HStack
        w="100vw"
        pos="relative"
        display="grid"
        placeContent="center"
        zIndex="5"
        color="white"
        textTransform="capitalize"
      >
        <Flex flexDir="column" align="center" my="5rem">
          <Heading
            as="h2"
            w="550px"
            fontSize="2rem"
            fontWeight={700}
            textAlign="center"
            lineHeight={10}
            mb="1rem"
          >
            We Have Specialist Doctors To Solve Your Problems
          </Heading>
          <Box mb="1rem">
            <Image src="img/section-img.png" filter="auto" />
          </Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            aliquet. pretiumts{" "}
          </Text>
        </Flex>

        <Flex justify="center" mb="5rem">
          <Flex w="90%" wrap="wrap" rowGap={5} justify="space-between">
            <DoctorsCard
              image="img/slider.jpg"
              name="Dr. Allen Arthur"
              specialty="Dermatologist"
            />
            <DoctorsCard
              image="img/slider3.jpg"
              name="Dr. Mark caffle"
              specialty="Ophthalmologist"
            />
            <DoctorsCard
              image="img/slider.jpg"
              name="Dr. Daniel Abel"
              specialty="Dental surgeon"
            />
            <DoctorsCard
              image="img/slider2.jpg"
              name="Dr. Matt Mark"
              specialty="Neuro Surgeon"
            />
            <DoctorsCard
              image="img/slider3.jpg"
              name="Dr. Adam Maurice"
              specialty="Gynocologist"
            />
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Doctors;
