import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
  children: ReactNode;
}

const SectionContainer = ({ children, ...props }: Props) => (
  <Box as="section" my={20} maxWidth={"1600px"} w="full" m="auto" {...props}>
    {children}
  </Box>
);

export default SectionContainer;
