import React from 'react';
import {
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import styles from './styles.css';
import Inventory from '../../containers/Inventory';
import Cart from '../../containers/Cart';

export default ({ }) => (
    <main>
        <Grid>
            <Row>
                <Col xs={8}>
                    <Inventory />
                </Col>
                <Col xs={4}>
                    <Cart />
                </Col>
            </Row>
        </Grid>
    </main>
);
