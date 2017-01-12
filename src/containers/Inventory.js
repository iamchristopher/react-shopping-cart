import {
    connect
} from 'react-redux';

import Inventory from '../components/Inventory';
import {
    adjustQuantity
} from '../actions/cart';
import {
    removeItem
} from '../actions/inventory';

const mapStateToProps = ({ cart, inventory }) => ({
    products: Object.keys(inventory)
        .map(id => ({
            ...inventory[id],
            quantityInCart: cart[id]
        }))
});

const mapDispatchToProps = (dispatch) => ({
    adjustQuantity: ({
        id,
        quantity
    }) => dispatch(adjustQuantity({
        id,
        quantity,
        merge: true
    })),
    removeItem: ({
        id
    }) => dispatch(removeItem({
        id
    }))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inventory);
