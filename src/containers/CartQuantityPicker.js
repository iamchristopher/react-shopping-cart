import {
    connect
} from 'react-redux';

import QuantityPicker from '../components/QuantityPicker';

const mapStateToProps = ({ cart, inventory }, { id }) => {
    const product = inventory[id];
    const count = cart[id];

    return {
        count,
        max: product.quantityOnHand
    };
};

export default connect(
    mapStateToProps
)(QuantityPicker);
