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

                    <Text fontSize={"xl"}>
                        <Text mb={2}>
                        <Highlight
                            query={['Luther']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'white' }}
                        >
                        Hi, my name is Luther . 
                        </Highlight>
                        </Text>
                        <Highlight
                            query={['new skills', 'learning', 'balance', 'motivated', 'improve', 'training']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'white' }}
                        >
                            After acquiring solid skills in development, I turned to DevOps, where I find a perfect balance between development and operations. My career path has enabled me to acquire new skills in implementing DevOps practices to improve collaboration and efficiency within development teams. I'm motivated by technical challenges and enjoy working in dynamic environments where innovation is encouraged.
                            What's more, I still have a thirst for learning and training to keep me hooked in a world where digital is evolving at exponential speed.
                        </Highlight>
                    </Text>
                </Box>
                <Image src="/pdp0.png" boxSize={"50%"} />
            </Flex>
        </>
    )
}