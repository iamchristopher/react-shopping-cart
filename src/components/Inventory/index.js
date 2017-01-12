import React from 'react';
import {
    Button,
    Table
} from 'react-bootstrap';

export default ({
    adjustQuantity,
    products,
    removeItem
}) => (
    <Table
        bordered
        hover
        striped
    >
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, i) => (
                <tr key={i}>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        ${Number(product.price).toLocaleString('en', {
                            style: 'decimal',
                            minimumFractionDigits: 2
                        })}
                    </td>
                    <td>
                        <Button
                            bsStyle="primary"
                            disabled={product.quantityInCart >= product.quantityOnHand}
                            onClick={() => adjustQuantity({
                                id: product.id,
                                quantity: 1
                            })}
                        >
                            Add to cart
                        </Button>
                        <Button
                            bsStyle="danger"
                            onClick={() => removeItem({
                                id: product.id
                            })}
                        >
                            Remove
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);
