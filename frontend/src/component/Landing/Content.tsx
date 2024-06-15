import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperiencesTab from "../About/ExperiencesTab"
import SkillsTab from "../About/SkillTab"
import EducationTab from "../About/EducationTab"
import AboutTab from "../About/AboutTab"

const boxContent = [
  {
    heading: "Solution Cloud",
    text: "Propulsez votre projet avec mes services de cloud engineering spécialisés sur AWS. Bénéficiez d'une expertise personnalisée pour concevoir, déployer et gérer votre infrastructure cloud avec efficacité et fiabilité.",
    img: "/test"
  },
  {
    heading: "Developpement",
    text: "Nous concevons des solutions web sur mesure, adaptées à vos besoins, pour répondre efficacement à vos défis en ligne. Notre expertise vous assure des résultats fiables et performants.",
    img: "/test"
  },
  {
    heading: "Devops",
    text: "Accélérez la livraison logicielle tout en leurs assurant la stabilité et fiabilité grâce à notre approche axée sur l'automatisation des processus, l'intégration continue, le déploiement continu et la surveillance permanente. Favorisez une collaboration optimale entre les équipes de développement et d'exploitation pour des résultats plus rapides et efficaces.",
    img: "/test"
  },

]

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
    <Center id="about" w={"100%"} flexDirection={"column"} mt={10}>
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
          border={"1px solid"}
          borderColor={" whiteAlpha.100"}
          color={"white"}
          w={"95%"}
          maxH={"80vh"}
          maxW={{ base: "95%", md: "80%" }}
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
          <SimpleGrid columns={2} spacing={10} padding={4}>
            {boxContent.map((content, index) => (
              <Box
                key={index}
                p={5}
                boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                bg="whiteAlpha.100"
                borderRadius={"20px"}
                backdropFilter="auto"
                backdropBlur="15px"
                border={"1px solid"}
                borderColor={" whiteAlpha.100"}
                transition={"ease-in-out 0.3s"}
                _hover={{
                  backdropFilter: "auto ", 
                backdropBlur:"50px",

                  borderRadius: "10px"

                }}
                color={"white"} height='100%'>
                <Heading>{content.heading}</Heading>
                <Text>{content.text}</Text>
                <Divider mt={1} mb={1}/>
                <Flex justifyContent={"space-between"}>
                <Text fontSize='sm' color={"white"} opacity={"50%"}>En savoir plus</Text>
                <Text fontSize='sm' color={"white"} opacity={"50%"}>AWS</Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
      {/* <Tabs
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
          </Tabs> */}
    </Center>
  );
}
