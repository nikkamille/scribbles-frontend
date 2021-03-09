import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer'

const initialState = {}
let store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools())) 
// create a reducers folder; create a rootReducer file inside and import the other reducers and do combineReducers

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


