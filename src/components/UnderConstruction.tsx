import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

const UnderConstruction = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      overflow="hidden"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    >
      <Navbar />
      <Center h="full">
        <Box>
          <Heading color="RGBA(0, 0, 0, 0.64)">This site is under construction</Heading>
          <Text fontSize="md" color="RGBA(0, 0, 0, 0.64)">
            This site is currently being developed, please come back later to
            see more
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default UnderConstruction;
