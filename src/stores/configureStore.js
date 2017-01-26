import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default (initialState) => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware)
    )
);
