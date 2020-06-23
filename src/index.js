import React from 'react';
import { render} from 'react-dom';
import './index.css';
// import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import  rootReducer from "./reducers/index";
//import { render } from '@testing-library/react';

const store = createStore(rootReducer);
 render(

  // console.log(rootReducer)
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <BrowserRouter>
//   <App />
// </BrowserRouter>,
// render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
