import React from 'react';
import App from './App.tsx';
import './assets/styles/index.css';
import ReactDOM from 'react-dom/client';
import ReactQueryProvider from 'lib/reactQuery/providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>
);
