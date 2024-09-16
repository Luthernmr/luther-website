import {
  Center,
  Flex,
  Heading,
  Tag,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import MeetingButton from './Accessibility/MeetingButton'

import "rotating-text/dist/index.css";
import Headband from "./Headband";

export default function Landing() {
  const expertises = [
    "Cloud Engineering",
    "Monitoring",
    "AWS",
    "DevOps",
    "Automation",
    "Kubernetes",
    "Continuous Improvement",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <Flex height="100vh" flexDirection={"column"} width={"100%"} id="services" >
      <Center h={"20%"} minW={{ base: "95%", md: "80%" }}
        position={{ base: "relative", md: "sticky" }}
        top={0}

      >
        <Header onOpen={onOpen} />
      </Center>
      <Center height={"80%"} >
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
          h={"100%"}
          color={"white"}
          spacing={1}
        >
          <Wrap
            flexDirection={"row"}
            maxW={{ base: "95%", md: "80%" }}
            spacing={0}
            justify={"center"}
            spacingY={4}
          >

            <Heading id="hone" textAlign={"center"} size={{ base: 'md', md: "xl" }} >Migrez vos applications vers le cloud et restez à la pointe de l'innovation en réduisant vos délais de mise sur le marché.</Heading>

          </Wrap>
          <Center flexDirection={"column"} justifyContent={"space-around"}>
            <VStack spacing={4}>
              <Text id="content">SERVICES / EXPERTISES</Text>
              <Wrap justify="center" maxW={{ base: "90%", md: "60%" }} mb={4}>
                {expertises.map((expertise) => (
                  <WrapItem key={expertise}>
                    <Tag
                      id="content"
                      p={2}
                      size={{ base: "sm", xl: "xl" }}
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
              <MeetingButton isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            </VStack>

          </Center>
        </VStack>
      </Center>
      <Headband />
    </Flex>
  );
}
