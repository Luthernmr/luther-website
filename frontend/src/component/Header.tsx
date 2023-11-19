import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  extendTheme,
  Button,
  Center,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import ContactForm from "./Contact/ContactForm";
import Acceuil from "./Accueil/Accueil";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <Box p={10} height={"100%"}>
      <Tabs variant="soft-rounded" colorScheme="brand" height={"100%"}>
        <TabList color={"white"}>
          <Tab color={"white"}>Accueil</Tab>
          <Tab color={"white"}>À propos</Tab>
          <Tab color={"white"}>Nos services</Tab>
          <Tab color={"white"}>Contact</Tab>
        </TabList>
        <TabPanels height={"100%"}>
          <TabPanel>
            <Acceuil />
          </TabPanel>
          <TabPanel>
            <p>a propos</p>
          </TabPanel>
          <TabPanel>
            <p>Nos services</p>
          </TabPanel>
          <TabPanel height={"100%"}>
            <Center height={"100%"}>
              <ContactForm />
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Header;
