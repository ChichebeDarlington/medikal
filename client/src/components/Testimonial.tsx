import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import CardComponent from "./Card";
import { useEffect, useState } from "react";

const Testimonial = () => {
  let cardSlider = [
    {
      img: "img/slider.jpg",
      name: "Adams",
    },
    {
      img: "img/slider2.jpg",
      name: "Allen",
    },
    {
      img: "img/slider3.jpg",
      name: "Michael",
    },
    {
      img: "img/slider.jpg",
      name: "Okoro",
    },
    {
      img: "img/slider2.jpg",
      name: "Okonkwo",
    },
    {
      img: "img/slider3.jpg",
      name: "Okeke",
    },
  ];

  const totalLength = cardSlider.length;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((auto) => (auto + 1) % totalLength);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box h="100vh" pos="relative">
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
        h="100%"
        w="100vw"
        pos="relative"
        display="grid"
        placeContent="center"
        zIndex="5"
        color="white"
        textTransform="capitalize"
        // overflow="hidden"
      >
        <Flex flexDir="column" align="center" justify="center" gap={5}>
          <Heading w="500px" fontSize="3xl" fontWeight={700} textAlign="center">
            What Our Patients Say About Our Medical Treatments.
          </Heading>
          <Box w="600px" textAlign="center">
            <Image src="img/section-img.png" filter="auto" />
          </Box>
        </Flex>

        <Flex
          justify="center"
          overflowX={"hidden"}
          h="267px"
          w="1100px"
          p="20px"
        >
          <Flex
            gap={10}
            justify="center"
            transform={`translateX(-${(currentIndex * 50) / totalLength}%)`}
            transition="all 3s ease"
          >
            {cardSlider.map((card) => {
              return <CardComponent img={card.img} name={card.name} />;
            })}
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Testimonial;

{
  /* {[
            ...Array(5)
              .fill(0)
              .map((x) => <CardComponent img={"img/slider.jpg"} name="Adam" />),
          ]} */
}
