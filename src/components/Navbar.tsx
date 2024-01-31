import { Flex } from "@chakra-ui/react"
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Flex pos="sticky" px={[4, 4, 8, 16]} py={2} top={0} background="white" zIndex={1}>
      <img width={60} src={logo} alt="Laura Uribe logo" />
    </Flex>
  )
}

export default Navbar;
