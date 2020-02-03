import 'i18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import { theme, Resets, ThemeProvider } from 'styled';
import { BrowserRouter, Route } from 'react-router-dom';


const View = () => (
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <>
        <Resets />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  <View />,
  document.getElementById('app')
);
