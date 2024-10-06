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
  Box
} from "@chakra-ui/react";
import Header from "../Layout/Header";
import MeetingButton from './Accessibility/MeetingButton'

import "rotating-text/dist/index.css";
import Headband from "./Headband";
import FOG from "vanta/dist/vanta.fog.min";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Layout/Footer";
import Content from "./Content";

gsap.registerPlugin(ScrollTrigger);

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

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const otherRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: otherRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xd9ff,
          midtoneColor: 0x278fbb,
          lowlightColor: 0x48bdd7,
          baseColor: 0x884a4,
          blurFactor: 0.84,
          speed: 3,
          zoom: 3,
        })
      );
    }
  });
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x1b1b1b,
          midtoneColor: 0x373737,
          lowlightColor: 0x787878,
          baseColor: 0x111111,
          blurFactor: 0.84,
          speed: 2,
          zoom: 2,
        })
      );
    }
    gsap.to("#test", {
      scrollTrigger: {
        trigger: "#test",
        start: "40% 70%",
        end: "70% 60%",
        scrub: 1,
      },
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
    });
  }, [vantaEffect]);

  return (
    <>
      <Box id="test" position={"absolute"} minH={"100%"} width={"100%"} zIndex={1} ref={otherRef}></Box>



      <Center ref={myRef} width={"100%"} flexDirection={"column"}>

        <Flex
          minHeight="100vh"
          flexDirection="column"
          w={{ base: "95%", md: "95%" }}

        >
          <Header onOpen={onOpen} />


          <Center height={"80%"} flexGrow={1} >
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
        <Flex flexDirection={"column"} justifyContent={"space-between"}>
          <Content />
          <Footer />
        </Flex>
      </Center>
    </>
  );
}
