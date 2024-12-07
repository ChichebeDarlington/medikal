import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { BsGoogle, BsPinterest, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Flex bg="blue.600" h="500px" color="white" padding={10} gap={10}>
        {/* About us */}
        <Box w="500px" mt="5rem">
          <Heading
            textTransform="capitalize"
            fontSize="20px"
            fontWeight={700}
            mb={3}
          >
            about us
          </Heading>
          <hr
            style={{
              height: "2px",
              width: "50px",
              background: "white",
              marginBottom: "40px",
            }}
          />
          <Text mb="20px">
            Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod
            tempor incididunt ut labore dolore magna.
          </Text>
          <Flex justify="space-around" w="250px">
            <Box
              border="2px white solid"
              h="30px"
              w="30px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={FaFacebook} />
            </Box>
            <Box
              border="2px white solid"
              h="30px"
              w="30px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={BsGoogle} />
            </Box>
            <Box
              border="2px white solid"
              h="30px"
              w="30px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={BsPinterest} />
            </Box>
            <Box
              border="2px white solid"
              h="30px"
              w="30px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={BsTwitterX} />
            </Box>
            <Box
              border="2px white solid"
              h="30px"
              w="30px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={FaLinkedin} />
            </Box>
          </Flex>
        </Box>
        {/* Quick links */}
        <Box w="500px" mt="5rem">
          <Heading
            textTransform="capitalize"
            fontSize="20px"
            fontWeight={700}
            mb={3}
            ml="20px"
          >
            quick links
          </Heading>
          <hr
            style={{
              height: "2px",
              width: "50px",
              background: "white",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          />
          <Flex justify="space-evenly">
            <Box>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Home</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>About us</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Services</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Our Cases</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Other Links</Text>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Counseling</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Finance</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>Testimonials</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />

                  <Text>FAQ</Text>
                </Flex>
              </Link>
              <Link to="">
                <Flex align="center" gap={3} mb={3}>
                  <Icon as={MdPlayArrow} color="white" />
                  <Text>Contact Us</Text>
                </Flex>
              </Link>
            </Box>
          </Flex>
        </Box>
        {/* Open hours */}
        <Box w="600px" mt="5rem">
          <Heading
            textTransform="capitalize"
            fontSize="20px"
            fontWeight={700}
            mb={3}
          >
            Open Hours
          </Heading>
          <hr
            style={{
              height: "2px",
              width: "50px",
              background: "white",
              marginBottom: "40px",
            }}
          />
          <Text>
            Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod
            tempor incididunt
          </Text>
          <Flex mt="15px" justify="space-between">
            <Box>
              <Text>Monday - Friday</Text>
              <Text>Saturday</Text>
              <Text>Sunday - Monday</Text>
            </Box>
            <Box>
              <Text>8.00 - 20.00</Text>
              <Text>9.00 - 21.00</Text>
              <Text>10.00 - 20.00</Text>
            </Box>
          </Flex>
        </Box>
        {/* News letter */}
        <Box w="600px" mt="5rem">
          <Heading
            textTransform="capitalize"
            fontSize="20px"
            fontWeight={700}
            mb={3}
          >
            news letter
          </Heading>
          <hr
            style={{
              height: "2px",
              width: "50px",
              background: "white",
              marginBottom: "40px",
            }}
          />
          <Text mb="20px">
            subscribe to our newsletter to get allour news in your inbox.. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit
          </Text>
          <InputGroup w="300px" size="md" mr={0}>
            <Input
              bg="blue.500"
              _placeholder={{ color: "white" }}
              w="100%"
              h="3rem"
              type="tel"
              placeholder="Email address"
              borderRadius={4}
              borderWidth={2}
              borderStyle="solid"
              borderColor="white"
            />
            <InputRightElement w="4.5rem">
              <Button h="3rem">
                <Icon as={PiTelegramLogo} boxSize={5} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <Flex h="5rem" bg="blue.500" align="center" justify="center">
        <Text color="white">
          &copy; Copyright 2024 | All Rights Reserved by
          <Link to=""> Mediplus</Link>
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
