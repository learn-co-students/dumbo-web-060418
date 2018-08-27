import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/reducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// make a reducer
// store needs a reducer
// create a store


ReactDOM.render(<Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
