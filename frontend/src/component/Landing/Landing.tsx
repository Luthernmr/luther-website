import {
  Box,
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
  const pres =
    "Delve into my Cloud and DevOps engineering profile, showcasing achievements in digital transformation, automation, and continuous improvement.";
  const presTab = pres.split("");
  const expertises = [
    "Cloud Engineering",
    "DevOps",
    "Automation",
    "Continuous Improvement",
    "CI / CD",
    "Web Development",
  ];
  console.log(presTab);

  return (
    <Box height="100vh" align="center" id="services">
      <Header />
      <Center height={"80%"}>
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
            {presTab.map((text) => (
              <Heading id="hone">{text === " " ? <p>&nbsp;</p> : text}</Heading>
            ))}
          </Wrap>
          <Center flexDirection={"column"} justifyContent={"space-around"}>
            <VStack spacing={4}>
              <Text id="content">SERVICES / EXPERTISE</Text>
              <Wrap justify="center" width={"60%"}>
                {expertises.map((expertise) => (
                  <WrapItem>
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
    </Box>
  );
}
