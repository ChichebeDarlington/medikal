import {
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

type DoctorProps = {
  image: string;
  name: string;
  specialty: string;
};

const DoctorsCard: React.FC<DoctorProps> = ({ image, specialty, name }) => {
  return (
    <Card
      width="18rem"
      height="25rem"
      bg="white"
      boxShadow="10px 10px 1px -20px"
      borderRadius="0.5rem"
      overflow="hidden"
      _hover={{
        cursor: "pointer",
        transform: "skew(1deg, 3deg)",
        transition: "transform 1s ease-in-out",
      }}
    >
      <CardHeader>
        <Image
          src={image}
          h="17rem"
          objectFit="cover"
          objectPosition="100% 100%"
        />
      </CardHeader>
      <CardFooter h="100%">
        <Flex direction="column" w="100%" align="center" justify="center">
          <Text color="black" opacity="0.7">
            {specialty}
          </Text>
          <Heading as="h2" color="black" fontSize="20px" fontWeight="500">
            {name}
          </Heading>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default DoctorsCard;
