import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
  children: ReactNode;
}

const SectionContainer = ({ children, ...props }: Props) => (
  <Box
    as="section"
    maxWidth="1600px"
    w="full"
    mx="auto"
    px={[4, 4, 8, 16]}
    py={[12, 16, 20]}
    scrollMarginTop="72px"
    {...props}
  >
    {children}
  </Box>
);

export default SectionContainer;
