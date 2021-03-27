import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';


const initialState = {}
let store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools())) 

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


