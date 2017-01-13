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
    count = 1,
    min = 1,
    max = 1,
    adjustQuantity
}) => (
    <Form
        inline
    >
        <FormGroup>
            <Button
                bsSize="xsmall"
                bsStyle="primary"
                className={styles.button}
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
                bsSize="xsmall"
                bsStyle="primary"
                className={styles.button}
                disabled={count >= max}
                onClick={() => adjustQuantity(count + 1)}
            >
                +
            </Button>
            <Button
                bsSize="xsmall"
                bsStyle="danger"
                onClick={() => adjustQuantity(0)}
            >
                x
            </Button>
        </FormGroup>
    </Form>
);
