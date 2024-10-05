import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box, Heading, Link, Text, ListItem, UnorderedList, Code, OrderedList } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

// Styles spécifiques à Chakra UI pour chaque élément Markdown
const ChakraUIRenderer = {
  h1: ({ children }) => <Heading as="h1" size="xl" mb={4}>{children}</Heading>,
  h2: ({ children }) => <Heading as="h2" size="lg" mb={3}>{children}</Heading>,
  h3: ({ children }) => <Heading as="h3" size="md" mb={3}>{children}</Heading>,
  p: ({ children }) => <Text mb={4}>{children}</Text>,
  a: ({ href, children }) => <Link color="teal.500" href={href}>{children}</Link>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  ul: ({ children }) => <UnorderedList pl={4} mb={4}>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList pl={4} mb={4}>{children}</OrderedList>,
  code: ({ children }) => <Code>{children}</Code>,
};

// Fonction pour charger le contenu MDX
const fetchGithubMdx = async (filePath) => {
  const repoOwner = 'votre-nom-utilisateur'; // Remplacez par votre nom d'utilisateur
  const repoName = 'votre-repository'; // Remplacez par le nom du repo
  const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${filePath}`;

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Erreur lors du chargement du fichier MDX : ${response.status}`);
    }
    const mdxContent = await response.text();
    return mdxContent;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const components = {
  h1: ChakraUIRenderer.h1,
  h2: ChakraUIRenderer.h2,
  p: ChakraUIRenderer.p,
  a: ChakraUIRenderer.a,
  ul: ChakraUIRenderer.ul,
  li: ChakraUIRenderer.li,
  ol: ChakraUIRenderer.ol,
  code: ChakraUIRenderer.code,
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
    <Box p={8} bg="gray.50" minH="100vh" width={"100%"}>
      <Box bg="white" p={6} shadow="md" borderRadius="md">
        <MDXProvider components={components}>
          <ReactMarkdown
            children={markdownText}
            remarkPlugins={[remarkGfm]}
            components={components} // Utilisez les composants définis
          />
        </MDXProvider>
      </Box>
    </Box>
  );
};

export default MarkdownViewer;
