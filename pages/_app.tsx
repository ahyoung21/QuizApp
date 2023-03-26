import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useState } from 'react';

import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const persistor = persistStore(store);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <main>
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
