import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

let reducer = ''

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);


