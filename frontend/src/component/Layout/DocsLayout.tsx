import { Flex, VStack, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Link, Center, Heading } from "@chakra-ui/react";
import Header from './Header'; // Assurez-vous que le chemin d'importation est correct
import Footer from './Footer'; // Assurez-vous que le chemin d'importation est correct
import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import FOG from "vanta/dist/vanta.fog.min";
import { useRef, useEffect, useState } from "react";
import { fetchGithubSections } from './FetchGithubSections';
import { Section } from './FetchGithubSections';



const MainDocsNav = () => {
  const location = useLocation(); // Hook pour obtenir l'URL actuelle
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSections = await fetchGithubSections('Luthernmr', 'luther-website', 'frontend/public/docs');
      setSections(fetchedSections);
    };
    fetchData();
  }, []);
  return (
    <Flex
      minWidth="20em"
      maxWidth="20em"
      height="100%"
      flexGrow={1}
      overflowY={"auto"}
      maxHeight={"75vh"}
      display={{ base: "none", md: "flex" }}

    >
      <Accordion allowMultiple width="100%" color={"white"} >
        {sections.map((section, index) => (
          <AccordionItem key={index} border={"none"} >
            <AccordionButton _expanded={{ color: '#0db3d0' }} >
              <Heading fontSize={"xl"} fontWeight={"bold"} as="span" flex="1" textAlign="left">
                {section.title}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <VStack align="flex-start" width={"100%"}>
                {section.links.map((link, linkIndex) => {
                  const isActive = location.pathname === link.path; // Vérifier si le lien est actif

                  // Ne pas afficher la Box si le lien n'est pas actif
                  return isActive ? (
                    <Box
                      key={linkIndex} // Ajouter une clé pour chaque Box
                      width="80%"
                      backgroundColor={"white"}
                      bg="whiteAlpha.100"
                      borderRadius={10}
                      backdropFilter="auto"
                      backdropBlur="1px"
                      border={"1px solid"}
                      borderColor={"whiteAlpha.300"}
                      padding={2}
                      ml={5}

                    >
                      <Link
                        as={RouterLink}
                        to={link.path}
                        width={"80%"}
                        color={"#0db3d0"}
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ) : (
                    // Si le lien n'est pas actif, afficher seulement le Link
                    <Link
                      key={linkIndex}
                      as={RouterLink}
                      to={link.path}
                      width={"80%"}
                      padding={2}
                      ml={5}
                      color={"white"} // Ajustez la couleur du lien ici si nécessaire
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  )
}




const DocsLayout = () => {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x1b1b1b,
          midtoneColor: 0x373737,
          lowlightColor: 0x787878,
          baseColor: 0x111111,
          blurFactor: 0.84,
          speed: 2,
          zoom: 2,
        })
      );
    }
  }, [vantaEffect]);


  return (
    <Center ref={myRef} width={"100%"}>
      <Flex
        minHeight="100vh"
        flexDirection="column"
        w={{ base: "95%", md: "95%" }}

      >
        <Header />

        <Flex flexDirection="row" flexGrow={1}  >
          <MainDocsNav />
          <Box
            overflowY="auto" // Permet le défilement dans la partie droite
            flexGrow={1} // Prend tout l'espace restant
            maxHeight="78vh" // Limite la hauteur pour que le défilement fonctionne
            display="flex"
            flexDirection="column"
            height={"100%"}
            borderRadius={8}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            backdropBlur="1px"

          >
            <Box flexGrow={1} overflowY="auto" >
              <Outlet />
            </Box>
          </Box>
        </Flex>

        <Footer />
      </Flex>
    </Center>
  );
};

export default DocsLayout;
