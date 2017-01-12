import {
    connect
} from 'react-redux';

import QuantityPicker from '../components/QuantityPicker';
import {
    adjustQuantity
} from '../actions/cart';

const mapStateToProps = ({ cart, inventory }, { id }) => {
    const product = inventory[id];
    const count = cart[id];

    return {
        count,
        max: product.quantityOnHand
    };
};

const mapDispatchToProps = (dispatch, { id }) => ({
    adjustQuantity: (quantity) => dispatch(adjustQuantity({
        id,
        quantity
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuantityPicker);
