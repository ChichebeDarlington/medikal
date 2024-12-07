import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";

const CallToAction = () => {
  return (
    <Box h="29rem" pos="relative">
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

      {/* Background Image Box */}
      <Box
        height="100%"
        bgImage="/img/call-bg.jpg"
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
        h="100%"
        pos="relative"
        display="grid"
        placeContent="center"
        zIndex="5"
        color="white"
        textTransform="capitalize"
      >
        <Flex flexDir="column" align="center" justify="center" gap={5}>
          <Heading w="500px" fontSize="3xl" fontWeight={700}>
            Do you need Emergency Medical Care? Call @ 1234 56789
          </Heading>
          <Text w="600px" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor dictum turpis nec gravida.
          </Text>
          <Flex gap={5}>
            <Button p={7}>contact us</Button>

            <Button p={7} alignItems="center">
              Learn More <Icon as={GoArrowRight} />
            </Button>
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
};

export default CallToAction;
