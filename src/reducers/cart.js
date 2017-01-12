import {
    UPDATE_QUANTITY
} from '../actions/cart';

const initialState = {
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_QUANTITY:
            if (action.quantity <= 0) {
                const {
                    [action.id.toString()]: removedItem,
                    ...newState
                } = state;

                return newState;
            }

            return {
                ...state,
                [action.id]: parseInt(action.quantity, 10)
            };
        default:
            return state;
    }
};
