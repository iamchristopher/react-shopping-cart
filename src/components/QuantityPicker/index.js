import React from 'react';
import {
    Button,
    ControlLabel,
    Form,
    FormControl,
    FormGroup
} from 'react-bootstrap';

export default ({
    count,
    max
}) => (
    <Form
        className="pull-right"
        inline
    >
        <FormGroup>
            <Button
                bsStyle="primary"
            >
                -
            </Button>
            <FormControl
                componentClass="text"
            >
                {count}
            </FormControl>
            <Button
                bsStyle="primary"
            >
                +
            </Button>
            <Button
                bsStyle="danger"
            >
                x
            </Button>
        </FormGroup>
    </Form>
);
