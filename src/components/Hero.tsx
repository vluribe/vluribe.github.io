import {
  SimpleGrid,
  Heading,
  Center,
  Text,
  Box,
  Image,
  ImageProps,
} from "@chakra-ui/react";
import avatarWelcome from "../images/welcomeAvatar.svg";
import lightbulbImage from "../images/lightbulb.svg";
import appstImage from "../images/apps.svg";
import searchImage from "../images/search.svg";
import webPageImage from "../images/webPage.svg";
import webCursorImage from "../images/webCursor.svg";
import SectionContainer from "./SectionContainer";

interface HeroIconProps extends ImageProps {
  top: number | string;
  left?: number | string;
  right?: number | string;
}

export const HeroIcon = ({ top, left, right, src, alt }: HeroIconProps) => (
  <Box
    boxSize="70px"
    pos="absolute"
    top={top}
    {...(right && { right })}
    {...(left && { left })}
    display={["none", "none", "none", "flex"]}
  >
    <Image src={src} alt={alt} />
  </Box>
);

const Hero = () => {
  return (
    <SectionContainer>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        alignItems="center"
        w="full"
        pt={[8, 16]}
      >
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
        <Center pos="relative">
          <HeroIcon top={40} left="0%" src={lightbulbImage} alt="lightbulb" />
          <HeroIcon top={0} left="16%" src={appstImage} alt="lightbulb" />
          <HeroIcon top={-20} left="48%" src={searchImage} alt="search" />
          <HeroIcon
            top={0}
            right="10%"
            src={webPageImage}
            alt="webpage colorfull"
          />
          <HeroIcon
            top={40}
            right="0%"
            src={webCursorImage}
            alt="webpage pink"
          />
          <Image src={avatarWelcome} alt="Welcome" mt={["8", "8", "8", "0"]} />
        </Center>
      </SimpleGrid>
    </SectionContainer>
  );
};

export default Hero;
