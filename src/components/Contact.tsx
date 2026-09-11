import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

const contactItems = [
  {
    label: "Email",
    value: "lauravud@gmail.com",
    href: "mailto:lauravud@gmail.com",
    hint: "The fastest way to reach me",
  },
  {
    label: "LinkedIn",
    value: "Laura Uribe",
    href: "https://www.linkedin.com/in/laura-uribe-donado",
    hint: "Say hello there too",
  },
];

const Contact = () => (
  <Box
    as="section"
    id="contact"
    bgGradient="linear(135deg, brand.deep 0%, brand.violet 55%, brand.pink 140%)"
    color="white"
    scrollMarginTop="72px"
  >
    <Box maxW="1600px" mx="auto" px={[4, 4, 8, 16]} py={[16, 20, 24]}>
      <Text
        fontSize="sm"
        fontWeight="600"
        letterSpacing="0.16em"
        textTransform="uppercase"
        opacity={0.8}
        mb={3}
      >
        Contact
      </Text>
      <Heading fontSize={["3xl", "4xl", "5xl"]} maxW="720px" mb={4}>
        Let&apos;s talk
      </Heading>
      <Text fontSize={["md", "lg"]} maxW="560px" opacity={0.9} mb={[8, 10]}>
        Questions, collaborations, or just a note — my inbox is open.
      </Text>

      <Flex gap={4} direction={{ base: "column", md: "row" }}>
        {contactItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            isExternal={item.href.startsWith("http")}
            flex="1"
            bg="whiteAlpha.200"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="2xl"
            px={6}
            py={6}
            _hover={{
              textDecoration: "none",
              bg: "whiteAlpha.300",
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s ease"
          >
            <Text fontSize="sm" fontWeight="600" letterSpacing="0.08em" mb={2}>
              {item.label}
            </Text>
            <Text fontSize={["lg", "xl"]} fontWeight="600" mb={1}>
              {item.value}
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              {item.hint}
            </Text>
          </Link>
        ))}
      </Flex>
    </Box>
  </Box>
);

export default Contact;
