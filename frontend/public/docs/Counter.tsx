import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Counter = () => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" bg="teal.50" mb={4}>
      <Text fontSize="lg" color="teal.800">
        Ceci est un composant React intégré dans le Markdown !
      </Text>
    </Box>
  );
};

export default Counter;