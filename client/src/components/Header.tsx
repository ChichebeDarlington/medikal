import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Divider, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      bg="white"
      h="3rem"
      py="2rem"
      px="7rem"
    >
      <Flex gap={3}>
        <Text
          _hover={{
            cursor: "pointer",
            color: "blue",
            transition: "color 0.3s ease",
          }}
        >
          About
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            color: "blue",
            transition: "color 0.3s ease",
          }}
        >
          Doctors
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            color: "blue",
            transition: "color 0.3s ease",
          }}
        >
          Contacts
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            color: "blue",
            transition: "color 0.3s ease",
          }}
        >
          FAQ
        </Text>
      </Flex>
      <Flex gap={3}>
        <Text cursor="pointer">
          <PhoneIcon color="blue.600" /> +234 8068020365
        </Text>
        <Text cursor="pointer">
          <EmailIcon color="blue.600" /> maduchuks@gmail.com
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
