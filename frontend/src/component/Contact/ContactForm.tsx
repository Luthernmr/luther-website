import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function ContactForm() {
  return (
    <HStack width={"100%"} height={'100%'}>
      <FormControl width={"100%"}>
        <VStack spacing={6}>
          <HStack width={"100%"} >
          <FormControl isRequired width={"100%"}>
              <FormLabel>Nom</FormLabel>
              <Input variant='flushed'
                _placeholder={{ color: "white", opacity: 0.5 }}
                focusBorderColor="white"
                placeholder="Nom"
              />
            </FormControl>
            <FormControl isRequired width={"100%"}>
              <FormLabel>Prénom</FormLabel>
              <Input variant='flushed'
                _placeholder={{ color: "white", opacity: 0.5 }}
                focusBorderColor="white"
                placeholder="Prénom"
              />
            </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input variant='flushed'
              type="email"
              _placeholder={{ color: "white", opacity: 0.5 }}
              focusBorderColor="white"
              placeholder="entreprisegéniale@gmail.com"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Sujet</FormLabel>
            <Select
              focusBorderColor="white"
              _placeholder={{ color: "white" }}
              placeholder="Choisir un sujet"
            >
              <option>Devis</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
            focusBorderColor="white"
              _placeholder={{ color: "white", opacity: 0.5 }}
              placeholder="Un petit message mignon pour nous ?"
            />
          </FormControl>
          <FormLabel></FormLabel>
          <Button>Envoyer</Button>
        </VStack>
      </FormControl>
      <Center width={"100%"}>
        <Heading>Contactez nous !</Heading>
      </Center>
    </HStack>
  );
}
