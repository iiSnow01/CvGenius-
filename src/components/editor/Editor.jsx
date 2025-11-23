import React from 'react';
import CVForm from './CVForm';
import LivePreview from './LivePreview';

const Editor = () => {
    return (
        <div className="container" style={{ height: 'calc(100vh - var(--header-height) - 4rem)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <CVForm />
            <div style={{ height: '100%', overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <LivePreview />
            </div>
        </div>
    );
};

export default Editor;
