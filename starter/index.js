import React from 'react';
import ReactDOM from 'react-dom';
console.log("HELLO REACT");

//const elementReact = React.createElement('div', null,'React element!');
const elementReact = <div>This is a react element !!</div>

ReactDOM.render(elementReact, document.getElementById('root'));