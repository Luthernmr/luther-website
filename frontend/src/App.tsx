import { Box, Center, Stack, extendTheme, Text } from "@chakra-ui/react";
import "./App.css";
import Header from "./component/Header";
import React, { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import { FaLinkedin } from "react-icons/fa";
import SocialButton from "./component/SocialButton";

function App() {
  
  return (
    <Center h={"100vh"} w={"100%"} backgroundColor={"#018aac"}>
      <Box
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        bg="whiteAlpha.100"
        borderRadius={"10px"}
        backdropFilter="auto"
        backdropBlur="15px"
        color={"white"}
        h={"80%"}
        w={"80%"}
      >
        <Header />
        <Stack mt={2}
          direction={"row"}
          justifyContent={"space-between"}
          spacing={6}
          alignItems={"center"}
        >
          <Text>© 2023 Luther Nemor - All rights reserved</Text>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/company/keyrus"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Box>
    </Center>
  );
}

export default App;
