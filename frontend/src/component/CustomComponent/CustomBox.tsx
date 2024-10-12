import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

// Définir les types des props
interface CustomBoxProps {
  children: ReactNode; // Type pour children
  [key: string]: any; // Pour permettre d'autres props dynamiques
}

const CustomBox: React.FC<CustomBoxProps> = ({ children, ...props }) => {
  return (
    <Box
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      bg="whiteAlpha.100"
      borderRadius="20px"
      backdropFilter="auto"
      backdropBlur="15px"
      border="1px solid"
      borderColor="whiteAlpha.100"
      color="white"
      p={4}
      {...props} // Permet d'ajouter d'autres props si besoin
    >
      {children}
    </Box>
  );
};

export default CustomBox;
