import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { toast } from 'react-toastify';
import './index.css';
import App from './App';
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';

require('dotenv').config();
toast.configure();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

