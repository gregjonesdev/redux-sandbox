import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Hello } from "./components/Hello";


ReactDOM.render(
  <Hello compiler="Typescript" framework="React" />,
  document.getElementById("root")
)
serviceWorker.unregister();
