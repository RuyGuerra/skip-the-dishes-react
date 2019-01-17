import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './themes/theme';
import configureStore from './store/configureStore';
import App from './App';
import './index.scss';

const store = configureStore();

const rootApp = (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(rootApp, document.getElementById('root'));
