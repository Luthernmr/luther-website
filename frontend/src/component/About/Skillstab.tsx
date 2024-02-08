import { Heading, Grid, GridItem, Divider, List, Text } from "@chakra-ui/react";
import { devopsSkills, devSkills } from "../ItemsLists/ItemsLists";

export default function SkillsTab() {
    return (
        <>
            <Heading>My skills</Heading>
            <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <Heading size={"md"} mb={2}>
                        DevOps
                    </Heading>
                    <Divider />
                    <List mt={2}>
                        {devopsSkills.map((skill) => (
                            <Text size={"sm"} key={skill}>
                                {skill}
                            </Text>
                        ))}
                    </List>
                </GridItem>
                <GridItem colSpan={1}>
                    <Heading size={"md"} mb={2}>
                        Development{" "}
                    </Heading>
                    <Divider />
                    <List mt={2}>
                        {devSkills.map((skill) => (
                            <Text size={"sm"} key={skill}>
                                {skill}
                            </Text>
                        ))}
                    </List>
                </GridItem>
            </Grid>
        </>
    )
}