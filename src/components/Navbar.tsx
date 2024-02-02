import { Flex, Link, Image } from "@chakra-ui/react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Flex
      pos="sticky"
      px={[4, 4, 8, 16]}
      py={2}
      top={0}
      background="white"
      zIndex={1}
      maxW={"1600px"}
      mx="auto"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image boxSize="32px" src={logo} alt="Laura Uribe logo" />
      <Flex justifyContent="space-between" gap={8} textColor="#AB52C5">
        <Link href="#about">About</Link>
        <Link href="#stack">My Stack</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
