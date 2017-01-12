import React from 'react';
import {
    Grid,
    Row,
    Col,
    Nav,
    NavItem
} from 'react-bootstrap';

import styles from './styles.css';
import Inventory from '../../containers/Inventory';
import Cart from '../../containers/Cart';

export default ({ }) => (
    <main>
        <Grid>
            <Row>
                <Col xs={8}>
                    <Nav
                        activeKey="view"
                        bsStyle="tabs"
                        justified
                    >
                        <NavItem
                            eventKey="view"
                        >
                            View Inventory
                        </NavItem>
                        <NavItem
                            eventKey="add"
                        >
                            Add Inventory
                        </NavItem>
                    </Nav>
                    <Inventory />
                </Col>
                <Col xs={4}>
                    <Cart />
                </Col>
            </Row>
        </Grid>
    </main>
);
