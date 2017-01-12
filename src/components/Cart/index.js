import React from 'react';
import {
    Alert,
    Badge,
    Col,
    ListGroup,
    ListGroupItem,
    Panel,
    Row
} from 'react-bootstrap';

import QuantityPicker from '../../containers/CartQuantityPicker';

export default ({
    items,
    itemCount,
    total
}) => (
    <Panel
        bsStyle="primary"
        header={
            <span>
                My Cart&nbsp;<Badge>{itemCount}</Badge>
            </span>
        }
        footer={
            <div className="clearfix">
            <span className="pull-right clearfix">
                Total: ${Number(total).toLocaleString('en', {
                    style: 'decimal',
                    minimumFractionDigits: 2
                })}
            </span>
        </div>
        }
    >
        {
            itemCount === 0 &&
                <Alert
                    bsSize="small"
                    bsStyle="info"
                >
                    No items in cart
                </Alert>
        }

        {
            itemCount > 0 &&
                <ListGroup
                    fill
                >
                    {items.map((product, i) => (
                        <ListGroupItem key={i}>
                            <Row>
                                <Col
                                    xs={5}
                                >
                                    {product.name}<br />
                                    ${Number(product.price).toLocaleString('en', {
                                        style: 'decimal',
                                        minimumFractionDigits: 2
                                    })}
                                </Col>
                                <Col
                                    xs={7}
                                >
                                    <QuantityPicker
                                        id={product.id}
                                    />
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
        }
    </Panel>
);
