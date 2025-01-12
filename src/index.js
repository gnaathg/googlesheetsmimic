import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you plan to add styles later, you can create this file
import App from './App';  // Ensure you have an App.js file
import {reportWebVitals} from './reportWebVitals';  // Optional for performance monitoring

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional for reporting web vitals
reportWebVitals();
