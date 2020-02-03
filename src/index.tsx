import 'i18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app';
import { theme, Resets, ThemeProvider } from 'styled';
import { BrowserRouter, Route } from 'react-router-dom';


const View = () => (
  <ThemeProvider theme={theme}>
    <>
      <Resets />
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </>
  </ThemeProvider>
);

ReactDOM.render(
  <View />,
  document.getElementById('app')
);
