import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme';
import ProductPage from './pages/ProductPage';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <ProductPage />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
