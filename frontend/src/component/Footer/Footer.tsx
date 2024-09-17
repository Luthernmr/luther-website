import { Center, HStack, Stack, Text, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";
import MaltButton from "../MaltButton";

export default function Footer() {
  return (
    <Center id="about" h={"100%"} w={"100%"} flexDirection={"column"}>
      <Stack
        mt={{ base: "5", sm: "2" }}
        direction={"row"}
        justifyContent={"space-between"}
        spacing={6}
        alignItems={"center"}
        color={"white"}
        w={{ base: "90%", md: "80%" }}
      >
        <Text>
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
