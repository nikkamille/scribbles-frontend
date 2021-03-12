import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
// Add combineReducers under redux once all reducers have been set up.
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
// import rootReducer from './reducers/rootReducer'
import notebookReducer from './reducers/notebookReducer'
import { BrowserRouter as Router } from 'react-router-dom';


const initialState = {}
let store = createStore(notebookReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools())) 
// create a reducers folder; create a rootReducer file inside and import the other reducers and do combineReducers

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


