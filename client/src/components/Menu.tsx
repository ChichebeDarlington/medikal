import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "/img/logo.png";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const MenuBar = () => {
  return (
    <Flex
      justify="space-around"
      align="center"
      h="6rem"
      bg="white"
      as="nav"
      color="black"
      px="5rem"
      position="sticky"
      top="0"
      zIndex={10}
    >
      <Box>
        <Image src={logo} alt="logo" />
      </Box>
      <Box>
        <Menu>
          <MenuButton
            bg="white"
            _hover={{ color: "blue.300" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
          >
            Home
          </MenuButton>
          <MenuList>
            <MenuItem>Home 1</MenuItem>
            <MenuItem>Home 2</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            bg="white"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
            _hover={{ color: "blue.300" }}
          >
            Doctors
          </MenuButton>
          <MenuList>
            <MenuItem> Doctors</MenuItem>
            <MenuItem>Detaials</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            bg="white"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
            _hover={{ color: "blue.300" }}
          >
            Services
          </MenuButton>
          <MenuList>
            <MenuItem> Doctors</MenuItem>
            <MenuItem>Detaials</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            bg="white"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
            _hover={{ color: "blue.300" }}
          >
            Pages
          </MenuButton>
          <MenuList>
            <MenuItem> Doctors</MenuItem>
            <MenuItem>Detaials</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            bg="white"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mr={2}
            _hover={{ color: "blue.300" }}
          >
            Blogs
          </MenuButton>
          <MenuList>
            <MenuItem> Doctors</MenuItem>
            <MenuItem>Details</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            mr={2}
            bg="white"
            _hover={{ color: "blue.300" }}
          >
            Contact US
          </MenuButton>
          <MenuList>
            <MenuItem> Doctors</MenuItem>
            <MenuItem>Details</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Text
          bg="blue"
          color="white"
          px={6}
          py={3}
          borderRadius={5}
          _hover={{ bg: "black", color: "white" }}
          cursor="pointer"
        >
          Appointment
        </Text>
      </Box>
    </Flex>
  );
};

export default MenuBar;
