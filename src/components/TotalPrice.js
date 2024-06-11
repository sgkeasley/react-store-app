import React from 'react';

// Create a component to display the total price of items
export default function TotalPrice(prop) {

    return (
        <div>
            <h2 id="total_price">Total price: £{parseFloat(prop.price).toFixed(2)}</h2>
        </div>
    );
}