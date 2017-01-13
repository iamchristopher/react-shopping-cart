import React from 'react';
import {
    Field,
    reduxForm
} from 'redux-form';
import {
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    InputGroup,
    Well
} from 'react-bootstrap';

import QuantityPicker from '../../QuantityPicker';

const InventoryForm = ({ initialValues }) => (
    <Well>
        <form>
            <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <Field
                    name="name"
                    component={({ input, meta }) => <FormControl
                        {...input}
                    />}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Price</ControlLabel>
                <Field
                    name="price"
                    component={({ input, meta }) => <InputGroup>
                        <InputGroup.Addon>$</InputGroup.Addon>
                        <FormControl
                            {...input}
                            min="0.01"
                            step="0.01"
                            dataNumberToFixed="2"
                            type="number"
                        />
                    </InputGroup>}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Amount Available</ControlLabel>
                <Field
                    name="inventoryAvailable"
                    component={({ input, meta }) => <QuantityPicker
                        adjustQuantity={input.onChange}
                        count={input.value}
                        min={initialValues.inventoryAvailable}
                        max={10}
                    />}
                />
            </FormGroup>
            <hr />
            <Button
                block
                bsSize="large"
                bsStyle="success"
            >
                Add Inventory
            </Button>
        </form>
    </Well>
);

export default reduxForm({
    form: 'inventory',
    initialValues: {
        inventoryAvailable: 0,
        price: 1.00
    }
})(InventoryForm);
