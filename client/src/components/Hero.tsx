import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Icon,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { imageSlider } from "../utils/data";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useEffect, useState } from "react";

const Hero = () => {
  const [slideImage, setSlideImage] = useState<number>(0);

  const totalImage = imageSlider.length;

  const slideImageNextFunc = () => {
    setSlideImage((next: number) => (next + 1) % totalImage);
  };

  const slideImagePrevFunc = () => {
    setSlideImage((prev: number) => (prev - 1 + totalImage) % totalImage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideImage((prev: number) => (prev - 1 + totalImage) % totalImage);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImage]);

  return (
    <Box>
      <SlideFade
        in={true}
        transition={{
          enter: {
            transition: "ease-out",
            duration: 0.9,
            delay: 0.9,
          },
          exit: {
            transition: "ease-in",
            duration: 0.9,
          },
        }}
      >
        <Flex
          direction="column"
          justify="center"
          gap={7}
          h="80vh"
          bgImage={imageSlider[slideImage]}
          backgroundPosition="center"
          backgroundSize="cover"
          pos="relative"
        >
          <Icon
            as={FcNext}
            borderRadius="full"
            bg="white"
            boxSize={10}
            cursor="pointer"
            pos="absolute"
            right={4}
            onClick={slideImageNextFunc}
          />

          <Icon
            as={FcPrevious}
            borderRadius="full"
            bg="white"
            boxSize={10}
            color="white"
            cursor="pointer"
            pos="absolute"
            left={4}
            onClick={slideImagePrevFunc}
          />

          <Heading
            as="h1"
            fontSize="5xl"
            textTransform="capitalize"
            fontWeight={900}
            maxW="700px"
            ml="100px"
          >
            <Highlight
              query={["medical", "trust"]}
              styles={{ color: "blue.600" }}
            >
              we provide medical services that you can trust!
            </Highlight>
          </Heading>
          <Text ml="100px" maxW="700px">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            molestiae totam porro. Lorem ipsum dolor sit amet.
          </Text>
          <Box ml="100px">
            <Button
              bg="blue.500"
              color="white"
              px={9}
              py={6}
              borderRadius={5}
              _hover={{ bg: "black", color: "white" }}
              cursor="pointer"
            >
              get appointment
            </Button>
            <Button
              bg="gray.700"
              color="white"
              px={9}
              py={6}
              borderRadius={5}
              _hover={{ bg: "blue.500", color: "white" }}
              cursor="pointer"
              ml={3}
            >
              learn more!
            </Button>
          </Box>
        </Flex>
      </SlideFade>
    </Box>
  );
};

export default Hero;
