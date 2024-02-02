import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fonts from "./fonts";
import theme from "./theme";
import Stack from "./components/Stack";
import About from "./components/About";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Navbar />
      <Box px={16}>
        <Hero />
        <About />
        <Stack />
      </Box>
    </ChakraProvider>
  );
}

export default App;
