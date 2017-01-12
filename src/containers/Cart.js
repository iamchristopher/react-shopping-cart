import {
    connect
} from 'react-redux';

import Cart from '../components/Cart';

const mapStateToProps = ({ cart, inventory }) => {
    const subTotal = Object.keys(cart)
        .reduce((total, id) => {
            return total + (cart[id] * inventory[id].price);
        }, 0);
    const taxes = Object.keys(cart)
        .reduce((total, id) => {
            return total + (cart[id] * (inventory[id].price * 0.13));
        }, 0);

    return {
        items: Object.keys(cart)
            .map(id => inventory[id]),
        itemCount: Object.keys(cart)
            .reduce((total, id) => total + cart[id], 0),
        subTotal,
        taxes,
        total: subTotal + taxes
    };
};

export default connect(
    mapStateToProps
)(Cart);
