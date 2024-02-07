import { Heading, Grid, GridItem, HStack, Flex, Stat, StatHelpText, Divider, UnorderedList, ListItem, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function EducationTab() {
    return (

        <>
            <Heading>How i got here</Heading>
            <Grid marginTop={4} templateColumns="repeat(1, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <HStack>
                        <Image
                            backgroundColor={"white"}
                            src="./src/assets/42.svg"
                            boxSize={"60px"}
                            p={2}
                            mb={2}
                        />
                        <Flex
                            flexDirection={"column"}
                            justifyContent={"space-around"}
                        >
                            <Heading size={"md"}>42</Heading>
                            <Text>Programming school</Text>
                            <Stat>
                                <StatHelpText>November 2021 - Today</StatHelpText>
                            </Stat>
                        </Flex>
                    </HStack>
                    <HStack alignItems={"flex-start"} spacing={5}>
                        <Box width={'50%'}>
                            <Divider mb={4} />
                            <Heading size={"md"}>What is 42 ?</Heading>
                            <Text>
                                42, is a computer science teaching institution that
                                stands out for its innovative teaching method. This
                                method is primarily based on peer learning, where
                                students learn from each other, without teachers or
                                traditional courses. 42 students take part in
                                practical challenges and collaborative projects to
                                develop their programming and software development
                                skills. This approach, focused on learner autonomy and
                                creativity, makes 42 a unique institution in the IT
                                education landscape.
                            </Text>

                        </Box>
                        <Box width={'50%'}>

                            <Heading size={"md"} mt={4}>The School Projects :</Heading>
                            <UnorderedList spacing={2}>

                                <ListItem>Recode the functions of the library C.</ListItem>
                                <ListItem>Code an optimized sorting algorithm.</ListItem>
                                <ListItem>Project using multithreading/forking.</ListItem>
                                <ListItem>Realisation of a simple 2D game.</ListItem>
                                <ListItem>Recode a shell in C with some builtins.</ListItem>
                                <ListItem>Realisation of a 3D game like Wolfenstein using raycating.</ListItem>
                                <ListItem>Virtual machine realization deploying a wordpress site with Docker.</ListItem>
                                <ListItem>Code an IRC server using the TCP protocol, implement discusssiom channels, user operator and its privilege.</ListItem>
                                <ListItem>Recode somes containers c++ (map, vector, stack), code an AVL Binary Tree</ListItem>
                                <ListItem>Creation of a website using React for the frontend, Nestjs for the backend and postgresql/pgadmin for the database. Use API, MVC architecture.</ListItem>
                                <Text fontWeight={'light'}>More details on these projects are available on my github.</Text>
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