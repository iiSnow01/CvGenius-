import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '2rem' }}>
                {children}
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'var(--color-text-muted)',
                borderTop: '1px solid var(--color-border)'
            }}>
                <div className="container">
                    <p>© {new Date().getFullYear()} CVGenius. Built with React & Vite.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
