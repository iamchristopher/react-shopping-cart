import React from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default ({ products }) => (
    <div>
        <h2>Inventory</h2>
        <ListGroup>
            {products.map(product => (
                <ListGroupItem>
                    {product.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
);
