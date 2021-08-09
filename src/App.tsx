import * as React from 'react';
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import customTheme from './styles/theme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box>
      <Text>Hello</Text>
    </Box>
  </ChakraProvider>
);
