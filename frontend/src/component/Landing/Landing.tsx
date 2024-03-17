import {
  Center,
  Flex,
  Heading,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import DownloadButton from './DownloadButton'

import "rotating-text/dist/index.css";

export default function Landing() {
  const expertises = [
    "Cloud Engineering",
    "Mircoservices",
    "AWS",
    "DevOps",
    "Automation",
    "Continuous Improvement",
    "CI / CD",
    "Web Development",
  ];

  return (
    
    <Flex height="100vh" flexDirection={"column"}  width={"100%"} id="services" >
      <Center h={"20%"}      minW={{ base:"95%", md:"80%"}}
      position={{base:"relative", md: "sticky"}}
      top={0}

      >
      <Header />
        </Center>
      <Center height={"80%"} >
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
          h={"100%"}
          color={"white"}
          spacing={10}
        >
          <Wrap
            flexDirection={"row"}
            maxW={{ base:"95%", md:"80%"}}
            spacing={0}
            justify={"center"}
            spacingY={4}
            >
           
              <Heading id="hone" textAlign={"center"} size={{base:'md', md:"xl" }} >Plongez dans mon univers professionnel en explorant mon CV détaillé, où chaque expérience et compétence reflète mon parcours et mes ambitions. </Heading>
              
          </Wrap>
          <Center flexDirection={"column"} justifyContent={"space-around"}>
            <VStack spacing={4}>
              <Text id="content">SERVICES / EXPERTISES</Text>
              <Wrap justify="center"       maxW={{ base:"90%",md:"60%"}}  mb={4}>
                {expertises.map((expertise) => (
                  <WrapItem key={expertise}>
                    <Tag
                      id="content"
                      p={2}
                      size={{base: "sm", xl:"xl"}}
                      key={expertise}
                      borderRadius="full"
                      variant="outline"
                      colorScheme="whity"
                      color={"white"}
                      >
                      <Text>{expertise}</Text>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
                <DownloadButton/>
            </VStack>
          </Center>
        </VStack>
      </Center>
    </Flex>
  );
}
