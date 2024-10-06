import { Center, HStack, Stack, Text, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";
import MaltButton from "../MaltButton";

export default function Footer() {
  return (
    <Center id="footer" h={"7vh"} w={"100%"} flexDirection={"column"} p={1}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        spacing={{base: 2, md :6}}
        alignItems={"center"}
        color={"white"}
        w="100%"
      >
        <Text fontSize={{ base : "2xs", md : "sm"}}>
          ©{new Date().getFullYear()} Luther Nemor - All rights reserved
        </Text>
        <HStack>
          <SocialButton 
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/luthernmr/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Githun"}
            href={"https://github.com/Luthernmr"}
          >
            <FaGithub />
          </SocialButton>
          <MaltButton
            label={"Malt"}
            href={"https://www.malt.fr/profile/luthernemor"}
          >
            <Image src="/logo-malt.png" />
          </MaltButton>
        </HStack>
      </Stack>
    </Center>
  );
}
