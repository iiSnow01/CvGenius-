import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CVProvider } from './context/CVContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CVProvider>
        <App />
      </CVProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
