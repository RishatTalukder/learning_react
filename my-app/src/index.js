// importing the react library
import React from 'react';
import {createRoot} from 'react-dom/client';

// creating a react component to render to the DOM
const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

// rendering the component to the DOM
const root = createRoot(document.getElementById('root'));
root.render(<App />);
