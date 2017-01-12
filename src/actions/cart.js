export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const adjustQuantity = ({
    id,
    quantity,
    merge = false
}) => ({
    type: UPDATE_QUANTITY,
    id,
    quantity,
    merge
});
