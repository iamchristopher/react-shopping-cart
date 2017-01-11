import React from 'react';
import styles from './styles.css';

import {
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default ({ }) => (
    <main>
        <Grid>
            <Row>
                <Col xs={8}>
                    <h2>Inventory</h2>
                    <ListGroup>
                        <ListGroupItem>Store Item</ListGroupItem>
                    </ListGroup>
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
