import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme';
import Home from './pages/Home';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Home />
  </ChakraProvider>
);
