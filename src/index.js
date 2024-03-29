import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { quoteReducer } from './QuoteReducer/quoteReducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {reduxThunkReducer} from './ReduxThunkReducer/reduxThunkReducer';

const rootReducer = combineReducers({
  quoteReducer,
  reduxThunkReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
