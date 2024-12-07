import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { PiAmbulanceFill } from "react-icons/pi";
import { GiPharoah } from "react-icons/gi";
import { LuStethoscope } from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      mt="15rem"
      flexDir="column"
      align="center"
      alignContent="space-around"
      justifyContent="space-evenly"
      h="100vh"
    >
      <Flex flexDir="column" align="center" gap={4}>
        <Text maxW="620px" textAlign="center" fontSize="4xl" fontWeight={700}>
          We Are Always Ready to Help You & Your Family
        </Text>
        <Box>
          <Image src="/img/section-img.png" />
        </Box>
        <Text as="span" color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </Text>
      </Flex>
      <Flex justifyContent="space-around" gap={7}>
        <Flex w="320px" flexDir="column" alignItems="center" gap={6}>
          <Box
            borderRadius="full"
            p={7}
            border="2px"
            borderColor="gray.200"
            boxSize="100px"
          >
            <Icon as={PiAmbulanceFill} color="blue" boxSize="40px" />
          </Box>
          <Heading fontSize="2xl" fontWeight={600}>
            Emergency Help
          </Heading>
          <Text color="gray.500">
            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
            vulputate.
          </Text>
        </Flex>
        <Flex w="320px" flexDir="column" align="center" gap={6}>
          <Box
            borderRadius="full"
            p={7}
            border="2px"
            borderColor="gray.200"
            boxSize="100px"
          >
            <Icon as={GiPharoah} color="blue" boxSize="40px" />
          </Box>
          <Heading fontSize="2xl" fontWeight={600}>
            Enriched Pharmcy
          </Heading>
          <Text color="gray.500">
            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
            vulputate.
          </Text>
        </Flex>
        <Flex w="320px" flexDir="column" align="center" gap={6}>
          <Box
            borderRadius="full"
            p={7}
            border="2px"
            borderColor="gray.200"
            boxSize="100px"
          >
            <Icon as={LuStethoscope} color="blue" boxSize="40px" />
          </Box>
          <Heading fontSize="2xl" fontWeight="600">
            Medical Treatment
          </Heading>
          <Text color="gray.500">
            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
            vulputate.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Features;
