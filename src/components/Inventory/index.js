import React from 'react';
import {
    Alert,
    Button,
    Table
} from 'react-bootstrap';

import styles from './styles.css';

export default ({
    adjustQuantity,
    products,
    removeItem
}) => (
    <div>
        {
            products.length === 0 &&
                <Alert
                    bsSize="small"
                    bsStyle="info"
                >
                    No items available for purchase
                </Alert>
        }

        <Table
            bordered
            hover
            striped
            verticalAlign="middle"
        >
            <tbody>
                {products.map((product, i) => (
                    <tr key={i}>
                        <td>
                            {product.id}
                        </td>
                        <td
                            width="67%"
                        >
                            {product.name}
                        </td>
                        <td>
                            ${Number(product.price).toLocaleString('en', {
                                style: 'decimal',
                                minimumFractionDigits: 2
                            })}
                        </td>
                        <td
                            className="text-right"
                        >
                            <Button
                                bsStyle="primary"
                                className={styles.button}
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
                                className={styles.button}
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
    </div>
);
