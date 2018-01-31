import React from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Expense from './containers/Expense';
import Refund from './containers/Refund';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Expense}/>
            <Route exact path='/refund' component={Refund} />
            <Redirect from='*' to='/'/>
        </Switch>
    </BrowserRouter>
)