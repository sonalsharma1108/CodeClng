import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Layout from './pages/Layout';
import Dashboard from './pages/dashboard';
import Challenge from './pages/challenge';
import History from './pages/history';

const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <switch>
            <Route path="/" render={props => <Layout {...props} />} />
            <Route path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route path="/challenge" render={props => <Challenge {...props} />} />
            <Route path="/history" render={props => <History {...props} />} />
        </switch>
    </BrowserRouter>,
    app);

