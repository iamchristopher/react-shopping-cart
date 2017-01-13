import React from 'react';
import {
    Grid,
    Row,
    Col,
    Nav,
    NavItem
} from 'react-bootstrap';
import {
    browserHistory
} from 'react-router';

import styles from './styles.css';
import Cart from '../../containers/Cart';

export default ({ location, children }) => {
    const currentRoute = location.pathname.charAt(0) === '/'
        ?   location.pathname.substr(1)
        :   location.pathname;

    return (
        <Grid>
            <Row>
                <Col xs={8}>
                    <Nav
                        activeKey={currentRoute}
                        bsStyle="tabs"
                        justified
                        onSelect={route => browserHistory.push(route)}
                    >
                        <NavItem
                            eventKey=""
                        >
                            View Inventory
                        </NavItem>
                        <NavItem
                            eventKey="add"
                        >
                            Add Inventory
                        </NavItem>
                    </Nav>
                    {children}
                </Col>
                <Col xs={4}>
                    <Cart />
                </Col>
            </Row>
        </Grid>
    );
};
