import React from 'react';

const Me = () => {
    return (
        <div>
            <h2>Me</h2>
            <p>Hitpoints: </p>
            <button onClick={() => console.log("You Attacked")}>Attack</button>
        </div>
    );
}

export default Me;
