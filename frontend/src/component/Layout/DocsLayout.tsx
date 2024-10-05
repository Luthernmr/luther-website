import { Flex, Center, VStack, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, Divider, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from './Header'; // Assurez-vous que le chemin d'importation est correct
import Footer from './Footer'; // Assurez-vous que le chemin d'importation est correct
import { Link as RouterLink } from "react-router-dom";

const sections = [
  {
    title: 'Security',
    links: [
      { name: 'oidc', path: '/docs/security/oidc' },
    ],
  },
];

const DocsLayout = () => {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      backgroundColor="#0db3d0"

      width="100%"
    >
      <Center
        h="10vh"
        backgroundColor="#0db3d0"
        minW={{ base: "95%", md: "80%" }}
      >
        <Header />
      </Center>

      <Flex flexDirection="row" flexGrow={1}>
        <Flex
          minWidth="30em"
          maxWidth="30em"
          height="100%"
          flexGrow={1}

          borderRight={"1px solid gray"}
        >
          <Accordion allowMultiple width="100%" paddingInline={3} color={"white"}>
            {sections.map((section, index) => (
              <AccordionItem key={index}>
                  <AccordionButton>
                    <Text fontSize={"xl"} fontWeight={"bold"} as="span" flex="1" textAlign="left">
                      {section.title}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel >
                  <VStack align="flex-start">
                    {section.links.map((link, linkIndex) => (
                      <RouterLink key={linkIndex} to={link.path} >
                        <li>
                          {link.name}
                        </li>
                      </RouterLink>
                    ))}
                    
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>

        <Box
          overflowY="auto" // Permet le défilement dans la partie droite
          flexGrow={1} // Prend tout l'espace restant
          maxHeight="90vh" // Limite la hauteur pour que le défilement fonctionne
          display="flex"
          flexDirection="column"
          height={"100%"}
        >
          <Box flexGrow={1} overflowY="auto"> {/* Conteneur défilable pour le contenu */}
            <Outlet />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default DocsLayout;
