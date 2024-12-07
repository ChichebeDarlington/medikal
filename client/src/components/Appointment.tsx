import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  FormControl,
} from "@chakra-ui/react";

const Appointments = () => {
  return (
    <Box>
      <Flex flexDir="column" align="center" my="5rem">
        <Heading
          as="h2"
          w="650px"
          fontSize="2rem"
          fontWeight={700}
          textAlign="center"
          lineHeight={10}
          mb="1rem"
        >
          We Are Always Ready to Help You, Book An Appointment.
        </Heading>
        <Box mb="1rem">
          <Image src="img/section-img.png" filter="auto" />
        </Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts{" "}
        </Text>
      </Flex>

      <Flex justify="center">
        <FormControl width="45%">
          <Flex wrap="wrap">
            <Input
              type="text"
              placeholder="Name"
              w="45%"
              p="0.2rem"
              m="0.5rem"
              border="2px solid grey"
              outline="blue"
              borderRadius="5px"
            />
            <Input
              type="email"
              placeholder="Email"
              w="45%"
              p="1rem"
              m="0.5rem"
              border="2px solid grey"
              outline="none"
              borderRadius="5px"
            />
            <Input
              type="tel"
              placeholder="Mobile Number"
              w="45%"
              p="1rem"
              m="0.5rem"
              border="2px solid grey"
              outline="none"
              borderRadius="5px"
            />

            <select
              style={{
                width: "45%",
                padding: "1rem",
                margin: "0.5rem",
                background: "white",
                border: "2px solid grey",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <option>Departments</option>
              <option>Dental</option>
              <option>Surgeon</option>
            </select>
            <select
              style={{
                width: "45%",
                padding: "1rem",
                margin: "0.5rem",
                background: "white",
                border: "2px solid grey",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <option>Doctors</option>
              <option>Allen Arthur</option>
              <option>Adams Maurice</option>
            </select>
            <Input
              type="date"
              w="45%"
              p="1rem"
              m="0.5rem"
              border="2px solid grey"
              outline="none"
              borderRadius="5px"
            />

            <Textarea
              w="93%"
              h="200px"
              p="1rem"
              m="0.5rem"
              border="2px solid grey"
              outline="none"
              borderRadius="5px"
              resize="none"
            ></Textarea>
            <Flex justify="space-between" align="center" m="0.5rem" w="85%">
              <Button colorScheme="blue" w="15rem" p="1.5rem">
                Book Now
              </Button>
              <Text opacity="0.6">(We will be notify through email.)</Text>
            </Flex>
          </Flex>
        </FormControl>

        <Box w="45%">
          <Image src="img/contact-img.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Appointments;
