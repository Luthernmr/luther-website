import { useState, useEffect, ReactNode, Suspense } from 'react';
import {
  Box,
  Heading,
  Link,
  Text,
  ListItem,
  UnorderedList,
  OrderedList,
  Button,
  HStack,
  Divider,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { useParams, Link as RouterLink, useLocation } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckIcon } from '@chakra-ui/icons';

// Type pour les props des composants personnalisés
type CustomProps = {
  children?: ReactNode;
  href?: string;
  className?: string;
};

// Définition des composants personnalisés
const CustomRenderer: Record<string, React.ElementType<CustomProps>> = {
  h1: ({ children }) => <Heading as="h1" size="xl" mb={6}>{children}</Heading>,
  h2: ({ children }) => <Heading as="h2" size="lg" mb={4}>{children}</Heading>,
  h3: ({ children }) => <Heading as="h3" size="md" mb={4}>{children}</Heading>,
  p: ({ children }) => <Text mb={4}>{children}</Text>,
  a: ({ href, children, ...props }) => (
    <Link color="#0db3d0" href={href} isExternal {...props}>
      {children}
    </Link>
  ),
  strong: ({ children }) => <Text as="span" fontWeight="bold" color="#0db3d0">{children}</Text>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  ul: ({ children }) => <UnorderedList pl={4} mb={4}>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList pl={4} mb={4}>{children}</OrderedList>,
  hr: () => <Divider borderColor="#0db3d0" borderWidth="1px" my={5} />,
  code: ({ className, children }) => {
    const language = className ? className.replace("language-", "") : "text";
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(String(children)).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(err => console.error('Erreur lors de la copie:', err));
    };

    return (
      <Box m={{ base: 1, md: 3 }}>
        <HStack backgroundColor="white" bg="whiteAlpha.100" borderTopRadius={10} backdropFilter="auto" backdropBlur="1px" border="1px solid" borderColor="whiteAlpha.300" padding={2} justifyContent="space-between">
          <Text fontSize={{ base: "sm", md: "md" }}>{language}</Text>
          <Button onClick={handleCopy} size="xs" right="0" zIndex="1" backgroundColor={isCopied ? "green.200" : "white"} color="black" _hover={{ backgroundColor: isCopied ? "green.100" : "gray.200" }}>
            {isCopied ? <CheckIcon /> : "Copy"}
          </Button>
        </HStack>
        <Flex fontSize={{ base: "2xs", md: "md" }} width="100%">
          <SyntaxHighlighter style={oneDark} language={language} customStyle={{ borderRadius: "0px 0px 10px 10px", padding: "10px", margin: "none", width: "100%" }}>
            {typeof children === 'string' ? children : String(children)}
          </SyntaxHighlighter>
        </Flex>
      </Box>
    );
  },
};

// Composant principal
const MarkdownViewer = () => {
  const { category, docName } = useParams<{ category: string; docName: string }>();
  const location = useLocation();
  const path = location.pathname;

  const isDocsPage = path === "/docs";
  const isCategoryPage = path === `/docs/${category}`;
  const isDocPage = path === `/docs/${category}/${docName}`;

  // Chargement dynamique du composant MDX
  const [MDXComponent, setMDXComponent] = useState<React.ElementType | null>(null);

  useEffect(() => {
    const loadMDXComponent = async () => {
      try {
        const component = await import(`../../../public/docs/${category}/${docName}.mdx`);
        setMDXComponent(() => component.default);
      } catch (error) {
        console.error('Erreur lors du chargement du fichier MDX:', error);
      }
    };

    loadMDXComponent();
  }, [category, docName]);

  return (
    <Box backgroundColor="#3b3b3b" color="#c9d1d9" shadow="md" borderRadius="md" minH="100vh" width="100%">
      <Breadcrumb p={5}>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/docs" color={isDocsPage ? "#0db3d0" : "inherit"}>
            docs
          </BreadcrumbLink>
        </BreadcrumbItem>
        {category && (
          <BreadcrumbItem isCurrentPage={isCategoryPage}>
            <BreadcrumbLink as={RouterLink} to={`/docs/${category}`} color={isCategoryPage ? "#0db3d0" : "inherit"}>
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {docName && (
          <BreadcrumbItem isCurrentPage={isDocPage}>
            <BreadcrumbLink href="#" color={isDocPage ? "#0db3d0" : "inherit"}>
              {docName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      <Flex flexDirection="column" paddingInline={{ base: 2, md: 20 }} paddingY={{ base: 2, md: 5 }}>
        <Suspense fallback={<Text>Chargement du document...</Text>}>
          {MDXComponent ? (
            <MDXProvider components={CustomRenderer}>
              <MDXComponent components={CustomRenderer} />
            </MDXProvider>
          ) : (
            <Text>Aucun document trouvé.</Text>
          )}
        </Suspense>
      </Flex>
    </Box>
  );
};

export default MarkdownViewer;
