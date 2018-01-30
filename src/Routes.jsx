import React from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Home from './home/Home';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </BrowserRouter>
)