export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const adjustQuantity = ({ id, quantity }) => ({
    type: UPDATE_QUANTITY,
    id,
    quantity
});
