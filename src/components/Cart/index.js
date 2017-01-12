import React from 'react';
import {
    Alert,
    Badge,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default ({
    items,
    itemCount
}) => (
    <div>
        <h2>
            Cart <Badge>{itemCount}</Badge>
        </h2>

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
    </div>
);
