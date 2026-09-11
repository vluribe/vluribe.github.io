import { Flex, Link, Image, Box } from "@chakra-ui/react";
import logo from "../images/logo.svg";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience", short: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <Flex
      pos="sticky"
      px={[4, 4, 8, 16]}
      py={3}
      top={0}
      background="rgba(255, 255, 255, 0.86)"
      backdropFilter="blur(16px)"
      zIndex={1}
      w="full"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="blackAlpha.50"
    >
      <Image boxSize="32px" src={logo} alt="Laura Uribe logo" flexShrink={0} />
      <Flex
        justifyContent="flex-end"
        gap={[3, 4, 8]}
        textColor="brand.violet"
        fontWeight="500"
        fontSize={["sm", "sm", "md"]}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            whiteSpace="nowrap"
            _hover={{ color: "brand.pink", textDecoration: "none" }}
          >
            <Box as="span" display={{ base: link.short ? "none" : "inline", md: "inline" }}>
              {link.label}
            </Box>
            {link.short ? (
              <Box as="span" display={{ base: "inline", md: "none" }}>
                {link.short}
              </Box>
            ) : null}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
