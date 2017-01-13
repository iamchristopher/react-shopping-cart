import { combineReducers } from 'redux';
import {
    reducer as formReducer
} from 'redux-form';

import cart from './cart';
import inventory from './inventory';

export default combineReducers({
    cart,
    inventory,
    form: formReducer
});
