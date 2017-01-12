import {
    REMOVE_INVENTORY_ITEM
} from '../actions/inventory';

const initialState = {
    1: {
        id: 1,
        name: 'Item 1',
        price: 1.5,
        quantityOnHand: 10
    },
    2: {
        id: 2,
        name: 'Item 2',
        price: 1.5,
        quantityOnHand: 10
    },
    3: {
        id: 3,
        name: 'Item 3',
        price: 1.5,
        quantityOnHand: 12
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
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
