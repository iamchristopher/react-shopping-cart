const initialState = {
    1: { name: 'Item 1', quantityOnHand: 1 },
    2: { name: 'Item 2', quantityOnHand: 10 },
    3: { name: 'Item 3', quantityOnHand: 12 }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};
