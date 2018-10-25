import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga";

import { reducers } from './redux/reducers';
import { watcherSaga } from './redux/sagas.js';

import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './components/app';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
