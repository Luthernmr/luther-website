import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";

const Header = ({ onOpen }) => {
  return (
    <Flex
      h={"100%"}
      color={"white"}
      flexDirection={"row"}
      minW={{ base:"90%", md:"80%"}}
      justifyContent={"space-between"}
      alignItems={"center"}
      opacity={0.9}
    >
      <Text align={"center"} fontSize={"2xl"} fontWeight={"light"}>
        LUTHER NEMOR
      </Text>
      <HStack
        backgroundColor={"white"}
        bg="whiteAlpha.100"
        borderRadius={"15px"}
        backdropFilter="auto"
        backdropBlur="1px"
        padding={2}
        paddingLeft={{base:"3", md:"10"}}
        paddingRight={{base:"3", md:"10"}}
        border={"1px solid"}
        borderColor={"whiteAlpha.100"}
        spacing={{base:"3", md:"8"}}
        
      >
        <Link display={{ base: "none", md: 'flex' }} href={"#services"}>ACCUEIL</Link>
        <Link display={{ base: "none", md: 'flex' }} onClick={onOpen}>RÉSERVER UN CRÉNEAU</Link>
        <Link display={{ base: "none", md: 'flex' }} href={"https://www.linkedin.com/in/luthernmr/"} isExternal>CONTACT</Link>
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
