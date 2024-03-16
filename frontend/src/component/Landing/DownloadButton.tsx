import { Button } from "@chakra-ui/react";

export default function DownloadButton() {
    const onButtonClick = () => {
        const pdfUrl = "/CV_Cloud-Devops_Luther_NEMOR_Alternance.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/CV_Cloud-Devops_Luther_NEMOR_Alternance.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
                <Button  rounded={'full'} onClick={onButtonClick}>
                    Téléchargez mon CV
                </Button>
    );
};