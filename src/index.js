import React from 'react';
import ReactDOM from 'react-dom';
import {BrowseRouter} from 'react-router-dom'

import './index.css';
import App from './App';


ReactDOM.render(
    <BrowseRouter>
        <App />
    </BrowseRouter>, document.getElementById('root')
);


