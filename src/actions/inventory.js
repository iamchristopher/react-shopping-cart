export const REMOVE_INVENTORY_ITEM = 'REMOVE_INVENTORY_ITEM';
export const INVENTORY_ADD_ITEM = 'INVENTORY_ADD_ITEM';

export const removeItem = ({
    id
}) => ({
    type: REMOVE_INVENTORY_ITEM,
    id
});

export const addItem = ({
    name,
    price,
    quantityOnHand
}) => ({
    type: INVENTORY_ADD_ITEM,
    name,
    price,
    quantityOnHand
});
