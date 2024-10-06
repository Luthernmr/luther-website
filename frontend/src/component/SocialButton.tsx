import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function SocialButton ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) {
    return (
      <chakra.a
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={{base: 7, md :12}}
        h={{base: 7, md :12}}
        cursor={"pointer"}
        as={"a"}
        href={href}
        target="_blank"
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.600", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.a>
    );
  }
