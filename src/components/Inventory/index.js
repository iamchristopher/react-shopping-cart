import React from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default ({ products }) => (
    <div>
        <h2>Inventory</h2>
        <ListGroup>
            {products.map((product, i) => (
                <ListGroupItem key={i}>
                    {product.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
);
