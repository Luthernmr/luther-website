import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/jetbrains-mono';
import '@fontsource-variable/overpass';
import '@fontsource-variable/nunito';
import '@fontsource/syncopate';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#f1f1f1',
      200: '#f1f1f1'
    },
    whity: {
      500: "#e2e8f0", // Remplacez 'yourTagColor' par la couleur que vous souhaitez pour le tag
    },
  },
  fonts: {
    heading: `'Overpass Variable', sans-serif`,
  },
  components: {
    Tag: {
      baseStyle: {
        outlineColor: 'white',
      },
    },
    Box: {
      variants: {
        custom: {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          bg: "whiteAlpha.100",
          borderRadius: "20px",
          backdropFilter: "auto",
          backdropBlur: "15px",
          border: "1px solid",
          borderColor: "whiteAlpha.100",
          color: "white",
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
