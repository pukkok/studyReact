import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Book from './chapter03/Book';
import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import SignUp from './Signup_test/SignUp';
import Calculator from './Temperature_test/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);


// 시계 돌릴때
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
