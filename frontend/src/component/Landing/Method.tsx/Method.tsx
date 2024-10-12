import { Box, Flex, Text, VStack, Grid, GridItem, Heading, Tooltip, Link, HStack, Tag, Card, CardBody, Image, Center, Stack } from "@chakra-ui/react";
import CustomBox from "../../CustomComponent/CustomBox";
import CustomChildBox from "../../CustomComponent/CustomChildBox";
import { Link as RouterLink } from "react-router-dom";

const ProjectGanttStep = () => {
  // Step du projet avec leur titre et description
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

  // Les étiquettes des étapes principales avec descriptions
  const stepLabels = [
    { label: "Démarrage", description: "Prenez rendez-vous sur Calendly. Lors de cet échange, nous discutons de votre projet, de vos objectifs et de vos besoins spécifiques pour adapter mes propositions à vos enjeux." },
    { label: "Étape 1", description: "Après avoir défini les grandes lignes du projet, j’analyse vos besoins techniques et fonctionnels, puis je propose un devis clair avec phases, délais et coûts. Un POC peut être inclus pour tester la faisabilité." },
    { label: "Étape 2", description: "Nous définissons ensemble un calendrier précis avec des jalons et des livrables. Une gestion proactive garantit la transparence et le respect des délais et du budget." },
    { label: "Étape 3", description: "Phase de réalisation où je travaille de manière itérative, vous fournissant des points d'avancement réguliers et intégrant vos retours." },
    { label: "Étape 4", description: "Avant la livraison, une série de tests rigoureux est effectuée pour garantir la qualité, la performance, la sécurité et la conformité aux spécifications." },
    { label: "Fin", description: "Après validation, la solution est déployée avec des sessions de formation si nécessaire. Un suivi de 3 mois est garanti pour assurer le bon fonctionnement, avec un support technique pour les évolutions." },
  ];

  type Step = { title: string; step: string; hoverText?: string, link?: string }; // Assurez-vous de définir le type correctement

  // Grouper les étapes par 'step' pour déterminer le placement
  const groupedSteps = step.reduce<Array<Step[]>>((acc, phase) => {
    const index = stepLabels.map(item => item.label).indexOf(phase.step);
    
    if (index !== -1) {
        if (!acc[index]) {
            acc[index] = []; // Initialiser le tableau si non existant
        }
        acc[index].push(phase); // Ajouter la phase au groupe correspondant
    }
    return acc;
}, []);

  return (
    <Flex flexDirection={"column"}>
      <Center p={10}>
        <Heading>Ma méthode de fonctionnement</Heading>
      </Center>
      <CustomBox height="100%" display={{base : "none", lg: "grid"}}>
        <VStack align="stretch" >
          {/* Lignes de la grille principale avec les step */}
          <Flex justifyContent="space-between">
            {stepLabels.map((item, index) => (
              <Box key={index} w="100%" textAlign="center" borderInline="1px solid" borderColor={"whiteAlpha.300"} h={"100%"}>
                <Heading fontSize="lg" fontWeight={"normal"}>{item.label}</Heading>
              </Box>
            ))}
          </Flex>

          {/* Diagramme des step */}
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

      {/* HStack pour les cartes avec les descriptions des étapes */}
      <HStack spacing={4} mt={20} wrap="wrap" width={"100%"}>
        <Center flexWrap={"wrap"}>
          {stepLabels.map((step, index) => (
            <CustomBox key={index} p={0} m={2}>
              <Card
                maxW='2xs'
                minH={"sm"}
                maxH={"sm"}
                bg={"none"}
                color={"white"}
                display="flex"
                flexDirection="column"
                justifyContent="space-between" // Assure que le contenu est espacé également
              >
                <CardBody flexDirection="column" > {/* Permet à la carte de croître */}
                  <Tag bg={"white"}>{step.label}</Tag>
                  <Stack spacing={1}  height={"100%"}> {/* Permet à la pile de prendre l'espace restant */}
                    <Text fontSize={"sm"} p={2}>
                      {step.description}
                    </Text>
                  </Stack>
                </CardBody>
                <Image
                  src="https://picsum.photos/600/400"
                  alt="Illustration"
                  borderRadius="md"
                  maxH="150px" // Définit une hauteur maximum pour l'image
                  padding={2}
                />
              </Card>
            </CustomBox>
          ))}

        </Center>
      </HStack>
    </Flex>
  );
};

export default ProjectGanttStep;
