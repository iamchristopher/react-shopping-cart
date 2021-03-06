import {
    connect
} from 'react-redux';
import {
    browserHistory
} from 'react-router';

import InventoryForm from '../components/forms/Inventory';
import {
    addItem
} from '../actions/inventory';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch, { id }) => ({
    onSubmit (values) {
        dispatch(addItem(values));
        browserHistory.push('');
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryForm);
