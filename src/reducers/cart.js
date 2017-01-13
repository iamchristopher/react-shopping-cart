import {
    UPDATE_CART_QUANTITY,
    FLUSH_CART
} from '../actions/cart';
import {
    INVENTORY_ITEM_REMOVE
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
        case INVENTORY_ITEM_REMOVE:
            const {
                [action.id.toString()]: removedItem,
                ...newState
            } = state;

            return newState;
        case FLUSH_CART:
            return {};
        default:
            return state;
    }
};
