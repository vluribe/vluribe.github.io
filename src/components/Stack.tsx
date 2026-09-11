import {
  Box,
  Flex,
  Heading,
  Image,
  ImageProps,
  SimpleGrid,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import SectionContainer from "./SectionContainer";

import reactLogo from "../images/stack/react.png";
import typescriptLogo from "../images/stack/typescript.png";
import javascriptLogo from "../images/stack/javascript.png";
import tailwindLogo from "../images/stack/tailwind.svg";
import chakraUILogo from "../images/stack/chakra-ui.png";
import djangoLogo from "../images/stack/django.png";
import pythonLogo from "../images/stack/python.png";
import awsLogo from "../images/stack/aws-lambdas.png";
import dynamoDBLogo from "../images/stack/dynamoDB.png";
import postgresqlLogo from "../images/stack/postgresql.png";

interface StackImageProps extends ImageProps {
  size?: "lg" | "sm";
}

const featured = [
  { src: reactLogo, alt: "React" },
  { src: typescriptLogo, alt: "TypeScript" },
  { src: javascriptLogo, alt: "JavaScript" },
  { src: tailwindLogo, alt: "Tailwind CSS" },
  { src: chakraUILogo, alt: "Chakra UI" },
  { src: postgresqlLogo, alt: "PostgreSQL" },
  { src: pythonLogo, alt: "Python" },
  { src: djangoLogo, alt: "Django" },
  { src: awsLogo, alt: "AWS" },
  { src: dynamoDBLogo, alt: "DynamoDB" },
];

const chipGroups = [
  {
    label: "I build with",
    items: ["Next.js", "Node.js", "Express", "tRPC", "TanStack Query", "Prisma"],
  },
  {
    label: "I test and ship with",
    items: ["Jest", "Cypress", "React Testing Library", "GitHub Actions", "Docker"],
  },
];

const StackImage = ({ src, alt, size = "lg" }: StackImageProps) => (
  <Tooltip label={alt}>
    <Image
      src={src}
      alt={alt}
      boxSize={size === "sm" ? "48px" : "72px"}
      objectFit="contain"
      borderRadius="full"
      boxShadow="md"
      bg="white"
    />
  </Tooltip>
);

const Stack = () => {
  return (
    <SectionContainer id="stack">
      <Heading
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        bgGradient="linear(to-l, brand.pink, brand.violet)"
        bgClip="text"
        mb={3}
      >
        Tech stack
      </Heading>
      <Text
        textAlign="center"
        color="gray.600"
        maxW="560px"
        mx="auto"
        mb={[8, 10]}
      >
        The languages, frameworks, and tools I use day to day — and am happy
        to talk through with you.
      </Text>

      <SimpleGrid
        columns={[3, 4, 5]}
        spacing={[6, 8]}
        justifyItems="center"
        maxW="720px"
        mx="auto"
        mb={[10, 12]}
      >
        {featured.map((item) => (
          <StackImage key={item.alt} src={item.src} alt={item.alt} />
        ))}
      </SimpleGrid>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={6}
        maxW="880px"
        mx="auto"
      >
        {chipGroups.map((group) => (
          <Box
            key={group.label}
            flex="1"
            border="1px solid"
            borderColor="brand.mist"
            borderRadius="2xl"
            p={6}
            bg="brand.wash"
          >
            <Text
              fontSize="sm"
              fontWeight="600"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="brand.violet"
              mb={4}
            >
              {group.label}
            </Text>
            <Wrap spacing={2}>
              {group.items.map((item) => (
                <WrapItem key={item}>
                  <Box
                    px={3}
                    py={1.5}
                    bg="white"
                    border="1px solid"
                    borderColor="brand.mist"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="500"
                    color="brand.ink"
                  >
                    {item}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Flex>
    </SectionContainer>
  );
};

export default Stack;
