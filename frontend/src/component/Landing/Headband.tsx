import { Box, HStack, Image, Center } from "@chakra-ui/react";
import InfiniteLooper from "./InfiniteLooper";



export default function Headband() {
    const logos = ['amazon', 'terraform', 'gitlab', 'docker', 'kubernetes']

    return (
       <Center>
                <InfiniteLooper speed={20} direction="right">
                    <HStack width={"100%"} justifyContent={"space-between"} mb={10} mt={10}>
                        {logos.map((path, index) => (
                            <Box key={index} alignContent={'center'} ml={10}>
                                <Image h={"50px"} src={`/${path}-logo.png`} alt={`logo - ${index}`} />
                            </Box>
                        ))}
                    </HStack>
                </InfiniteLooper>
        </Center>
    );
}