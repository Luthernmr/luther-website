import { Flex, Heading, Box, Text, Image, Divider, Highlight } from "@chakra-ui/react";

export default function AboutTab() {

    return (
        <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            maxW={"100%"}
            h={"100%"}
        >
            <Box width={{ base: "100%", xl: "50%" }}>
                <Heading>DevOps</Heading>
                <Divider mb={4} />

                <Box align={'justify'} fontSize={{ base: 'md', sm: 'xl' }}>
                    <Text mb={2}>
                        <Highlight
                            query={['Luther']}
                            styles={{ px: '2', py: '0', rounded: 'full', bg: 'white' }}
                        >
                            Salut, je m'appelle Luther
                        </Highlight>
                    </Text>
                    <Text mb={6}>
                        Après avoir acquis de solides compétences en développement, je me suis tourné vers le DevOps.
                    </Text>
                    <Text mb={6}>
                        Mon parcours m'a permis d'acquérir de nouvelles compétences dans la mise en œuvre des pratiques DevOps pour améliorer la collaboration et l'efficacité au sein des équipes de développement.
                    </Text>
                    <Text mb={6}>

                        Je suis motivé par les défis techniques et j'aime travailler dans des environnements dynamiques où l'innovation est encouragée.
                    </Text>
                    <Text mb={6}>

                        De plus, j'ai toujours soif d'apprendre et de me former pour rester accroché dans un monde où le numérique évolue à une vitesse exponentielle.
                    </Text>
                </Box>
            </Box>
            <Image src="/pdp.png" objectFit={"cover"} display={{ base: "none", xl: "block" }} />
        </Flex >
    )
}