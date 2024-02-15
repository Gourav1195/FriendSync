import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; 
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import { QuerryProvider } from './lib/react-query/QuerryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QuerryProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QuerryProvider>
    </BrowserRouter>
)

