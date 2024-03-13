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

import "rotating-text/dist/index.css";

export default function Landing() {
  const expertises = [
    "Cloud Engineering",
    "DevOps",
    "Automation",
    "Continuous Improvement",
    "CI / CD",
    "Web Development",
  ];

  return (
    
    <Flex height="100vh" flexDirection={"column"}  width={"100%"} id="services" >
      <Center h={"20%"} minW={"80%"} 
      position={"sticky"}
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
            maxW={"70%"}
            spacing={0}
            justify={"center"}
            spacingY={4}
            >
           
              <Heading id="hone" textAlign={"center"} >Delve into my Cloud and DevOps engineering profile, showcasing achievements in digital transformation, automation, and continuous improvement.</Heading>
              
          </Wrap>
          <Center flexDirection={"column"} justifyContent={"space-around"}>
            <VStack spacing={4}>
              <Text id="content">SERVICES / EXPERTISE</Text>
              <Wrap justify="center" width={"60%"}>
                {expertises.map((expertise) => (
                  <WrapItem key={expertise}>
                    <Tag
                      id="content"
                      p={2}
                      size={"xl"}
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
            </VStack>
          </Center>
        </VStack>
      </Center>
    </Flex>
  );
}
