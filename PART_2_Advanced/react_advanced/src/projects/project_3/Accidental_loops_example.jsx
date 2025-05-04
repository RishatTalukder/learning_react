//re-render loop example
import React, { useState } from 'react';

const AccidentalLoopsExample = () => {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        setCount(count + 1);
        setIsActive(!isActive);
    };

    handleClick();
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>
            {isActive ? 'Deactivate' : 'Activate'}
        </button>
        </div>
    );
    }
export default AccidentalLoopsExample;


