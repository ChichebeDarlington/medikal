import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";

const Schedule = () => {
  return (
    <Flex
      justify="center"
      gap={7}
      pos="absolute"
      left="50px"
      right="50px"
      top="600px"
    >
      {/* card 1 */}
      <Card
        height="250px"
        bg="blue.500"
        width="350px"
        color="white"
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        borderRadius={5}
      >
        <CardHeader ml={8}>
          <Text as="span">Lorem Amet</Text>
          <Heading as="h1" fontSize={20} fontWeight={700}>
            Emergency Cases
          </Heading>
        </CardHeader>
        <CardBody mx={8}>
          <Text>
            Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in
            lacus convallis sodales.
          </Text>
        </CardBody>
        <CardFooter ml={8}>
          <Text>
            LEARN MORE <Icon as={HiArrowLongRight} />
          </Text>
        </CardFooter>
      </Card>
      {/* card 2 */}
      <Card
        height="250px"
        bg="blue.500"
        width="350px"
        color="white"
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        borderRadius={5}
      >
        <CardHeader ml={8}>
          <Text as="span">Lorem Amet</Text>
          <Heading as="h1" fontSize={20} fontWeight={700}>
            Emergency Cases
          </Heading>
        </CardHeader>
        <CardBody mx={8}>
          <Text>
            Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in
            lacus convallis sodales.
          </Text>
        </CardBody>
        <CardFooter ml={8}>
          <Text>
            LEARN MORE <Icon as={HiArrowLongRight} />
          </Text>
        </CardFooter>
      </Card>
      {/* card 3 */}
      <Card
        height="250px"
        bg="blue.500"
        width="350px"
        color="white"
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        borderRadius={5}
      >
        <CardHeader ml={8}>
          <Text as="span">Lorem Amet</Text>
          <Heading as="h1" fontSize={20} fontWeight={700}>
            Emergency Cases
          </Heading>
        </CardHeader>
        <CardBody mx={8}>
          <Text>
            Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in
            lacus convallis sodales.
          </Text>
        </CardBody>
        <CardFooter ml={8}>
          <Text>
            LEARN MORE <Icon as={HiArrowLongRight} />
          </Text>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default Schedule;
