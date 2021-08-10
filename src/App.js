import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ProductPage />
    </ChakraProvider>
  );
}

export default App;
