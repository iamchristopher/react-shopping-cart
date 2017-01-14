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

import validate from './validation';
import QuantityPicker from '../../QuantityPicker';

const InventoryForm = ({
    initialValues,
    handleSubmit
}) => (
    <Well>
        <form onSubmit={handleSubmit}>
            <Field
                name="name"
                component={({ input, meta: { touched, error } }) => (
                    <FormGroup
                        validationState={
                            touched && error
                                ?   'error'
                                :   null
                        }
                    >
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            {...input}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                )}
            />
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
                <ControlLabel>Quantity on Hand</ControlLabel>
                <Field
                    name="quantityOnHand"
                    component={({ input, meta }) => <QuantityPicker
                        adjustQuantity={input.onChange}
                        count={input.value}
                        min={initialValues.quantityOnHand}
                        max={10}
                    />}
                />
            </FormGroup>
            <hr />
            <Button
                block
                bsSize="large"
                bsStyle="success"
                type="submit"
            >
                Add Inventory
            </Button>
        </form>
    </Well>
);

export default reduxForm({
    form: 'inventory',
    validate,
    initialValues: {
        quantityOnHand: 0,
        price: 1.00
    }
})(InventoryForm);
