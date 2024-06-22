import { Button } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons'


export default function DownloadButton() {
    const onButtonClick = () => {
        const pdfUrl = "/CV_Cloud-Devops_Luther_NEMOR.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/CV_Cloud-Devops_Luther_NEMOR.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Button rounded={'full'} onClick={onButtonClick} rightIcon={<DownloadIcon />}>
            Téléchargez mon CV
        </Button>
    );
}