import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PizzaParlor } from './components/PizzaParlor.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    {/* This looks like an HTML element, but it's JS, and we are calling a function */}
    <PizzaParlor />
  </BrowserRouter>
);
