import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './app/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
