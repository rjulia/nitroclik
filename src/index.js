import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';

const template = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

ReactDOM.render(template, document.getElementById('root'));

