import React from 'react';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
                <h1>React: Use Default Props</h1>
                <p>Shopping cart component</p>
            </div>
        );
    }
}

ShoppingCart.defaultProps = {
    items: 0
}

export default ShoppingCart;
