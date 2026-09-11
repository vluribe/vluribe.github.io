import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      pink: "#FF0080",
      violet: "#AB52C5",
      deep: "#5B2A86",
      ink: "#2A1838",
      wash: "#F6EEFA",
      mist: "#E8D5F2",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

export default theme;
