import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Departments = () => {
  return (
    <Box h="auto" p="10px" m="10px" w="90%" mx="auto" mb="5rem">
      <Flex direction="column" justify="center" align="center" my="5rem">
        <Text
          fontWeight={700}
          fontSize="35px"
          opacity="0.8"
          maxW="600px"
          textAlign="center"
          mb="20px"
        >
          We Offer Different Departments To Diagnose Your Diseases
        </Text>
        <Box>
          <Image src="img/section-img.png" filter="auto" />
        </Box>
      </Flex>

      <Flex w="80%" justify="space-between" mb="2rem">
        <Flex direction="column" align="center" _hover={{ cursor: "pointer" }}>
          <i
            className="icofont icofont-heart-beat"
            style={{ fontSize: "3rem", opacity: "0.6" }}
          ></i>
          <Heading as="h2" fontSize="20px" fontWeight="600" opacity="0.6">
            Cardiac Clinic
          </Heading>
          <Text opacity="0.6">Lorem Sit.</Text>
        </Flex>
        <Flex direction="column" align="center" _hover={{ cursor: "pointer" }}>
          <i
            className="icofont icofont-brain-alt"
            style={{ fontSize: "3rem", opacity: "0.6" }}
          ></i>
          <Heading as="h2" fontSize="20px" fontWeight="600" opacity="0.6">
            Neurology
          </Heading>
          <Text opacity="0.6">Lorem sit.</Text>
        </Flex>
        <Flex direction="column" align="center" _hover={{ cursor: "pointer" }}>
          <i
            className="icofont icofont-tooth"
            style={{ fontSize: "3rem", opacity: "0.6" }}
          ></i>
          <Heading as="h2" fontSize="20px" fontWeight="600" opacity="0.6">
            Dentistry
          </Heading>
          <Text opacity="0.6">Lorem sit.</Text>
        </Flex>
        <Flex direction="column" align="center" _hover={{ cursor: "pointer" }}>
          <i
            className="icofont icofont-pulse"
            style={{ fontSize: "3rem", opacity: "0.6" }}
          ></i>
          <Heading as="h2" fontSize="20px" fontWeight="600" opacity="0.6">
            Gastroenterology
          </Heading>
          <Text opacity="0.6">Lorem sit.</Text>
        </Flex>
        <Flex direction="column" align="center" _hover={{ cursor: "pointer" }}>
          <i
            className="icofont icofont-bone"
            style={{ fontSize: "3rem", opacity: "0.6" }}
          ></i>
          <Heading as="h2" fontSize="20px" fontWeight="600" opacity="0.6">
            Orthopedagogy
          </Heading>
          <Text opacity="0.6">Lorem sit.</Text>
        </Flex>
      </Flex>
      <Divider h="0.1rem" background="black" opacity="0.1" mb="2rem" />
      <Flex gap="10px">
        <Box flex={1}>
          <Heading as="h2" fontSize="1.5rem" fontWeight="700" mb="0.8rem">
            Cardiac Clinic
          </Heading>
          <Divider h="0.15rem" w="10%" background="black" mb="2rem" />
          <Text mb="1rem" color="blue.500" fontWeight="600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            praesentium, maxime quisquam eaque dolorem deleniti!
          </Text>
          <Text mb="1rem" fontWeight="500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            facilis omnis nesciunt doloremque dicta consectetur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ea voluptates sit natus
            nobis ducimus doloribus.
          </Text>

          <List fontWeight="400">
            <ListItem mb="1rem">
              <ListIcon as={MdCheckCircle} color="blue.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem mb="1rem">
              <ListIcon as={MdCheckCircle} color="blue.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blue.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </Box>
        <Box flex={1} bg="red" w="80%">
          <Image src="img/video-bg.jpg" h="350px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Departments;
