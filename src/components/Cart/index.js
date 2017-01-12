import React from 'react';
import {
    Alert,
    Badge,
    ListGroup,
    ListGroupItem,
    Panel,
    Row
} from 'react-bootstrap';

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
                <ListGroup>
                    {items.map((product, i) => (
                        <ListGroupItem key={i}>
                            {product.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
        }
    </Panel>
);
