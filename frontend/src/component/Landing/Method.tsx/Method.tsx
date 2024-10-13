import { Box, Flex, Text, VStack, Grid, GridItem, Heading, Tooltip, Link, HStack, Tag, Image, Center } from "@chakra-ui/react";
import CustomBox from "../../CustomComponent/CustomBox";
import CustomChildBox from "../../CustomComponent/CustomChildBox";
import { Link as RouterLink } from "react-router-dom";

const ProjectGanttStep = () => {
  const step = [
    { title: "Prise de contact 📞", step: "Démarrage", hoverText: "Directement sur Calendly", link: "#calendly" },
    { title: "Étude des besoins et cadrage", step: "Étape 1" },
    { title: "Devis détaillé et POC", step: "Étape 1", hoverText: "POC = Preuve de concept" },
    { title: "Planification ⏰", step: "Étape 2", hoverText: "Un projet bien organisé est la clé de la réussite" },
    { title: "Mise en œuvre 👨‍🍳", step: "Étape 3", hoverText: "C'est parti pour faire chauffer les neurones" },
    { title: "Tests et validation ✅", step: "Étape 4", hoverText: "Pour un projet de qualité" },
    { title: "Livraison et formation 🎉", step: "Fin" },
    { title: "Suivi et support ⛑️", step: "Fin", hoverText: "Génial, le support est garanti 3 mois ! 🎉" },
  ];

  const stepLabels = [
    { label: "Démarrage",  title: "Prise de contact", description: "Prenez rendez-vous sur Calendly. Lors de cet échange, nous discutons de votre projet, de vos objectifs et de vos besoins spécifiques pour adapter mes propositions à vos enjeux.", img : "/demarrage.png" },
    { label: "Étape 1",   title: "Devis détaillé et POC", description: "Après avoir défini les grandes lignes du projet, j’analyse vos besoins techniques et fonctionnels, puis je propose un devis clair avec phases, délais et coûts. Un POC peut être inclus pour tester la faisabilité.", img : "/step_1.png"  },
    { label: "Étape 2", title: "Planification", description: "Nous définissons ensemble un calendrier précis avec des jalons et des livrables. Une gestion proactive garantit la transparence et le respect des délais et du budget.", img : "/step_2.png"  },
    { label: "Étape 3", title: "Mise en œuvre", description: "Phase de réalisation où je travaille de manière itérative, vous fournissant des points d'avancement réguliers et intégrant vos retours.", img : "/step_3.png"  },
    { label: "Étape 4",  title: "Tests et validation", description: "Avant la livraison, une série de tests rigoureux est effectuée pour garantir la qualité, la performance, la sécurité et la conformité aux spécifications.", img : "/step_4.png"  },
    { label: "Fin",title: "Livraison et support", description: "Après validation, la solution est déployée avec des sessions de formation si nécessaire. Un suivi de 3 mois est garanti pour assurer le bon fonctionnement, avec un support technique pour les évolutions.", img : "/end.png"  },
  ];

  type Step = { title: string; step: string; hoverText?: string, link?: string, img?: string };

  const groupedSteps = step.reduce<Array<Step[]>>((acc, phase) => {
    const index = stepLabels.map(item => item.label).indexOf(phase.step);

    if (index !== -1) {
      if (!acc[index]) {
        acc[index] = [];
      }
      acc[index].push(phase);
    }
    return acc;
  }, []);


  return (
    <Flex flexDirection={"column"}>
      <Center p={{ base: 1, lg: 10 }}>
        <Heading>Ma méthode de fonctionnement</Heading>
      </Center>
      <CustomBox height="100%" display={{ base: "none", lg: "grid" }}>
        <VStack align="stretch" >
          <Flex justifyContent="space-between">
            {stepLabels.map((item, index) => (
              <Box key={index} w="100%" textAlign="center" borderInline="1px solid" borderColor={"whiteAlpha.300"} h={"100%"}>
                <Heading fontSize="lg" fontWeight={"normal"}>{item.label}</Heading>
              </Box>
            ))}
          </Flex>

          <Grid templateColumns="repeat(6, 1fr)" templateRows={"repeat(6, 1fr)"} gap={1} alignItems={"end"} mt={3}>
            {groupedSteps.map((group, rowIndex) => (
              <GridItem colSpan={1} rowSpan={rowIndex + 1} key={rowIndex}>
                <VStack width={"100%"} spacing={1} h={"100%"}>
                  {group.map((phase, index) => (
                    <CustomChildBox
                      w="100%"
                      h="2em"
                      key={index}
                      p={0}
                      borderRadius="md"
                      boxShadow="md"
                      transition={"ease-in-out 0.2s"}
                      _hover={{
                        backdropFilter: "auto ",
                        backdropBlur: "100px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        color: "black",
                        cursor: "pointer"
                      }}
                    >
                      <Link
                        as={RouterLink}
                        to={phase?.link || "#test"}
                      >
                        <Tooltip placement='top' label={phase.hoverText} key={index} height={"100%"} bg={"#0db3d0"} color={"white"} borderRadius={"full"}>
                          <Text p={1} fontSize={"xs"} width={"100%"} h={"100%"}>{phase.title}</Text>
                        </Tooltip>
                      </Link>
                    </CustomChildBox>
                  ))}
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </CustomBox>

      <HStack spacing={4} mt={{ base: 1, lg: 20 }} wrap="wrap" width={"100%"}>
        <Center flexWrap={"wrap"}>
          {stepLabels.map((step, index) => (
            <CustomBox key={index} m={2} minH="100%" h={"sm"}>
              <Flex
                maxW="2xs"
                h={"100%"}
                bg={"none"}
                color={"white"}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Tag bg={"white"}>{step.label}</Tag>
                <Flex mt={3} flexDirection={"column"} justifyContent={"space-between"} >
                  <Heading fontSize={"md"}>{step.title}</Heading>
                  <Text fontSize={"sm"} m={1}>
                    {step.description}
                  </Text>
                </Flex>
                </Box>
                <Image
                  src={step.img}
                  alt="Illustration"
                  borderRadius="md"
                />
              </Flex>
            </CustomBox>
          ))}
        </Center>
      </HStack>
    </Flex>
  );
};

export default ProjectGanttStep;
