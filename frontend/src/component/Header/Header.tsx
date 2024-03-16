import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";

function Header() {
  return (
    <Flex
      h={"100%"}
      color={"white"}
      flexDirection={"row"}
      minW={"80%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      opacity={0.9}
    >
      <Text align={"center"} fontFamily={""}>
        LUTHER NEMOR
      </Text>
      <HStack
        backgroundColor={"white"}
        bg="whiteAlpha.100"
        borderRadius={"15px"}
        backdropFilter="auto"
        backdropBlur="1px"
        padding={2}
        paddingLeft={10}
        paddingRight={10}
        border={"1px solid"}
        borderColor={"whiteAlpha.400"}
        spacing={8}

      >
        <Link href={"#services"}>ACCUEUIL</Link>
        <Link href={"#about"}>À PROPOS</Link>
        <Link href={"https://www.linkedin.com/in/luthernmr/"} isExternal>CONTACT</Link>
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
      </HStack>
    </Flex>
  );
}

export default Header;
