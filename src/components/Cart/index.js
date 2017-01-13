import React from 'react';
import {
    Alert,
    Badge,
    Button,
    Col,
    ListGroup,
    ListGroupItem,
    Panel,
    Row,
    Table
} from 'react-bootstrap';

import QuantityPicker from '../../containers/CartQuantityPicker';

export default ({
    items,
    itemCount,
    subTotal,
    taxes,
    total,
    completeOrder
}) => (
    <Panel
        bsStyle="primary"
        header={
            <span>
                My Cart&nbsp;<Badge>{itemCount}</Badge>
            </span>
        }
        footer={
            itemCount > 0 &&
                <div>
                    <Table className="text-right">
                        <tr>
                            <td>
                                Subtotal:
                            </td>
                            <td
                                width="30%"
                            >
                                ${Number(subTotal).toLocaleString('en', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2
                                })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Taxes:
                            </td>
                            <td>
                                ${Number(taxes).toLocaleString('en', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2
                                })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Total:
                            </td>
                            <td>
                                <strong>${Number(total).toLocaleString('en', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2
                                })}</strong>
                            </td>
                        </tr>
                    </Table>
                    <hr />
                    <Button
                        block
                        bsSize="large"
                        bsStyle="success"
                        onClick={completeOrder}
                    >
                        Proceeed to Checkout &rarr;
                    </Button>
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
                                    xs={4}
                                >
                                    {product.name}
                                </Col>
                                <Col
                                    className="text-right"
                                    xs={6}
                                >
                                    <QuantityPicker
                                        id={product.id}
                                    />
                                </Col>
                                <Col
                                    className="text-right"
                                    xs={1}
                                >
                                ${Number(product.price).toLocaleString('en', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2
                                })}
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
        }
    </Panel>
);
