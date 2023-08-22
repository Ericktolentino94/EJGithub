import React from 'react';

const You = ({handleDecrement, handleIncrement, quantity}) => {
    return (
        <div>
              <h2>You</h2>
            <p>Hitpoints: {quantity}</p>
            <button onClick={handleIncrement}>Attack</button>
        </div>
    );
}

export default You;
