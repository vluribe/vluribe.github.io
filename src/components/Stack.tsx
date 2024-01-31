import {
  Box,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  ImageProps,
  SimpleGrid,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

import reactLogo from "../images/stack/react.png";
import typescriptLogo from "../images/stack/typescript.png";
import javascriptLogo from "../images/stack/javascript.png";
import styledComponentsLogo from "../images/stack/styled-components.png";
import tailwindLogo from "../images/stack/tailwind.svg";
import chakraUILogo from "../images/stack/chakra-ui.png";
import cssLogo from "../images/stack/css.png";
import htmlLogo from "../images/stack/html.png";
import sassLogo from "../images/stack/saas.png";
import djangoLogo from "../images/stack/django.png";
import pythonLogo from "../images/stack/python.png";
import awsLogo from "../images/stack/aws-lambdas.png";
import dynamoDBLogo from "../images/stack/dynamoDB.png";
import postgresqlLogo from "../images/stack/postgresql.png";

interface StackImageProps extends ImageProps {
  size?: "lg" | "sm";
}

const StackImage = ({ src, alt, size = "lg" }: StackImageProps) => (
  <Tooltip label={alt}>
    <Image
      src={src}
      alt={alt}
      boxSize={size === "sm" ? "40px" : "80px"}
      objectFit="contain"
      borderRadius="full"
      boxShadow="md"
    />
  </Tooltip>
);

const Stack = () => {
  return (
    <Box w="full" py={20}>
      <Heading
        fontSize={["4xl", "4xl", "5xl"]}
        textAlign="center"
        bgGradient="linear(to-l, #FF0080, #AB52C5)"
        bgClip="text"
      >
        My Stack
      </Heading>
      <Flex h="full" w="full" pt={8} direction={{base: "column", md: "row"}}>
        <Box flex={1}>
          <Heading fontSize={["3xl", "3xl", "4xl"]} textAlign="center">
            Frontend
          </Heading>
          <Flex gap={5} py={8} justifyContent="center">
            <VStack justifyContent="center">
              <StackImage src={reactLogo} alt="React JS" />
              <Flex gap={2}>
                <StackImage src={typescriptLogo} alt="Typescript" />
                <StackImage src={javascriptLogo} alt="Typescript" />
              </Flex>
            </VStack>
            <SimpleGrid columns={2} gap={2}>
              <StackImage src={htmlLogo} alt="HTML" size="sm" />
              <StackImage src={cssLogo} alt="CSS" size="sm" />
              <StackImage
                src={styledComponentsLogo}
                alt="Styled Components"
                size="sm"
              />
              <StackImage src={tailwindLogo} alt="Tailwind" size="sm" />
              <StackImage src={chakraUILogo} alt="Chakra UI" size="sm" />
              <StackImage src={sassLogo} alt="Sass" size="sm" />
            </SimpleGrid>
          </Flex>
        </Box>
        <Divider
          orientation="vertical"
          h="auto"
          borderWidth={4}
          display={{ base: "none", md: "flex" }}
        />
        <Box flex={1}>
          <Heading fontSize={["3xl", "3xl", "4xl"]} pt={["8", "8", "0"]} textAlign="center">
            Backend
          </Heading>
          <Flex gap={5} py={8} justifyContent="center">
            <VStack justifyContent="center">
              <SimpleGrid columns={2} gap={2}>
                <StackImage src={pythonLogo} alt="Python" />
                <GridItem colStart={2} rowStart={2}>
                  <StackImage src={djangoLogo} alt="Django" />
                </GridItem>
              </SimpleGrid>
            </VStack>
            <SimpleGrid columns={2} gap={2} py={4}>
              <StackImage src={postgresqlLogo} alt="PostgreSQL" size="sm" />
              <StackImage src={dynamoDBLogo} alt="Amazon DynamoDB" size="sm" />
              <GridItem colSpan={2} display="flex" justifyContent="center">
                <StackImage src={awsLogo} alt="AWS Lambda" size="sm" />
              </GridItem>
            </SimpleGrid>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Stack;
