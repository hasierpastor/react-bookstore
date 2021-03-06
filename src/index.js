import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//initialize store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//provider tells which store app should communicate with
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
