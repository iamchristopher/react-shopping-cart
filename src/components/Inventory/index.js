import React from 'react';
import {
    Button,
    Table
} from 'react-bootstrap';

export default ({ products }) => (
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
                        >
                            Add to cart
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);
