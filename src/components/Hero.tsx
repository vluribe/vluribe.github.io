import {
  SimpleGrid,
  Heading,
  Center,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import avatarWelcome from "../images/welcomeAvatar.svg";
import lightbulbImage from "../images/lightbulb.svg";
import appstImage from "../images/apps.svg";
import searchImage from "../images/search.svg";
import webPageImage from "../images/webPage.svg";
import webCursorImage from "../images/webCursor.svg";

const Hero = () => {
  return (
    <SimpleGrid columns={[1, 1, 1, 2]} alignItems="center" w="full" pt={[8, 16]}>
      <Center>
        <Heading fontSize={["4xl", "4xl", "6xl"]}>
          Hey there! This is Laura, and I like turning
          <Text
            bgGradient="linear(to-l, #FF0080, #AB52C5)"
            bgClip="text"
            display="inline"
            px={2}
          >
            ideas
          </Text>
          into really cool
          <Text
            bgGradient="linear(to-l, #FF0080, #AB52C5)"
            bgClip="text"
            display="inline"
            px={2}
          >
            web applications
          </Text>
        </Heading>
      </Center>
      <Center pos="relative" display={["none", "none", "none", "flex"]}>
        <Box boxSize="40px" pos="absolute" top={40} left="0%">
          <Image src={lightbulbImage} alt="lightbulb" />
        </Box>
        <Box boxSize="70px" pos="absolute" top={0} left="16%">
          <Image src={appstImage} alt="lightbulb" />
        </Box>
        <Box boxSize="70px" pos="absolute" top={-20} left="48%">
          <Image src={searchImage} alt="search" />
        </Box>
        <Box boxSize="70px" pos="absolute" top={0} right="10%">
          <Image src={webPageImage} alt="webpage colorfull" />
        </Box>
        <Box boxSize="70px" pos="absolute" top={40} right="0%">
          <Image src={webCursorImage} alt="webpage pink" />
        </Box>
        <img src={avatarWelcome} alt="Welcome" />
      </Center>
    </SimpleGrid>
  );
};

export default Hero;
