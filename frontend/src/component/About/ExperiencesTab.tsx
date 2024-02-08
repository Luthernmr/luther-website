import {
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Flex,
    Divider,
    ListItem,
    HStack,
    StatHelpText,
    Stat,
    UnorderedList,
} from "@chakra-ui/react";
export default function ExperiencesTab() {
    return (
        <>
            <Heading>My professional experience</Heading>
            <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image
                            backgroundColor={"white"}
                            src="./src/assets/keyrus.svg"
                            boxSize={"60px"}
                            p={2}
                            mb={2}
                        />
                        <Flex
                            flexDirection={"column"}
                            justifyContent={"space-around"}
                        >
                            <Heading size={"md"}>Keyrus</Heading>
                            <Text>DevOps Intern</Text>
                            <Stat>
                                <StatHelpText>October 2023 - april 2024</StatHelpText>
                            </Stat>
                        </Flex>
                    </HStack>
                    <Divider mb={4} />
                    <UnorderedList>
                        <ListItem mb={4}>
                            Springboard project aimed at understanding company
                            operations by simulating a customer context: implemented
                            CI/CD, Sonarqube, and created a RESTful API. This project consisted in visualizing the nuissance, 
                            sonor, polutions, on a map according to the given address in order to evaluate a property.
                        </ListItem>
                        <ListItem mb={4}>
                            Redesigned the DevOps Morning website, assisting in
                            fostering the DevOps culture within the company.
                        </ListItem>
                        <ListItem mb={4}>
                            Migrated several GitLab projects to GitHub along with
                            their CI/CD pipelines.
                        </ListItem>
                        <ListItem mb={4}>
                            <Heading size={"sm"}>FNMF :</Heading>
                            Implemented CI/CD for our client FNMF using Sonarqube
                            and Maven. Also, provided support for DevOps and CFT
                            topics in TMA.
                        </ListItem>
                        <ListItem mb={4}>
                            <Heading size={"sm"}>AESIO :</Heading>
                            Implemented CI for our client Aesio, including unit
                            tests, code analysis, test coverage with Sonarqube using
                            Maven, and image building.
                        </ListItem>
                        <ListItem mb={4}>
                            Implemented CI/CD for an internal project in React, Go,
                            and PostgreSQL, with deployment on self-hosted
                            Kubernetes.
                        </ListItem>
                        <ListItem mb={4}>
                            Deployed self-hosted, high-availability GitHub runners
                            on our Kubernetes cluster. Writing documentation.
                        </ListItem>
                        <ListItem mb={4}>
                            Implemented best practices and reorganized Git and
                            security directories at the BU data level.
                        </ListItem>
                    </UnorderedList>
                </GridItem>
            </Grid>
        </>
    )
}