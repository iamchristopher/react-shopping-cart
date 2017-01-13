export const INVENTORY_ITEM_REMOVE = 'INVENTORY_ITEM_REMOVE';
export const INVENTORY_ITEM_ADD = 'INVENTORY_ITEM_ADD';

export const removeItem = ({
    id
}) => ({
    type: INVENTORY_ITEM_REMOVE,
    id
});

export const addItem = ({
    name,
    price,
    quantityOnHand
}) => ({
    type: INVENTORY_ITEM_ADD,
    name,
    price,
    quantityOnHand
});
