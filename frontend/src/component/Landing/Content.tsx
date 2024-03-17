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
import ExperiencesTab from "../About/ExperiencesTab"
import SkillsTab from "../About/SkillTab"
import EducationTab from "../About/EducationTab"
import AboutTab from "../About/AboutTab"

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
    <Center id="about" w={"100%"} flexDirection={"column"}>
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
          w={"95%"}
          maxH={"80vh"}
          maxW={{ base:"95%", md:"80%"}}
          minH={"80vh"}
          id="preview"
          overflow={'auto'}
          css={{
            '&::-webkit-scrollbar': {
              width: '5px',
              maxHeight: '10px'
            },
            '&::-webkit-scrollbar-track': {
              marginTop: '20px',
              marginBottom: '20px',
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
            minH={"100%"}
            maxH={'100%'}
            width={"100%"}
            size={"sm"}
          >
            <TabList maxH={'20%'} p={4} >
              <Tab color={"white"}>Moi</Tab>
              <Tab color={"white"}>Skills</Tab>
              <Tab color={"white"}>Expériences</Tab>
              <Tab color={"white"}>Éducation</Tab>
            </TabList>
            <TabPanels>
              <TabPanel >
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
