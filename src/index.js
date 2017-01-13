import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {
    IndexRoute,
    Router,
    Route,
    browserHistory
} from 'react-router';
import { Provider } from 'react-redux';
import store from './stores/configureStore';

import Inventory from './containers/Inventory';
import InventoryForm from './components/forms/Inventory';

ReactDOM.render(
    <Provider store={store()}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Inventory} />
                <Route path="/add" component={InventoryForm}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
