import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel" style={{ margin: '1rem', borderRadius: 'var(--radius-lg)' }}>
            <div className="container" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <FileText size={24} />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text)' }}>
                        CV<span className="gradient-text">Genius</span>
                    </span>
                </Link>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'var(--color-text)', fontWeight: '500' }}>Home</Link>
                    <Link to="/editor" style={{ textDecoration: 'none', color: 'var(--color-text)', fontWeight: '500' }}>Create CV</Link>
                    <Link to="/templates" style={{ textDecoration: 'none', color: 'var(--color-text)', fontWeight: '500' }}>Templates</Link>
                </div>

                <a href="https://github.com/iiSnow01/CvGenius-" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                    <Github size={18} />
                    <span>Star on GitHub</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
