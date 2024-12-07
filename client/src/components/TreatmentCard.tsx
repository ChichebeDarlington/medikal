import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

type TreatmentCardType = {
  heading: string;
  price: string | any;
  icon: React.ReactElement;
  listText: string;
};

const TreatmentCard: React.FC<TreatmentCardType> = ({
  heading,
  listText,
  price,
  icon,
}) => {
  return (
    <Card
      bg="white"
      display="flex"
      direction="column"
      align="center"
      p="2rem"
      boxShadow="10px 10px 1px -10px white"
      border="1px solid grey"
    >
      <CardHeader
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb="2rem"
      >
        {icon}
        <Heading as="h2" fontWeight="600" fontSize="25px">
          {heading}
        </Heading>
        <Text color="blue.500" fontSize="2.5rem" fontWeight="700">
          {price}{" "}
          <Text as="span" color="black" fontSize="1rem" opacity="0.7">
            /Per Visit
          </Text>
        </Text>
      </CardHeader>
      <CardBody w="100%">
        <List fontWeight="400">
          <ListItem
            mb="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {listText}
            <ListIcon as={MdCheckCircle} color="blue.500" />
          </ListItem>
          <ListItem
            mb="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {listText}
            <ListIcon as={MdCheckCircle} color="blue.500" />
          </ListItem>
          <ListItem
            mb="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {listText}
            <ListIcon as={MdCheckCircle} color="blue.500" />
          </ListItem>
          <ListItem
            mb="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {listText}
            <ListIcon as={MdCheckCircle} color="blue.500" />
          </ListItem>
          <ListItem
            mb="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {listText}
            <ListIcon as={MdCheckCircle} color="blue.500" />
          </ListItem>
        </List>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" w="300px">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TreatmentCard;
