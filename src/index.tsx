import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from "./Components/Login/LoginPage";
import {Provider} from "react-redux";
import {store} from "./Store";
import App from "./App";

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
