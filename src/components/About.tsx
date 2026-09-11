import { Heading, Text, VStack, Flex, Box } from "@chakra-ui/react";

const About = () => (
  <Box as="section" id="about" bg="brand.wash" scrollMarginTop="72px">
    <Flex
      flexDirection={["column", "column", "column", "row-reverse"]}
      justifyContent="space-between"
      alignItems={{ base: "center", lg: "flex-start" }}
      w="full"
      maxW="1600px"
      mx="auto"
      px={[4, 4, 8, 16]}
      py={[12, 16, 20]}
      gap={[8, 8, 10, 16]}
    >
      <Heading
        fontSize={["3xl", "4xl", "5xl", "7xl"]}
        textAlign={["center", "center", "center", "right"]}
        lineHeight="1.05"
        color="brand.ink"
        maxW={{ lg: "360px" }}
        flexShrink={0}
      >
        About{" "}
        <Box as="span" display={{ base: "inline", lg: "block" }}>
          me
        </Box>
      </Heading>
      <VStack
        gap={5}
        maxW={["100%", "100%", "800px", "760px"]}
        alignItems={["center", "center", "center", "flex-start"]}
      >
        <Box
          w="48px"
          h="4px"
          borderRadius="full"
          bgGradient="linear(to-r, brand.pink, brand.violet)"
          display={{ base: "none", lg: "block" }}
        />
        <Text
          fontSize={["md", "md", "lg"]}
          lineHeight="1.7"
          textAlign={["center", "center", "center", "left"]}
          color="brand.ink"
        >
          I am a Senior Software Engineer with 6+ years of experience designing
          and building scalable products across the entire stack—from
          performant React and Next.js interfaces to server-side APIs, data
          models, and PostgreSQL schemas. Over the course of my career,
          I&apos;ve delivered complex software across diverse domains, including
          distributed logistics platforms, high-throughput consumer web apps,
          telemetry systems, and core transaction infrastructure.
        </Text>
        <Text
          fontSize={["md", "md", "lg"]}
          lineHeight="1.7"
          textAlign={["center", "center", "center", "left"]}
          color="gray.700"
        >
          I believe great engineering goes beyond writing code: it&apos;s about
          end-to-end ownership. I partner closely with product, design, and
          operations teams from initial discovery and RFC design all the way
          through deployment, observability, and performance optimization. By
          integrating modern AI workflows and automated tooling, I focus on
          building reliable software systems that solve real business problems
          and scale with user demand.
        </Text>
      </VStack>
    </Flex>
  </Box>
);

export default About;
