import { Center, Flex, HStack, Link, Text, Image, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, VStack, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SocialButton from "../SocialButton";
import MaltButton from "../MaltButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { fetchGithubSections } from './FetchGithubSections';
import { useState, useEffect } from "react";
import { Section } from './FetchGithubSections';

interface HeaderProps {
  onOpen?: () => void
  onClose?: () => void
}
const MainNav: React.FC<HeaderProps> = () => {
  const location = useLocation();

  useEffect(() => {
    // Vérifiez si l'URL contient l'ancre #calendly
    if (location.hash === '#calendly') {
      const element = document.getElementById('calendly');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <HStack
      backgroundColor={"white"}
      bg="whiteAlpha.100"
      borderRadius={10}
      backdropFilter="auto"
      backdropBlur="1px"
      padding={2}
      paddingLeft={{ base: "3", md: "10" }}
      paddingRight={{ base: "3", md: "10" }}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      spacing={{ base: "2", md: "8" }}
      display={{ base: "none", md: "flex" }}
    >
      <Link display={{ base: "none", md: 'flex' }} as={RouterLink} to="/">ACCUEIL</Link>
      <Link display={{ base: "none", md: 'flex' }} as={RouterLink} to="/#calendly">RÉSERVER UN CRÉNEAU</Link>
      <Link display={{ base: "none", md: 'flex' }} as={RouterLink} to="/docs">DOCS</Link>
      <Link display={{ base: "none", md: 'flex' }} href={"https://www.linkedin.com/in/luthernmr-devops-cloud-fullstack-developpeur-cicd/"} isExternal>CONTACT</Link>
      <MaltButton
        label={"Malt"}
        href={"https://www.malt.fr/profile/luthernemor"}
      >
        <Image src="/logo-malt.png" />
      </MaltButton>
      <SocialButton
        label={"Linkedin"}
        href={"https://www.linkedin.com/in/luthernmr-devops-cloud-fullstack-developpeur-cicd/"}
      >
        <FaLinkedin />
      </SocialButton>
      <SocialButton
        label={"Github"}
        href={"https://github.com/Luthernmr"}
      >
        <FaGithub />
      </SocialButton>
    </HStack>
  )
}

const MobileDocsNav: React.FC<HeaderProps> = ({ onClose }) => {
  const location = useLocation(); // Hook pour obtenir l'URL actuelle
  const [sections, setSections] = useState<Section[]>([]);
  useEffect(() => {
    // Vérifiez si l'URL contient l'ancre #calendly
    if (location.hash === '#calendly') {
      const element = document.getElementById('calendly');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSections = await fetchGithubSections('Luthernmr', 'luther-website', 'frontend/public/docs');
      setSections(fetchedSections);
    };
    fetchData();
  }, []);
  return (
    <Flex display={{ base: "flex", md: "none" }} mt={5}>
      <Accordion allowMultiple width="100%" color={"black"} >
        {sections.map((section, index) => (
          <AccordionItem key={index} border={"none"} >
            <AccordionButton _expanded={{ color: '#0db3d0' }} >
              <Text fontSize={"xl"} fontWeight={"bold"} as="span" flex="1" textAlign="left">
                {section.title}
              </Text>
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
                        onClick={onClose}
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
                      onClick={onClose}
                      color={"black"} // Ajustez la couleur du lien ici si nécessaire
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

const MobileNav: React.FC<HeaderProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <HamburgerIcon boxSize={8} onClick={onOpen} transition={"ease-in-out 0.2s"} _hover={{ opacity: "50&%", boxSize: "5" }} />
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton transition={"ease-in-out 0.2s"} _hover={{ opacity: "50&%", boxSize: "2" }} />
          <DrawerHeader fontWeight={"sm"}>NEMOR LUTHER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={10}>
              <Link as={RouterLink} to="/">ACCUEIL</Link>
              <Link as={RouterLink} to="/#calendly" onClick={onClose}>RÉSERVER UN CRÉNEAU</Link>
              <Link as={RouterLink} to="/docs">DOCS</Link>
              <Link href={"https://www.linkedin.com/in/luthernmr-devops-cloud-fullstack-developpeur-cicd/"} isExternal>CONTACT</Link>
              <HStack>

                <MaltButton
                  label={"Malt"}
                  href={"https://www.malt.fr/profile/luthernemor"}
                >
                  <Image src="/logo-malt.png" />
                </MaltButton>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/in/luthernmr-devops-cloud-fullstack-developpeur-cicd/"}
                >
                  <FaLinkedin />
                </SocialButton>
                <SocialButton
                  label={"Github"}
                  href={"https://github.com/Luthernmr"}
                >
                  <FaGithub />
                </SocialButton>
              </HStack>
            </VStack>
            <MobileDocsNav onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}




const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  return (
    <Center h="15vh">
      <Flex
        h={"100%"}
        color={"white"}
        flexDirection={"row"}
        minW={{ base: "90%", md: "100%" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        opacity={0.9}
      >
        <RouterLink to="/">

          <Text align={"center"} fontSize={{ base: "xl", md: "2xl" }} fontWeight={"light"}>
            LUTHER NEMOR
          </Text>
        </RouterLink>

        <MainNav onOpen={onOpen} />
        <MobileNav onOpen={onOpen} />
      </Flex>
    </Center>
  );
}

export default Header;
