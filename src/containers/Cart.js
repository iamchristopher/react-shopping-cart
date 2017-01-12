import {
    connect
} from 'react-redux';

import Cart from '../components/Cart';

const mapStateToProps = ({ cart, inventory }) => ({
    items: Object.keys(cart)
        .map(id => inventory[id]),
    itemCount: Object.keys(cart)
        .reduce((total, id) => total + cart[id], 0),
    total: Object.keys(cart)
        .reduce((total, id) => {
            return total + (cart[id] * inventory[id].price);
        }, 0)
});

export default connect(
    mapStateToProps
)(Cart);
