import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import store from "./redux/store/store.js";

// import provide to connect redux with react and using provider wrap our app to use every components
import { Provider } from "react-redux";

// store.subscribe(() => console.log(store.getSTate()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


