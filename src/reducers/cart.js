import {
    UPDATE_CART_QUANTITY
} from '../actions/cart';
import {
    REMOVE_INVENTORY_ITEM
} from '../actions/inventory';

const initialState = {
    1: 1
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_CART_QUANTITY:
            if (action.quantity <= 0) {
                const {
                    [action.id.toString()]: removedItem,
                    ...newState
                } = state;

                return newState;
            }

            if (action.merge && typeof state[action.id] !== 'undefined') {
                return {
                    ...state,
                    [action.id]: state[action.id] + parseInt(action.quantity, 10)
                };
            }

            return {
                ...state,
                [action.id]: parseInt(action.quantity, 10)
            };
        case REMOVE_INVENTORY_ITEM:
            const {
                [action.id.toString()]: removedItem,
                ...newState
            } = state;

            return newState;
        default:
            return state;
    }
};
