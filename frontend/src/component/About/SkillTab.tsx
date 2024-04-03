import { Heading, Grid, GridItem, Divider, List, Text } from "@chakra-ui/react";
import { devopsSkills, devSkills } from "../../data/ItemsLists";

export default function SkillsTab() {
    return (
        <>
            <Heading>Mes compétences</Heading>
            <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem colSpan={1}>
                    <Divider />
                    <List mt={2}>
                        {devopsSkills.map((skill) => (
                            <Text fontSize={'xl'} size={"sm"} key={skill}>
                                {skill}
                            </Text>
                        ))}
                    </List>
                </GridItem>
                <GridItem colSpan={1}>
                
                    <Divider />
                    <List mt={2}>
                        {devSkills.map((skill) => (
                            <Text fontSize={'xl'} size={"sm"} key={skill}>
                                {skill}
                            </Text>
                        ))}
                    </List>
                </GridItem>
            </Grid>
        </>
    )
}