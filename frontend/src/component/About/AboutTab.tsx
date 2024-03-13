import { Flex, Heading, Box, Text, Image, Divider, Highlight } from "@chakra-ui/react";

export default function AboutTab() {
    return (
        <>
            <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                maxW={"100%"}
                h={"100%"}
            >
                <Box width={"50%"}>
                    <Heading>DevOps</Heading>
                    <Divider mb={4} />

                    <Text>
                        <Text mb={2}>
                        <Highlight
                            query={['Luther']}
                            styles={{ px: '2', py: '0', rounded: 'full', bg: 'white' }}
                        >
                        Salut, je m'appelle Luther
                        </Highlight>
                        </Text>
                        <Highlight
                            query={['new skills', 'learning', 'balance', 'motivated', 'improve', 'training']}
                            styles={{ px: '2', py: '0', rounded: 'full', bg: 'white' }}
                        >
                           Après avoir acquis de solides compétences en développement, je me suis tourné vers le DevOps. Mon parcours m'a permis d'acquérir de nouvelles compétences dans la mise en œuvre des pratiques DevOps pour améliorer la collaboration et l'efficacité au sein des équipes de développement. Je suis motivé par les défis techniques et j'aime travailler dans des environnements dynamiques où l'innovation est encouragée.
                            De plus, j'ai toujours soif d'apprendre et de me former pour rester accroché dans un monde où le numérique évolue à une vitesse exponentielle.
                        </Highlight>
                    </Text>
                </Box>
                <Image src="/pdp0.png" boxSize={"50%"} />
            </Flex>
        </>
    )
}