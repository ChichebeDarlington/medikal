import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { FaHouseMedical } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegCalendarDays } from "react-icons/fa6";

const FunFact = () => {
  return (
    <Box h="20rem" pos="relative">
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

      {/* Background Image Box */}
      <Box
        height="100%"
        bgImage="/img/blockqoute-bg.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      ></Box>

      {/* content */}
      <HStack
        h="20rem"
        pos="relative"
        spacing={10}
        justify="space-around"
        align="center"
        zIndex="5"
        color="white"
        textTransform="capitalize"
      >
        <Flex justify="center" align="center" gap={5}>
          <Box
            display="grid"
            placeItems="center"
            borderRadius="full"
            border="2px"
            borderColor="gray.200"
            boxSize="65px"
            _hover={{ bg: "white" }}
          >
            <Icon
              as={FaHouseMedical}
              boxSize="35px"
              _hover={{ color: "blue.500" }}
            />
          </Box>
          <Box>
            <Heading fontSize="3xl" fontWeight="600">
              4567
            </Heading>
            <Text>hospital room</Text>
          </Box>
        </Flex>
        <Flex justify="center" align="center" gap={5}>
          <Box
            display="grid"
            placeItems="center"
            borderRadius="full"
            border="2px"
            borderColor="gray.200"
            boxSize="65px"
            _hover={{ bg: "white" }}
          >
            <Icon
              as={IoPersonSharp}
              boxSize="35px"
              _hover={{ color: "blue.500" }}
            />
          </Box>
          <Box>
            <Heading fontSize="3xl" fontWeight="600">
              4567
            </Heading>
            <Text>specialist doctor</Text>
          </Box>
        </Flex>
        <Flex justify="center" align="center" gap={5}>
          <Box
            display="grid"
            placeItems="center"
            borderRadius="full"
            border="2px"
            borderColor="gray.200"
            boxSize="65px"
            _hover={{ bg: "white" }}
          >
            <Icon
              as={CiFaceSmile}
              boxSize="35px"
              _hover={{ color: "blue.500" }}
            />
          </Box>
          <Box>
            <Heading fontSize="3xl" fontWeight="600">
              4567
            </Heading>
            <Text>Happy Patients</Text>
          </Box>
        </Flex>
        <Flex justify="center" align="center" gap={5}>
          <Box
            display="grid"
            placeItems="center"
            borderRadius="full"
            border="2px"
            borderColor="gray.200"
            boxSize="65px"
            _hover={{ bg: "white", zIndex: "0" }}
          >
            <Icon
              as={FaRegCalendarDays}
              boxSize="35px"
              _hover={{ color: "blue.500" }}
            />
          </Box>
          <Box>
            <Heading fontSize="3xl" fontWeight="600">
              4567
            </Heading>
            <Text fontWeight={500}>Years of Experience</Text>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};

export default FunFact;
