import React, { useState } from 'react';

// quantity.js

// Ejemplo de un componente Quantity en React

const Quantity = ({ initial = 1, min = 1, max = 10 }) => {
    const [quantity, setQuantity] = useState(initial); 

    const increase = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={decrease} disabled={quantity === min}>
                -
            </button>
            <span>{quantity}</span>
            <button onClick={increase} disabled={quantity === max}>
                +
            </button>
        </div>
    );
};

export default Quantity;