import {
    connect
} from 'react-redux';

import Inventory from '../components/Inventory';
import {
    adjustQuantity
} from '../actions/cart';

const mapStateToProps = ({ inventory }) => ({
    products: Object.keys(inventory)
        .map(id => inventory[id])
});

const mapDispatchToProps = (dispatch) => ({
    adjustQuantity: ({
        id,
        quantity
    }) => dispatch(adjustQuantity({
        id,
        quantity,
        merge: true
    }))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inventory);
