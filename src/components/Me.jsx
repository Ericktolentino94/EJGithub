import React from 'react';

const Me = ({handleDecrement, handleIncrement, quantity}) => {

    return (
        <div>
            <h2>Me</h2>
            <p>Hitpoints: {quantity} </p>
            <button onClick={handleIncrement}>Attack</button>
        </div>
    );
}

export default Me;
