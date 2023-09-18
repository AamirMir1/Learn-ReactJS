import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  // First method to render multiple elements in ReactDOM.render()

  // <div>
  //   <h1>This is a h1 tag</h1>
  //   <h2>This is a h2 tag</h2>
  //   <h3>This is a h3 tag</h3>
  // </div>
  
  // Second method to render multiple elements in ReactDom.render() 
  [
    <h1>This is a h1 tag</h1>,
    <h2>This is a h2 tag</h2>,
    <h3>This is a h3 tag</h3>
  ]

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
