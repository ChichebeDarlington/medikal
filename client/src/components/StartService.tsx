import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
// import { MdPlayArrow } from "react-icons/md";

const WhyChoose = () => {
  return (
    <Flex
      mt="7rem"
      flexDir="column"
      align="center"
      alignContent="space-around"
      justifyContent="space-evenly"
      h="100vh"
      mb="7rem"
    >
      <Flex flexDir="column" align="center" gap={4} mb={20}>
        <Text maxW="700px" textAlign="center" fontSize="4xl" fontWeight={700}>
          We Offer Different Services To Improve Your Health
        </Text>
        <Box>
          <Image src="/img/section-img.png" />
        </Box>
        <Text as="span" color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </Text>
      </Flex>

      <Flex flexWrap="wrap" justify="center">
        <Flex w="400px">
          <i
            className="icofont icofont-prescription"
            style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}
          ></i>
          <Box ml="1rem">
            <Heading fontSize="1.3rem" fontWeight={700}>
              General Treatment
            </Heading>
            <Text fontWeight={520} mt="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus dictum eros ut imperdiet
            </Text>
          </Box>
        </Flex>
        <Flex w="400px" mb="5rem">
          <i
            className="icofont icofont-tooth"
            style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}
          ></i>
          <Box ml="1rem">
            <Heading fontSize="1.3rem" fontWeight={700}>
              Teeth Whitening
            </Heading>
            <Text fontWeight={520} mt="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus dictum eros ut imperdiet
            </Text>
          </Box>
        </Flex>
        <Flex w="400px">
          <i
            className="icofont icofont-eye-alt"
            style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}
          ></i>
          <Box ml="1rem">
            <Heading fontSize="1.3rem" fontWeight={700}>
              Vision Problems
            </Heading>
            <Text fontWeight={520} mt="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus dictum eros ut imperdiet
            </Text>
          </Box>
        </Flex>
        <Flex w="400px">
          <i
            className="icofont icofont-heart"
            style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}
          ></i>
          <Box ml="1rem">
            <Heading fontSize="1.3rem" fontWeight={700}>
              Heart Surgery
            </Heading>
            <Text fontWeight={520} mt="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus dictum eros ut imperdiet
            </Text>
          </Box>
        </Flex>
        <Flex w="400px">
          <i
            className="icofont icofont-listening"
            style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}
          ></i>
          <Box ml="1rem">
            <Heading fontSize="1.3rem" fontWeight={700}>
              Ear Treatment
            </Heading>
            <Text fontWeight={520} mt="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus dictum eros ut imperdiet
            </Text>
          </Box>
        </Flex>
        <Flex w="400px">
          <i
            className="icofont icofont-blood"
            style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}
          ></i>
          <Box ml="1rem">
            <Heading fontSize="1.3rem" fontWeight={700}>
              Blood Transfusion
            </Heading>
            <Text fontWeight={520} mt="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus dictum eros ut imperdiet
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhyChoose;
