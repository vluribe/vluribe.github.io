import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <ChakraProvider>
      <UnderConstruction />
    </ChakraProvider>
  );
}

export default App;
