import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BasicDetails} from './basicComponents/basicDetails';
import {NarsimhaProf} from './basicComponents/narsimhaProfile';
//component-1

//component-2


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NarsimhaProf></NarsimhaProf>
    <BasicDetails></BasicDetails>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
