import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
    </ChakraProvider>
  )
}
