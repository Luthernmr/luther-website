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
  Divider,
  List,
  ListItem,
  HStack,
  StatHelpText,
  Stat,
  UnorderedList,
  Kbd,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const devopsSkills = [
  "CI / CD",
  "GitHub Actions / GitLab CI",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "Shell",
  "Scripting",
];
const devSkills = [
  "Javascript",
  "Typescript",
  "React",
  "Node",
  "Express",
  "NestJS",
  "C++",
  "C",
  "HTML",
  "CSS",
  "ChakraUI",
  "PostgreSQL",
  "MySQL",
  "REST",
  "WebSockets",
  "SocketIO",
];

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
          overflow={"auto"}
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
              <Tab color={"white"}>Education</Tab>
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
                    <Heading>Me</Heading>
                    <Text></Text>
                  </Box>
                  <Image src="./src/assets/pdp0.png" boxSize={"50%"} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Heading>My skills</Heading>
                <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem colSpan={1}>
                    <Heading size={"md"} mb={2}>
                      DevOps
                    </Heading>
                    <Divider />
                    <List mt={2}>
                      {devopsSkills.map((skill) => (
                        <Text size={"sm"} key={skill}>
                          {skill}
                        </Text>
                      ))}
                    </List>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Heading size={"md"} mb={2}>
                      Development{" "}
                    </Heading>
                    <Divider />
                    <List mt={2}>
                      {devSkills.map((skill) => (
                        <Text size={"sm"} key={skill}>
                          {skill}
                        </Text>
                      ))}
                    </List>
                  </GridItem>
                </Grid>
              </TabPanel>
              <TabPanel>
                <Heading>My professional experience</Heading>
                <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem colSpan={1}>
                    <HStack>
                      <Image
                        backgroundColor={"white"}
                        src="./src/assets/keyrus.svg"
                        boxSize={"60px"}
                        p={2}
                        mb={2}
                      />
                      <Flex
                        flexDirection={"column"}
                        justifyContent={"space-around"}
                      >
                        <Heading size={"md"}>Keyrus</Heading>
                        <Text>DevOps Intern</Text>
                        <Stat>
                          <StatHelpText>October 2023 - april 2024</StatHelpText>
                        </Stat>
                      </Flex>
                    </HStack>
                    <Divider mb={4}/>
                    <UnorderedList>
                      <ListItem mb={4}>
                        Springboard project aimed at understanding company
                        operations by simulating a customer context: implemented
                        CI/CD, Sonarqube, and created a RESTful API. This
                        project involved visualizing popular locations on a map
                        and implementing an intelligent search system.
                      </ListItem>
                      <ListItem mb={4}>
                        Redesigned the DevOps Morning website, assisting in
                        fostering the DevOps culture within the company.
                      </ListItem>
                      <ListItem mb={4}>
                        Migrated several GitLab projects to GitHub along with
                        their CI/CD pipelines.
                      </ListItem>
                      <ListItem mb={4}>
                        <Heading size={"sm"}>FNMF :</Heading>
                        Implemented CI/CD  for our client FNMF using Sonarqube and Maven.
                        Also, provided support for DevOps and CFT topics in TMA.
                      </ListItem>
                      <ListItem mb={4}>
                      <Heading size={"sm"}>AESIO :</Heading>
                        Implemented CI for our client Aesio, including unit
                        tests, code analysis, test coverage with Sonarqube using
                        Maven, and image building.
                      </ListItem>
                      <ListItem mb={4}>
                        Implemented CI/CD for an internal project in React, Go,
                        and PostgreSQL, with deployment on self-hosted
                        Kubernetes.
                      </ListItem>
                      <ListItem mb={4}>
                        Deployed self-hosted, high-availability GitHub runners
                        on our Kubernetes cluster.
                      </ListItem>
                      <ListItem mb={4}>
                        Implemented best practices and reorganized Git and
                        security directories at the BU data level.
                      </ListItem>
                    </UnorderedList>
                  </GridItem>
                </Grid>
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
