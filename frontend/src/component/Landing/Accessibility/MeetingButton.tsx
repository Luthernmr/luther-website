import { Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import HubSpotMeeting from "./Meeting"

const ModalComponent = ({ isOpen , onClose, onOpen }) =>  {


    return (
        <>
            <Button rounded={'full'} fontSize={{ base: "xs", xl: "lg" }} onClick={onOpen} boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)">
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

export default ModalComponent