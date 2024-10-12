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
  Link} from "@chakra-ui/react";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const boxContent = [
  {
    heading: "Solution Cloud",
    text: "Migrez votre infrastructure avec des solutions cloud flexibles et évolutives. Bénéficiez de la sécurité, de la performance et d'une haute disponibilité. Augmentez l'efficacité en tirant parti de la puissance du cloud pour soutenir votre croissance.",
    img: "/test",
    stack: ["AWS", "Terraform"]
  },
  {
    heading: "Devops",
    text: "Accélérez la livraison logicielle tout en leurs assurant la stabilité et fiabilité grâce à une approche axée sur l'automatisation des processus de livraison, l'Infrastructure as Code, le monitoring. Favorisez une collaboration optimale entre les équipes de développement et d'exploitation pour des résultats plus rapides et efficaces.",
    img: "/test",
    stack: ["GitLab", "Github Actions", "Docker", "Ansible"]
  },
  {
    heading: "Optimisation",
    text: "Améliorez l'efficacité de vos infrastructures tout en réduisant vos dépenses. Identifiez les ressources sous-utilisées, optimisez les performances et assurez une gestion intelligente des coûts pour maximiser votre retour sur investissement.",
    img: "/optimization",
    stack: ["Terraform", "Kubernetes", "Grafana", "FinOps"]
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
        overflowX={"auto"}
        w={"100%"}
        justifyContent={"top"}
        id="box-justify">
        <Box
          height={"100%"}
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          bg="whiteAlpha.100"
          borderRadius={"20px"}
          backdropFilter="auto"
          backdropBlur="15px"
          border={"1px solid"}
          borderColor={" whiteAlpha.100"}
          color={"white"}
  
         
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
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} padding={5}>
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
                  backdropBlur: "100px",
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
                    <Link>En savoir plus</Link>


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
