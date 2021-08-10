import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
