import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
// import DoctorsCard from "./doctors/DoctorsCard";
import BlogCard from "./cards/BlogCard";

const Blogs = () => {
  return (
    <HStack
      w="100vw"
      pos="relative"
      display="grid"
      placeContent="center"
      zIndex="5"
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
          Keep up with Our Most Recent Medical News.
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
        <Flex w="90%" wrap="wrap" gap={7} justify="center">
          <BlogCard
            image="img/slider.jpg"
            name="Dr. Allen Arthur"
            specialty="Dermatologist"
          />
          <BlogCard
            image="img/slider3.jpg"
            name="Dr. Mark caffle"
            specialty="Ophthalmologist"
          />
          <BlogCard
            image="img/slider.jpg"
            name="Dr. Daniel Abel"
            specialty="Dental surgeon"
          />
          <BlogCard
            image="img/slider2.jpg"
            name="Dr. Matt Mark"
            specialty="Neuro Surgeon"
          />
          <BlogCard
            image="img/slider3.jpg"
            name="Dr. Adam Maurice"
            specialty="Gynocologist"
          />
        </Flex>
      </Flex>
    </HStack>
  );
};

export default Blogs;
