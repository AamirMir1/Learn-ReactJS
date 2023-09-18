import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Challenge Accepted:

  // 1: Create a react app from scratch
  // 2: Add one h1 element in it
  // 3: Add one p element in it
  // 4: Add list of favourite 5 Netflix Series in it using an order list

  <>
    <h1>Website By Aamir</h1>
    <p>List of 5 favourite netflix series</p>
    <ol>
      <li>Farcry 6</li>
      <li>The Witness</li>
      <li>Spider Man Shattered Dimentions</li>
      <li>Prototype 2</li>
      <li>GTA Online</li>
    </ol>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
