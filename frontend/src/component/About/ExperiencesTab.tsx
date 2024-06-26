import {
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Flex,
    Divider,
    HStack,
    StatHelpText,
    Stat,
    Box,
} from "@chakra-ui/react";

import { professionalExperiences } from "../../data/ItemsLists"

export default function ExperiencesTab() {
    return (
        <Box>

            <Heading>Mon expérience professionnelle</Heading>
            <Grid marginTop={4} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={2}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image
                            backgroundColor={"white"}
                            src="/keyrus.svg"
                            boxSize={"70px"}
                            p={2}
                            mb={2}
                        />
                        <Flex
                            flexDirection={"column"}
                            justifyContent={"space-around"}
                        >
                            <Heading size={"md"}>Keyrus</Heading>
                            <Text>Stagiaire DevOps</Text>
                            <Stat>
                                <StatHelpText>Octobre 2023 - avril 2024</StatHelpText>
                            </Stat>
                        </Flex>
                    </HStack>
                    <Divider mb={4} />
                    {professionalExperiences.map((pe, index) => (
                        <Box key={index}>
                            <Text fontSize={{ base: 'md', sm: 'xl' }} mb={4} size={"sm"} key={pe}>
                                {pe}
                            </Text>
                            <Divider opacity={"30%"} mb={4} mt={4} width={"10%"} />
                        </Box>
                    ))}
                </GridItem>
            </Grid>
        </Box>
    )
}
