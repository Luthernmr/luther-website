import { useState } from 'react';
import { Button, Box, Text, HStack } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckIcon } from '@chakra-ui/icons';
import { FaGithub, FaGitlab } from 'react-icons/fa'; // Import des icônes GitHub et GitLab

type GitSlector = {
    githubCode : string
    gitlabCode : string
}

const InteractiveCodeSwitcher = ({ githubCode, gitlabCode }: GitSlector) => {
    const [selectedPlatform, setSelectedPlatform] = useState('github');
    const [isCopied, setIsCopied] = useState(false);

    const code = selectedPlatform === 'github' ? githubCode : gitlabCode || ''; // Valeur par défaut à une chaîne vide
    const language = 'yaml'; // Vous pouvez modifier ici pour supporter d'autres langages

    const handleCopy = () => {
        navigator.clipboard?.writeText(code.trim()).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => console.error('Erreur lors de la copie:', err));
    };

    return (
        <Box m={{ base: 1, md: 3 }}>
            <HStack
                backgroundColor="white"
                bg="whiteAlpha.100"
                borderTopRadius={10}
                backdropFilter="auto"
                backdropBlur="1px"
                border="1px solid"
                borderColor="whiteAlpha.300"
                padding={2}
                justifyContent="space-between"
            >
                <Text fontSize={{ base: "sm", md: "md" }}>{language}</Text>
                <HStack justifyContent="space-between">
                    <Button
                        onClick={() => setSelectedPlatform('github')}
                        colorScheme={selectedPlatform === 'github' ? 'gray' : 'white.300'}
                        variant={selectedPlatform === 'github' ? 'solid' : 'outline'}
                        leftIcon={<FaGithub />} // Ajout de l'icône GitHub
                        size="xs" // Taille du bouton GitHub
                    >
                        GitHub
                    </Button>
                    <Button
                        onClick={() => setSelectedPlatform('gitlab')}
                        colorScheme={selectedPlatform === 'gitlab' ? 'orange' : 'white.300'}
                        variant={selectedPlatform === 'gitlab' ? 'solid' : 'outline'}
                        leftIcon={<FaGitlab />} // Ajout de l'icône GitLab
                        size="xs" // Taille du bouton GitLab
                    >
                        GitLab
                    </Button>
                </HStack>
                <Button
                    onClick={handleCopy}
                    size="xs"
                    width={"40px"} // Taille du bouton Copy
                    right="0"
                    zIndex="1"
                    backgroundColor={isCopied ? "green.200" : "white"}
                    color="black"
                    _hover={{ backgroundColor: isCopied ? "green.100" : "gray.200" }}
                >
                    {isCopied ? <CheckIcon /> : "Copy"}
                </Button>
            </HStack>
            <SyntaxHighlighter
                style={oneDark}
                language={language}
                customStyle={{ borderRadius: "0px 0px 10px 10px", padding: "10px", margin: "none", width: "100%" }}
            >
                {code}
            </SyntaxHighlighter>
        </Box>
    );
};

export default InteractiveCodeSwitcher;
