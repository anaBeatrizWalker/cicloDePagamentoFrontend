import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard2 from '../dashboardReact/dashboard2'
//import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard2}/>
        {/*<Route path='/' component={Dashboard}/>*/}
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)