import { Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import HubSpotMeeting from "./Meeting"
export default function MeetingButton() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button rounded={'full'} onClick={onOpen} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)">
                Je réserve un créneau pour discuter de mon projet ! 🗓
            </Button>

            

            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"full"}>
                        <Center>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                            <HubSpotMeeting />
                    </DrawerBody>
                </DrawerContent>
                        </Center>
            </Drawer>
        </>
    );
}