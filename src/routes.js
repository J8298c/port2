import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import About from './Components/About/About';


const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={About} />
    </Router>
);

export default Routes;