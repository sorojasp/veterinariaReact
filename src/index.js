import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';


const container = document.getElementById('root');

// Create *and* render a root with hydration.
const root = ReactDOMClient.createRoot(container);

// You can later update it.
root.render(<App tab="profile" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
