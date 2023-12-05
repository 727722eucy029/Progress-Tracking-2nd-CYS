import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import Lifecycle from './Lifecycle.js';
import reportWebVitals from './reportWebVitals';
//import Timer from './Timer.js';
//import Cc7 from './Cc7.js';
import Arrays from './Arrays.js';
import Hoc from './Hoc.js';
import Validation from './Validation.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
   
    {/*<Lifecycle />
<Cc7 />*/}
    <Arrays />
    <Hoc />
    <Validation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
