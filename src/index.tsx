import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { materialTheme } from 'theme';

import { BrowserRouter } from 'react-router-dom';
import App from 'pages/App';
import GlobalStyle from 'GlobalStyle';
import {
  CircularProgress,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core';
import { persistor, store } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createInterceptors } from 'api/createInterceptors';

ReactDOM.render(
  <>
    <GlobalStyle />
    <StylesProvider injectFirst>
      <ThemeProvider theme={materialTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<CircularProgress />}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  </>,
  document.getElementById('root'),
);

createInterceptors();
reportWebVitals();
