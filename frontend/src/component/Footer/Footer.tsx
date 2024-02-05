import { Center, Stack, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";

export default function Footer() {
  return (
    <Center id="about" h={"100%"} w={"100%"} flexDirection={"column"}>
      <Stack
        mt={2}
        direction={"row"}
        justifyContent={"space-between"}
        spacing={6}
        alignItems={"center"}
        color={"white"}
        w={"80%"}
      >
        <Text>
          ©{new Date().getFullYear()} Luther Nemor - All rights reserved
        </Text>
        <SocialButton
          label={"Linkedin"}
          href={"https://www.linkedin.com/in/luthernmr/"}
        >
          <FaLinkedin />
        </SocialButton>
      </Stack>
    </Center>
  );
}
