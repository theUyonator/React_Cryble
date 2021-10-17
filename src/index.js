import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import dotenv from 'dotenv';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

// dotenv.config();
// console.log(process.env); 

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById("root")
    );