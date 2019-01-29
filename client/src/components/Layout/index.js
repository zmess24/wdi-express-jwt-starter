import React from 'react';
import Header from './Header';
import './Layout.css';

export default({ children }) => (
    <div>
        <Header />
        <main className="container">
            { children }
        </main>
    </div>
)