import { Button } from '@chakra-ui/react';


const ModalComponent = () => {
    const handleButtonClick = () => {
        window.location.hash = '#calendly';
    };

    return (
        <>
            <Button 
                rounded={'full'} 
                fontSize={{ base: "xs", xl: "lg" }} 
                onClick={handleButtonClick} // Appeler la fonction lors du clic
                boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            >
                Je réserve un créneau pour discuter de mon projet ! 🗓
            </Button>
        </>
    );
}

export default ModalComponent;
