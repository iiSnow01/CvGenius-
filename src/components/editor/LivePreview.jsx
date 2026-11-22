import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useCV } from '../../context/CVContext';
import { Printer } from 'lucide-react';
import ModernTemplate from '../templates/ModernTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';

const LivePreview = () => {
    const { cvData, selectedTemplate, setSelectedTemplate } = useCV();
    const contentRef = useRef(null);

    const handlePrint = useReactToPrint({
        contentRef,
        pageStyle: `
            @page { size: A4; margin: 0; }
            @media print {
                html, body { margin: 0; padding: 0; }
                body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
            }
        `,
        documentTitle: `${cvData.personalInfo.fullName || 'CV'}_Resume`,
    });

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'creative':
                return <CreativeTemplate data={cvData} />;
            case 'modern':
            default:
                return <ModernTemplate data={cvData} />;
        }
    };

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Toolbar */}
            <div className="glass-panel" style={{
                marginBottom: '1rem',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 'var(--radius-md)'
            }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => setSelectedTemplate('modern')}
                        className={selectedTemplate === 'modern' ? 'btn-primary' : 'btn-secondary'}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                    >
                        Modern
                    </button>
                    <button
                        onClick={() => setSelectedTemplate('creative')}
                        className={selectedTemplate === 'creative' ? 'btn-primary' : 'btn-secondary'}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                    >
                        Creative
                    </button>
                </div>

                <button type="button" onClick={() => handlePrint()} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Printer size={18} aria-hidden="true" /> Print / Save as PDF
                </button>
            </div>

            {/* Preview Area */}
            <div style={{ flex: 1, overflowY: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', background: '#555', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '210mm', minHeight: '297mm', background: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}>
                    <div ref={contentRef} style={{ height: '100%' }}>
                        {renderTemplate()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivePreview;
