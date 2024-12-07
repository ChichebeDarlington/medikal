import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { portfolioSlider } from "../utils/data";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const totalLength = portfolioSlider.length;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((auto) => (auto + 1) % totalLength);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      // mt="5rem"
      flexDir="column"
      align="center"
      alignContent="space-around"
      justifyContent="space-evenly"
      h="100vh"
      overflow="hidden"
    >
      <Flex flexDir="column" align="center" gap={4}>
        <Heading
          maxW="630px"
          textAlign="center"
          fontSize="4xl"
          fontWeight={700}
        >
          We Maintain Cleanliness Rules Inside Our Hospital
        </Heading>
        <Box>
          <Image src="/img/section-img.png" />
        </Box>
        <Text as="span" color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </Text>
      </Flex>
      <Flex
        justifyContent="space-around"
        gap={3}
        overflow="hidden"
        overflowX="hidden"
        width="98%"
      >
        {portfolioSlider.map((img, index) => {
          return (
            <Flex
              key={index}
              h="250px"
              w="25%"
              flexShrink={0}
              transition="transform 0.5s"
              transform={`translateX(-${(currentIndex * 100) / 4}%)`}
            >
              <Image src={img} boxSize="100%" objectFit="cover" />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Portfolio;
