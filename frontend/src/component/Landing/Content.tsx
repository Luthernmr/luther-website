import { Box, Center, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import Header from "../Header/Header";
import SocialButton from "../SocialButton";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeInOut } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
export default function Content() {
  useEffect(() => {
    // Ciblez la boîte Chakra UI par son ID
    const scrollBox = document.getElementById("scrollBox");
    const landing = document.getElementById("landing");
    const hone = document.getElementById("hone")
    const contents = document.querySelectorAll("#content");

    const hones = document.querySelectorAll("#hone");

    // Ajoutez l'animation GSAP
    gsap.to(landing, {
      scrollTrigger: {
        markers: true, // Pour déboguer
        trigger: scrollBox,
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
      },
      backgroundColor: "black",
      duration: 1, // Couleur de fond souhaitée
    });
    contents.forEach((content) => {
      gsap.to(content, {
        scrollTrigger: {
          markers: true, // Pour déboguer
          trigger: content,
          start: "top 10%",
          end: "bottom top",
          scrub: 2,
        },
        opacity: 0,
        scale: 0.95,
        
        duration: 1.5, // Couleur de fond souhaitée
      });
    });
    hones.forEach((character, index) => {
        gsap.to(character, {
            scrollTrigger: {
            trigger: character,
            start: `top 30%-=${1.8 * index}`,
            end: "bottom top",
            scrub: 1,
            
            },
            ease: "power4.inOut",
            y: `-100-=${5 * index}`,
            rotateX: 90,
            x: -20, 
            scale: 0,
            opacity: 0,
            duration: 0.5,
        });
        index+= 1

    } )

  }, []);

  return (
    <Center id="scrollBox" h={"100%"} w={"100%"} flexDirection={"column"}>
      <VStack overflowX={"auto"} w={"80%"} h={"100%"} spacing={200}>
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          bg="whiteAlpha.100"
          borderRadius={"20px"}
          backdropFilter="auto"
          backdropBlur="15px"
          color={"white"}
          h={"80vh"}
          minW={"100%"}
        >
          hello
        </Box>
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          bg="whiteAlpha.100"
          borderRadius={"20px"}
          backdropFilter="auto"
          backdropBlur="15px"
          color={"white"}
          h={"80vh"}
          minW={"100%"}
        >
          hello
        </Box>
      </VStack>
      <Stack
        mt={2}
        direction={"row"}
        justifyContent={"space-between"}
        spacing={6}
        alignItems={"center"}
        color={"white"}
        w={"80%"}
      >
        <Text>
          ©{new Date().getFullYear()} Luther Nemor - All rights reserved
        </Text>
        <SocialButton
          label={"Linkedin"}
          href={"https://www.linkedin.com/in/luthernmr/"}
        >
          <FaLinkedin />
        </SocialButton>
      </Stack>
    </Center>
  );
}
