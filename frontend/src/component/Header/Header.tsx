import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import SocialButton from "../SocialButton";

function Header() {
  return (
    <Flex
      h={"20%"}
      color={"white"}
      flexDirection={"row"}
      maxW={"80%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
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
        <Link  href={"#services"}>SERVICES</Link>
        <Link href={"#about"}>ABOUT</Link>
        <Link href={"#contact"}>CONTACT</Link>
        <SocialButton
          label={"Linkedin"}
          href={"https://www.linkedin.com/in/luthernmr/"}
        >
          <FaLinkedin />
        </SocialButton>
      </HStack>
    </Flex>
  );
}

export default Header;
