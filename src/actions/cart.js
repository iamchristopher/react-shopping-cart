export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const FLUSH_CART = 'FLUSH_CART';

export const adjustQuantity = ({
    id,
    quantity,
    merge = false
}) => ({
    type: UPDATE_CART_QUANTITY,
    id,
    quantity,
    merge
});

export const flushCart = () => ({
    type: FLUSH_CART
});
