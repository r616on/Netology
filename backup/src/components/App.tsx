import * as React from 'react';
import {Switch, Router} from 'react-router';
import { createBrowserHistory } from 'history';
import RouteList from './RouteList';

const history = createBrowserHistory();

const App = () => (
    <Router history={ history }>
        <Switch>
            <RouteList/>
        </Switch>
    </Router>
);

export default App;
