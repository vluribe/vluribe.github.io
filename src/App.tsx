import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fonts from "./fonts";
import theme from "./theme";
import Stack from "./components/Stack";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
