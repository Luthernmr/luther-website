import { useState, useEffect, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box, Heading, Link, Text, ListItem, UnorderedList, OrderedList, Button, HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

// Styles spécifiques à Chakra UI pour chaque élément Markdown
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckIcon } from '@chakra-ui/icons';

type CustomProps = {
  children?: ReactNode;
  href?: string;
  className?: string;
};

type CustomMDXComponents = {
  h1?: (props: { children?: ReactNode }) => JSX.Element;
  h2?: (props: { children?: ReactNode }) => JSX.Element;
  h3?: (props: { children?: ReactNode }) => JSX.Element;
  p?: (props: { children?: ReactNode }) => JSX.Element;
  a?: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;
  li?: (props: { children?: ReactNode }) => JSX.Element;
  ul?: (props: { children?: ReactNode }) => JSX.Element;
  ol?: (props: { children?: ReactNode }) => JSX.Element;
  code?: (props: { children?: ReactNode; className?: string }) => JSX.Element;
  strong: (props: { children?: ReactNode; className?: string }) => JSX.Element;
};

// Définition des composants customisés avec Chakra UI et coloration syntaxique
const CustomRendrer = {
  h1: ({ children }: CustomProps) => <Heading as="h1" size="xl" mb={6}>{children}</Heading>,
  h2: ({ children }: CustomProps) => <Heading as="h2" size="lg" mb={4}>{children}</Heading>,
  h3: ({ children }: CustomProps) => <Heading as="h3" size="md" mb={4}>{children}</Heading>,
  p: ({ children }: CustomProps) => <Text mb={4}>{children}</Text>,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => ( // Use the standard anchor props
    <Link color="#0db3d0" href={href} isExternal {...props}>
      {children}
    </Link>
  ),
  strong: ({ children }: CustomProps) => (
    <Text as="span" fontWeight="bold" color="#0db3d0">
      {children}
    </Text>),
  li: ({ children }: CustomProps) => <ListItem>{children}</ListItem>,
  ul: ({ children }: CustomProps) => <UnorderedList pl={4} mb={4}>{children}</UnorderedList>,
  ol: ({ children }: CustomProps) => <OrderedList pl={4} mb={4}>{children}</OrderedList>,

  // Utilisation de react-syntax-highlighter pour les blocs de code
  code: ({ className, children }: CustomProps) => {
    const language = className ? className.replace("language-", "") : "text"; // Récupérer le langage du bloc de code
    const [isCopied, setIsCopied] = useState(false); // État pour savoir si le texte a été copié

    const handleCopy = () => {
      navigator.clipboard.writeText(String(children)).then(() => {
        setIsCopied(true); // Changez l'état pour montrer que le texte a été copié
        setTimeout(() => {
          setIsCopied(false); // Réinitialisez l'état après 2 secondes
        }, 2000);
      }).catch(err => {
        console.error('Erreur lors de la copie:', err);
      });
    };
    return (
      <Box m={3}>
        <HStack
          backgroundColor={"white"}
          bg="whiteAlpha.100"
          borderTopRadius={10}
          backdropFilter="auto"
          backdropBlur="1px"
          border={"1px solid"}
          borderColor={"whiteAlpha.300"}
          padding={2}
          justifyContent={"space-between"}
        >

          <Text>{language}</Text>
          <Button
            onClick={handleCopy}
            size="xs"
            right="0"
            zIndex="1"
            backgroundColor={isCopied ? "green.200" : "white"}
            color="black"
            _hover={{ backgroundColor: isCopied ? "green.100" : "gray.200" }} // Changer la couleur lors du survol
          >
            {isCopied ? <CheckIcon /> : "Copy"}
          </Button>
        </HStack>
        <SyntaxHighlighter style={oneDark} language={language} customStyle={{ borderRadius: "0px 0px 10px 10px", padding: "10px", margin: "none" }}>
        {typeof children === 'string' ? children : String(children)}
        </SyntaxHighlighter>
      </Box>
    );
  },
};

// Fonction pour charger le contenu MDX
// const fetchGithubMdx = async (filePath) => {
//   const repoOwner = 'votre-nom-utilisateur'; // Remplacez par votre nom d'utilisateur
//   const repoName = 'votre-repository'; // Remplacez par le nom du repo
//   const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${filePath}`;

//   try {
//     const response = await fetch(fileUrl);
//     if (!response.ok) {
//       throw new Error(`Erreur lors du chargement du fichier MDX : ${response.status}`);
//     }
//     const mdxContent = await response.text();
//     return mdxContent;
//   } catch (error) {
//     console.error("Erreur lors de la récupération du fichier :", error);
//     return null;
//   }
// };

// Mettez à jour le type de composants
const components: CustomMDXComponents = {
  h1: CustomRendrer.h1,
  h2: CustomRendrer.h2,
  h3: CustomRendrer.h3,
  p: CustomRendrer.p,
  a: CustomRendrer.a,
  strong: CustomRendrer.strong, // Utilisez "strong" pour le texte en gras
  ul: CustomRendrer.ul,
  li: CustomRendrer.li,
  ol: CustomRendrer.ol,
  code: CustomRendrer.code,

};



const MarkdownViewer = () => {
  const { category, docName } = useParams();  // Récupère le nom du document depuis la route
  const [markdownText, setMarkdownText] = useState('');

  useEffect(() => {
    const loadMarkdown = async () => {
      const filePath = `/docs/${category}/${docName}.mdx`;
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setMarkdownText(text);
      } catch (error) {
        console.error('Erreur lors du chargement du fichier Markdown:', error);
        setMarkdownText('# Erreur: Document non trouvé');
      }
    };

    loadMarkdown();
  }, [category, docName]); // Recharge le fichier si la route change

  return (

    <Box backgroundColor={"#3b3b3b"} pb={"7em"}  pr={"7em"}  pl={"7em"}  pt={"5em"} color={"#c9d1d9"} shadow="md" borderRadius="md" minH="100vh" width={"100%"}>
      <MDXProvider>
        <ReactMarkdown
          children={markdownText}
          remarkPlugins={[remarkGfm]}
          components={components} // Utilisez les composants définis
        />
      </MDXProvider>
    </Box>
  );
};

export default MarkdownViewer;
