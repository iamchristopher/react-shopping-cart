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

export default ({ }) => (
    <main>
        <Grid>
            <Row>
                <Col xs={8}>
                    <Inventory />
                </Col>
                <Col xs={4}>
                    <h2>Cart</h2>
                    <ListGroup>
                        <ListGroupItem>Store Item</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Grid>
    </main>
);
