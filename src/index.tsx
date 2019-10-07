import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './redux/reducers';
import store from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Hello } from "./components/Hello";


render(
  <Provider store={store}>
    <Hello compiler="Typescript" framework="React" />
  </Provider>
  ,document.getElementById("root")
)
serviceWorker.unregister();
