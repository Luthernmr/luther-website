import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Content() {
  useEffect(() => {
    // Ciblez la boîte Chakra UI par son ID
    const contents = document.querySelectorAll("#content");

    const hones = document.querySelectorAll("#hone");

    // Ajoutez l'animation GSAP

    gsap.to("#preview", {
      scrollTrigger: {
        trigger: "#preview",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
      y: "100",
      height: "80vh",
      width: "80%",
    });

    contents.forEach((content) => {
      gsap.to(content, {
        scrollTrigger: {
          trigger: content,
          start: "top 10%",
          end: "bottom top",
          scrub: 2,
        },
        opacity: 0,
      });
    });

    hones.forEach((character, index) => {
      gsap.to(character, {
        scrollTrigger: {
          trigger: character,
          start: `top 45%-=${1.8 * index}`,
          end: "bottom top",
          scrub: 1,
        },
        ease: "power4.inOut",
        y: `-100-=${5 * index}`,
        rotateX: 90,
        x: -20,
        scale: 0,
        opacity: 0,
      });
      index += 1;
    });
  }, []);

  return (
    <Center id="about" h={"100%"} w={"100%"} flexDirection={"column"}>
      <VStack
        overflowX={"auto"}
        w={"100%"}
        minH={"100vh"}
        justifyContent={"top"}
        id="box-justify"
      >
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          bg="whiteAlpha.100"
          borderRadius={"20px"}
          backdropFilter="auto"
          backdropBlur="15px"
          color={"white"}
          h={"10vh"}
          w={"10%"}
          minW={"10%"}
          id="preview"
          overflow={"hidden"}
        >
          <Tabs
            variant="soft-rounded"
            colorScheme="brand"
            color={"white"}
            width={"100%"}
            size={"sm"}
            h={"100%"}
          >
            <TabList padding={4}>
              <Tab color={"white"}>About me</Tab>
              <Tab color={"white"}>Skills</Tab>
              <Tab color={"white"}>Experiences</Tab>
              <Tab color={"white"}>Eductation</Tab>
            </TabList>
            <TabPanels h={"100%"} padding={4}>
              <TabPanel>
                <Flex
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  maxW={"100%"}
                  h={"100%"}
                >
                  <Box width={"50%"}>
                    <Heading>Hello ça swing ?</Heading>
                    <Text>I am luther</Text>
                  </Box>
                  <Image src="./src/assets/pdp0.png" boxSize={"50%"} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Heading>My skills</Heading>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Center>
  );
}
