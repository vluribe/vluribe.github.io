import { Flex } from "@chakra-ui/react"
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Flex pos="sticky" px={16} py={4}>
      <img width={60} src={logo} alt="Laura Uribe logo" />
    </Flex>
  )
}

export default Navbar;
