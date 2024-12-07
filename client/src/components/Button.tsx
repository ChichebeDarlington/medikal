import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  sx?: { [key: string]: string };
}

const Button: React.FC<ButtonProps> = ({ text, children, sx }) => {
  return (
    <ChakraButton
      bg="blue"
      color="white"
      px={9}
      py={6}
      borderRadius={5}
      _hover={{ bg: "black", color: "white" }}
      cursor="pointer"
      sx={sx}
    >
      {text}
      {children}
    </ChakraButton>
  );
};

export default Button;
