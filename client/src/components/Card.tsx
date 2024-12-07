import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

type ChildProps = {
  name: string;
  img: string;
};

const CardComponent: React.FC<ChildProps> = ({ name, img }) => {
  return (
    <Box bg="white" borderRadius={10} w="20rem">
      <Card
        _hover={{ transform: "scale(1.05)", transition: "all 3s ease-out" }}
      >
        <CardBody>
          <Box padding={10}>
            <Text color="grey">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              cumque quos quia eum, eius.
            </Text>
            <Heading color="black" fontWeight={700} mt={5} opacity={0.7}>
              {name}
            </Heading>
          </Box>
          <Image
            boxSize="50px"
            borderRadius="full"
            fit="fill"
            src={img}
            alt="card-image"
            pos="absolute"
            bottom="-20px"
            left="35px"
          />
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardComponent;
