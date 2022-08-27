import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
 <h1>order item</h1>
                <p>Selected items:{cart.length} </p>
                <h2>Shafinur</h2>
        </div>
    );
};

export default Cart;