import React from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Expensive from './containers/Expensive';
import Chargebacks from './containers/Chargebacks';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Expensive}/>
            <Route exact path='/chargebacks' component={Chargebacks} />
            <Redirect from='*' to='/'/>
        </Switch>
    </BrowserRouter>
)