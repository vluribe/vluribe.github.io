import { Divider, Heading, Text, VStack, Flex } from "@chakra-ui/react";

const About = () => (
  <VStack
    gap={4}
    mx={-16}
    my={20}
    alignItems="center"
    as="section"
    background="#f7f7f7"
    id="about"
  >
    <Divider />
    <Flex
      flexDirection={["column", "column", "column", "row-reverse"]}
      justifyContent="space-between"
      w="full"
      px={16}
      py={8}
      gap={2}
      maxW={`calc(1600px + 64px)`}
    >
      <Heading
        fontSize={["lg", "lg", "xl", "8xl"]}
        textAlign={["center", "center", "center", "right"]}
        mx="auto"
        maxW="352px"
      >
        About Me
      </Heading>
      <VStack
        gap={2}
        maxW={["100%", "100%", "70%", "50%"]}
        m={["auto", "auto", "auto", "0"]}
      >
        <Text size="lg" textAlign={["center", "center", "center", "left"]}>
          I am a web developer with {new Date().getFullYear() - 2020}+ years of
          experience. I have worked as a full stack developer on most of the
          projects I have been on, I have abilities with Python/Django and
          PostgreSQL, but my expertise is frontend development, especially with
          React JS, Next JS, and Typscript, along with several styling
          libraries, such as Tailwind, Styled Components and Chakra UI.
        </Text>
        <Text size="lg" textAlign={["center", "center", "center", "left"]}>
          I consider myself super proactive, and open to new ideas, I love to be
          in constant learning and also help others learn the things I know. I
          consider that nobody can know everything about a subject, but a good
          team can always help you be close to that goal.
        </Text>
        <Text size="lg" textAlign={["center", "center", "center", "left"]}>
          If you are convinced that you can work with me, feel free to contact
          me, I'd love to hear from you!
        </Text>
      </VStack>
    </Flex>
    <Divider />
  </VStack>
);

export default About;
