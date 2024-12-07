import { Box, Flex, Image } from "@chakra-ui/react";

const Overlay = () => {
  return (
    <Box h="250px" pos="relative">
      {/* background color */}
      <Box
        height="100%"
        backgroundColor="rgba(52, 152, 219, 0.7)" // Semi-transparent color
        opacity="1"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="1"
      ></Box>
      {/* background image */}
      <Box
        bgImage="img/client-bg.jpg"
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
      <Flex
        pos="relative"
        zIndex="3"
        color="white"
        align="center"
        justify="space-evenly"
        h="100%"
      >
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="img/client1.png" w="10rem" />
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="img/client2.png" w="10rem" />
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="img/client3.png" w="10rem" />
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="img/client4.png" w="10rem" />
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="img/client5.png" w="10rem" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Overlay;
