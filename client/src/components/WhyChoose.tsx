import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md";

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
        <Text maxW="620px" textAlign="center" fontSize="4xl" fontWeight={700}>
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
      <Flex mx="auto" width="85%" height="400px" gap={10}>
        <Box w="50%">
          <Box mb={6}>
            <Heading color="gray.600" fontSize="3xl" fontWeight={700} mb={3}>
              Who We Are
            </Heading>
            <hr
              style={{
                width: "50px",
                height: "2px",
                background: "black",
              }}
            />
          </Box>
          <Text mb={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pharetra antege vel est lobortis, a commodo magna rhoncus. In quis
            nisi non emet quam pharetra commodo.
          </Text>
          <Text mb={10}>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </Text>
          <Flex mt={15} justify="space-between">
            <Box>
              <Flex align="center" gap={3} mb={3}>
                <Box
                  bg="blue.500"
                  display="grid"
                  placeItems="center"
                  boxSize={4}
                  borderRadius="full"
                >
                  <Icon as={MdPlayArrow} color="white" />
                </Box>
                <Text>Maecenas vitae luctus nibh.</Text>
              </Flex>
              <Flex align="center" gap={3} mb={3}>
                <Box
                  bg="blue.500"
                  display="grid"
                  placeItems="center"
                  boxSize={4}
                  borderRadius="full"
                >
                  <Icon as={MdPlayArrow} color="white" />
                </Box>
                <Text>Duis massa massa.</Text>
              </Flex>
              <Flex align="center" gap={3} mb={3}>
                <Box
                  bg="blue.500"
                  display="grid"
                  placeItems="center"
                  boxSize={4}
                  borderRadius="full"
                >
                  <Icon as={MdPlayArrow} color="white" />
                </Box>
                <Text>Aliquam feugiat interdum.</Text>
              </Flex>
            </Box>
            <Box>
              <Flex align="center" gap={3} mb={3}>
                <Box
                  bg="blue.500"
                  display="grid"
                  placeItems="center"
                  boxSize={4}
                  borderRadius="full"
                >
                  <Icon as={MdPlayArrow} color="white" />
                </Box>
                <Text>Maecenas vitae luctus nibh.</Text>
              </Flex>
              <Flex align="center" gap={3} mb={3}>
                <Box
                  bg="blue.500"
                  display="grid"
                  placeItems="center"
                  boxSize={4}
                  borderRadius="full"
                >
                  <Icon as={MdPlayArrow} color="white" />
                </Box>
                <Text>Duis massa massa.</Text>
              </Flex>
              <Flex align="center" gap={3} mb={3}>
                <Box
                  bg="blue.500"
                  display="grid"
                  placeItems="center"
                  boxSize={4}
                  borderRadius="full"
                >
                  <Icon as={MdPlayArrow} color="white" />
                </Box>
                <Text>Aliquam feugiat interdum.</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box w="50%" bg="gray.500">
          <video style={{ width: "100%", height: "100%" }} controls>
            <source src="/img/hospital_vid2.mp4" type="video/WebM" />
            <source src="/img/hospital_vid2.mp4" type="video/mp4" />
            <source src="/img/hospital_vid2.mp4" type="video/ogg" />
            <source src="/img/hospital_vid2.mp4" type="video/MOV" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WhyChoose;
