export const REMOVE_INVENTORY_ITEM = 'REMOVE_INVENTORY_ITEM';

export const removeItem = ({
    id
}) => ({
    type: REMOVE_INVENTORY_ITEM,
    id
});
