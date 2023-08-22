import React from 'react';

const You = () => {
    return (
        <div>
              <h2>You</h2>
            <p>Hitpoints: </p>
            <button onClick={() => console.log("You Attacked")}>Attack</button>
        </div>
    );
}

export default You;
