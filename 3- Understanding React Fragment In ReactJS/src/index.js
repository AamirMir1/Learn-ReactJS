import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // About React Fragment:- It is use to insert multiple elements in ReactDom.render()
/*
  <React.Fragment>
    <h1>This is my h1 tag</h1>
    <h2>This is my h2 tag</h2>
    <h3>This is my h3 tag</h3>
  </React.Fragment>
*/

  // Shorthand for React.Fragment
    <>
    <h1>This is my h1 tag</h1>
    <h2>This is my h2 tag</h2>
    <h3>This is my h3 tag</h3>
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
