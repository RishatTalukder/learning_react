// importing the react library
import React from 'react';
import ReactDOM from 'react-dom';

// creating a react component to render to the DOM
const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

// rendering the component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));