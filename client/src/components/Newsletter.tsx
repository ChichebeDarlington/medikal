import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";

const Newsletter = () => {
  return (
    <Box bg="blue.100" h="17rem">
      <Flex align="center" justify="space-evenly" h="100%">
        <Box>
          <Heading as="h2" fontSize="1.5rem">
            Sign up for newsletter
          </Heading>
          <Text width="85%" mt="0.5rem" opacity="0.4">
            Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
            alterum.{" "}
          </Text>
        </Box>
        <Flex>
          <Input
            type="email"
            placeholder="Your Email Address"
            p="1.5rem"
            h="3.5rem"
            w="15rem"
            borderRadius="5px"
            mr="10px"
          />
          <Button
            p="1.5rem"
            h="3.5rem"
            w="10rem"
            borderRadius="5px"
            colorScheme="blue"
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Newsletter;
