import {
  Card,
  CardBody,
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

const BlogCard: React.FC<DoctorProps> = ({ image }) => {
  return (
    <Card
      width="24rem"
      height="30rem"
      bg="white"
      boxShadow="10px 10px 15px -15px"
      _hover={{ borderBottom: "2px solid blue" }}
      transition="all 0.5s ease-in-out"
    >
      <CardHeader>
        <Image
          src={image}
          h="15rem"
          objectFit="cover"
          objectPosition="100% 100%"
        />
      </CardHeader>

      <CardBody h="15rem">
        <Flex direction="column" w="80%" mx="auto" mt="30px" rowGap={3}>
          <Text
            w="130px"
            as="span"
            color="white"
            opacity="0.7"
            bg="blue"
            borderRadius="3px"
            p="5px"
            px="15px"
          >
            22 Aug, 2020
          </Text>
          <Heading
            as="h2"
            color="black"
            fontSize="20px"
            fontWeight="600"
            _hover={{ cursor: "pointer", color: "blue" }}
          >
            We have annnocuced our new product.
          </Heading>
          <Text fontSize="14px" opacity="0.5">
            Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt sed do incididunt sed.
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
