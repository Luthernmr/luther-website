import { Heading, Grid, GridItem, HStack, Flex, Stat, StatHelpText, Divider, UnorderedList, ListItem, Image, Text, Box } from "@chakra-ui/react";

export default function EducationTab() {
    return (

        <>
            <Heading>Comment j'en suis arrivé là</Heading>
            <Grid marginTop={4} templateColumns="repeat(1, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image
                            backgroundColor={"white"}
                            src="/42.svg"
                            boxSize={"60px"}
                            p={2}
                            mb={2}
                        />
                        <Flex
                            flexDirection={"column"}
                            justifyContent={"space-around"}
                        >
                            <Heading size={"md"}>42</Heading>
                            <Text>École de programmation</Text>
                            <Stat>
                                <StatHelpText>Novembre 2021 - Aujourd'hui</StatHelpText>
                            </Stat>
                        </Flex>
                    </HStack>
                    <HStack alignItems={"flex-start"} spacing={5}>
                        <Box width={'50%'}>
                            <Divider mb={4} />
                            <Heading size={"md"}>Qu'est-ce que 42 ?</Heading>
                            <Text>
                                42 est une institution d'enseignement en informatique qui se
                                distingue par sa méthode d'enseignement innovante. Cette
                                méthode est principalement basée sur l'apprentissage par les pairs,
                                où les étudiants apprennent les uns des autres, sans enseignants
                                ni cours traditionnels. Les étudiants de 42 participent à
                                des défis pratiques et à des projets collaboratifs pour
                                développer leurs compétences en programmation et en développement
                                logiciel. Cette approche, axée sur l'autonomie et la créativité
                                de l'apprenant, fait de 42 une institution unique dans le
                                paysage de l'éducation en informatique.
                            </Text>

                        </Box>
                        <Box width={'50%'}>
                            <Heading size={"md"} mt={4}>Les Projets Scolaires :</Heading>
                            <UnorderedList spacing={2}>
                                <ListItem>Recoder les fonctions de la bibliothèque C.</ListItem>
                                <ListItem>Coder un algorithme de tri optimisé.</ListItem>
                                <ListItem>Projet utilisant le multithreading/le fork.</ListItem>
                                <ListItem>Réalisation d'un jeu simple en 2D.</ListItem>
                                <ListItem>Recoder un shell en C avec certains builtins.</ListItem>
                                <ListItem>Réalisation d'un jeu en 3D comme Wolfenstein en utilisant le raycasting.</ListItem>
                                <ListItem>Réalisation d'une machine virtuelle déployant un site wordpress avec Docker.</ListItem>
                                <ListItem>Coder un serveur IRC utilisant le protocole TCP, implémenter des canaux de discussion, des opérateurs d'utilisateurs et leurs privilèges.</ListItem>
                                <ListItem>Recoder certains conteneurs c++ (map, vector, stack), coder un arbre binaire AVL.</ListItem>
                                <ListItem>Création d'un site web en utilisant React pour le frontend, Nestjs pour le backend et postgresql/pgadmin pour la base de données. Utiliser une architecture API, MVC.</ListItem>
                                <Text fontWeight={'light'}>Plus de détails sur ces projets sont disponibles sur mon github.</Text>
                            </UnorderedList>
                        </Box>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
            </Grid>
        </>
    )
}
