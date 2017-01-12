import {
    connect
} from 'react-redux';
import decimal from 'decimal.js';

import Cart from '../components/Cart';
import {
    flushCart
} from '../actions/cart';

const mapStateToProps = ({ cart, inventory }) => {
    const subTotal = Object.keys(cart)
        .reduce((total, id) => total
            .plus(cart[id] * inventory[id].price),
            new decimal(0)
        );
    const taxes = Object.keys(cart)
        .reduce((total, id) => total
            .plus(cart[id] * (inventory[id].price * 0.13)),
            new decimal(0)
        );

    return {
        items: Object.keys(cart)
            .map(id => inventory[id]),
        itemCount: Object.keys(cart)
            .reduce((total, id) => total + cart[id], 0),
        subTotal: subTotal
            .toFixed(2),
        taxes: taxes
            .toFixed(2),
        total: subTotal
            .plus(taxes)
            .toFixed(2)
    };
};

const mapDispatchToProps = (dispatch) => ({
    completeOrder ({
        total,
        itemCount
    }) {
        const confirmationMessage = `Are you sure you want to purchase ${itemCount} item${itemCount !== 1 ? 's' : ''} for $${total}?`;

        if (confirm(confirmationMessage)) {
            return dispatch(flushCart());
        }
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    completeOrder: () => dispatchProps.completeOrder({
        total: stateProps.total,
        itemCount: stateProps.itemCount
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Cart);
