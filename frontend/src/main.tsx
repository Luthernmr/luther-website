import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/jetbrains-mono';
import '@fontsource-variable/overpass';
import '@fontsource-variable/nunito';
import '@fontsource/syncopate';
import AnimatedCursor from "react-animated-cursor"

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
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AnimatedCursor
  innerSize={3}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '1px solid var(--cursor-color)'
  }}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
/>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
