
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/dark-mode-fix.css'; // Import dark mode fix
import { initializePerformanceOptimizations } from './utils/performance';

// Initialize performance optimizations
initializePerformanceOptimizations();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
