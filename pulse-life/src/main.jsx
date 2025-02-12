import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import AuthProvider from './components/AuthProvider'; // Ensure the path is correct

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
