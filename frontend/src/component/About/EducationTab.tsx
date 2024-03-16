import { Heading, Grid, GridItem, HStack, Flex, Stat, StatHelpText, Divider, Image, Text, Box, Link, List } from "@chakra-ui/react";
import { projects } from "../ItemsLists/ItemsLists";

export default function EducationTab() {
    return (

        <>
            <Heading>Formations</Heading>
            <Grid marginTop={4} templateColumns="repeat(1, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <HStack as={Link} href='https://42lyon.fr/' isExternal>
                        <Image
                            backgroundColor={"white"}
                            src="/42.svg"
                            boxSize={"70px"}
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
                            <Heading size={"xl"} mb={4}>Qu'est-ce que 42 ?</Heading>
                            <Text fontSize={'xl'} mb={4}>
                                42 est une institution d'enseignement en informatique qui se
                                distingue par sa méthode d'enseignement innovante.
                            </Text>
                            <Text fontSize={'xl'} mb={4}>
                                Cette méthode est principalement basée sur l'apprentissage par les pairs,
                                où les étudiants apprennent les uns des autres, sans enseignants
                                ni cours traditionnels. Les étudiants de 42 participent à
                                des défis pratiques et à des projets collaboratifs pour
                                développer leurs compétences en programmation et en développement
                                logiciel.
                            </Text>
                            <Text fontSize={'xl'} mb={4}>
                                Cette approche, axée sur l'autonomie et la créativité
                                de l'apprenant, fait de 42 une institution unique dans le
                                paysage de l'éducation en informatique.
                            </Text>

                        </Box>
                        <Box width={'50%'}>
                            <Heading size={"xl"} mb={4} mt={4}>Les projets réalisés :</Heading>
                            <List spacing={2} fontSize={'xl'}>
                                {projects.map((pe) => (
                                    <>
                                        <Text fontSize={'xl'} mb={2} size={"sm"} key={pe}>
                                            {pe}
                                        </Text>
                                        <Divider opacity={"30%"}  width={"10%"} />
                                    </>
                                ))}
                            </List>
                        </Box>
                    </HStack>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
            </Grid>
        </>
    )
}
