import React from 'react';
import {
    Button,
    ControlLabel,
    Form,
    FormControl,
    FormGroup
} from 'react-bootstrap';

import styles from './styles.css';

export default ({
    count,
    min = 1,
    max = 1,
    adjustQuantity
}) => (
    <Form
        className="pull-right"
        inline
    >
        <FormGroup>
            <Button
                bsStyle="primary"
                disabled={count <= min}
                onClick={() => adjustQuantity(count - 1)}
            >
                -
            </Button>
            <FormControl
                className={styles.input}
                type="number"
                value={count}
                min={min}
                max={max}
                onChange={value => {
                    const quantity = value.target.value;

                    if (!quantity) {
                        console.log(`"${quantity}"`);
                        return;
                    }

                    if (quantity < min) {
                        return adjustQuantity(min);
                    }

                    if (quantity > max) {
                        return adjustQuantity(max);
                    }

                    adjustQuantity(quantity);
                }}
            />
            <Button
                bsStyle="primary"
                disabled={count >= max}
                onClick={() => adjustQuantity(count + 1)}
            >
                +
            </Button>
            <Button
                bsStyle="danger"
                onClick={() => adjustQuantity(0)}
            >
                x
            </Button>
        </FormGroup>
    </Form>
);
