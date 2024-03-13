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
} from "@chakra-ui/react";

import { professionalExperiences } from "../ItemsLists/ItemsLists"

export default function ExperiencesTab() {
    return (
        <>
            <Heading>Mon expérience professionnelle</Heading>
            <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image
                            backgroundColor={"white"}
                            src="/keyrus.svg"
                            boxSize={"60px"}
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
                    {professionalExperiences.map((pe) => (
                        <>
                            <Text mb={4} size={"sm"} key={pe}>
                                {pe}
                            </Text>
                            <Divider mb={4} mt={4} width={"20%"} />
                        </>
                    ))}
                </GridItem>
            </Grid>
        </>
    )
}
