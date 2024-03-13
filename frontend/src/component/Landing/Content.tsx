import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  ExperiencesTab  from "../About/ExperiencesTab"
import  SkillsTab  from "../About/SkillTab"
import  EducationTab  from "../About/EducationTab"
import  AboutTab  from "../About/AboutTab"

gsap.registerPlugin(ScrollTrigger);
export default function Content() {
  useEffect(() => {
    const contents = document.querySelectorAll("#content");

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

  }, []);

  return (
    <Center id="about" h={"100%"} w={"100%"} flexDirection={"column"}>
      <VStack
      h={"100%"}
      minH={"100%"}
        overflowX={"auto"}
        w={"100%"}
        justifyContent={"top"}
        id="box-justify">
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          bg="whiteAlpha.100"
          borderRadius={"20px"}
          backdropFilter="auto"
          backdropBlur="15px"
          color={"white"}
          w={"80%"}
          h={"100%"}
          minW={"80%"}
          id="preview"
          overflow={"auto"}
          css={{
            '&::-webkit-scrollbar': {
              width: '5px',
              maxHeight: '10px'
            },
            '&::-webkit-scrollbar-track': {
              marginTop: '150px',
              marginBottom: '150px',
              width: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: "white",
              borderRadius: '24px',
            },
          }}
        >
          <Tabs
            variant="soft-rounded"
            colorScheme="brand"
            color={"white"}
            width={"100%"}
            size={"sm"}
            h={"100%"}
            minH={"100%"}
          >
            <TabList padding={4}>
              <Tab color={"white"}>About me</Tab>
              <Tab color={"white"}>Skills</Tab>
              <Tab color={"white"}>Experiences</Tab>
              <Tab color={"white"}>Education</Tab>
            </TabList>
            <TabPanels h={"100%"} maxH={"80vh"} padding={4} overflowY={"auto"}>
              <TabPanel>
                <AboutTab />
              </TabPanel>
              <TabPanel>
                <SkillsTab />
              </TabPanel>
              <TabPanel>
                <ExperiencesTab />
              </TabPanel>
              <TabPanel>
                <EducationTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Center>
  );
}
