import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
window.addEventListener('scroll', () => {
        const scrollOnY = window.scrollY;  
        console.log( typeof(scrollOnY));

        if (Math.ceil(scrollOnY) === 20) {
            document.body.style.backgroundColor = 'black';
        }
    })
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//! If you want to start measuring performance in your app, pass a function
//! to log results (for example: reportWebVitals(console.log))
//! or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
