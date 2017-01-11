import {
    connect
} from 'react-redux';

import Inventory from '../components/Inventory';

const mapStateToProps = ({ inventory }) => ({
    products: Object.keys(inventory)
        .map(id => inventory[id])
});

export default connect(
    mapStateToProps
)(Inventory);
