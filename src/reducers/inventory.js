import {
    INVENTORY_ITEM_REMOVE,
    INVENTORY_ITEM_ADD
} from '../actions/inventory';

const initialState = {
    1: {
        id: 1,
        name: 'Item 1',
        price: 1.99,
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
        case INVENTORY_ITEM_REMOVE:
            const {
                [action.id.toString()]: removedItem,
                ...newState
            } = state;

            return newState;
        case INVENTORY_ITEM_ADD:
            const {
                type,
                ...productData
            } = action;
            const nextId = Math
                .max(...Object
                    .keys(state)
                ) + 1;

            return {
                ...state,
                [nextId]: {
                    ...productData,
                    id: nextId
                }
            };
        default:
            return state;
    }
};
