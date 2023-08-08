import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import reportWebVitals from './reportWebVitals';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//A função render é utilizada para colocar os import na tela
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//Utilizado para medir performance da nossa aplicação
reportWebVitals();
