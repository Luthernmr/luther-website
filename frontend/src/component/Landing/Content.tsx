import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const boxContent = [
  {
    heading: "Solution Cloud",
    text: "Optimisez / Migrez votre infrastructure avec nos solutions cloud flexibles et évolutives. Bénéficiez de la sécurité, de la performance et d'une haute disponibilité. Réduisez les coûts opérationnels et augmentez l'efficacité en tirant parti de la puissance du cloud pour soutenir votre croissance.",
    img: "/test",
    stack: ["AWS", "Kubernetes"]
  },
  {
    heading: "Developpement",
    text: "Créez des sites web performants et intuitifs. Conception d'interfaces utilisateur attrayantes et fonctionnelles. Assurez une expérience utilisateur optimale sur tous les appareils avec des solutions web réactives et robustes.",
    img: "/test",
    stack: ["TypeScript / React", "NestJs"]
  },
  {
    heading: "Devops",
    text: "Accélérez la livraison logicielle tout en leurs assurant la stabilité et fiabilité grâce à notre approche axée sur l'automatisation des processus, l'intégration continue, le déploiement continu et la surveillance permanente. Favorisez une collaboration optimale entre les équipes de développement et d'exploitation pour des résultats plus rapides et efficaces.",
    img: "/test",
    stack: ["GitLab", "Github Actions", "Docker"]
  },
  {
    heading: "Monitoring",
    text: "Surveillez en permanence vos systèmes et processus pour garantir leur bon fonctionnement. Identifiez et corrigez rapidement les anomalies grâce au monitoring.",
    img: "/test",
    stack: ["Grafana", "CloudWatch"]
  }


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
          <SimpleGrid columns={2} spacing={5} padding={5}>
            {boxContent.map((content, index) => (
              <Flex
                justifyContent={"space-between"}
                flexDirection={"column"}
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
                  backdropBlur: "50px",

                  borderRadius: "10px"

                }}
                color={"white"} height='100%'>
                <Box>
                  <Heading>{content.heading}</Heading>
                  <Text>{content.text}</Text>
                </Box>
                <Flex justifyContent={"space-between"} flexDirection={"column"}>
                  <Divider mt={5} mb={2} />
                  <Flex justifyContent={"space-between"}>

                    <Text fontSize='sm' color={"white"} opacity={"50%"}>En savoir plus</Text>
                    <HStack alignItems={"end"}>
                      <Text fontSize='sm' color={"white"} opacity={"50%"}>
                        {content.stack.join(' - ')}
                      </Text>
                    </HStack>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Center>
  );
}
