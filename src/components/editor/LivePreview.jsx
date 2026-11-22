import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useCV } from '../../context/CVContext';
import { Printer } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { resumeTemplates } from '../templates/resumeTemplates';

const LivePreview = () => {
    const { cvData, selectedTemplate, setSelectedTemplate } = useCV();
    const [searchParams, setSearchParams] = useSearchParams();
    const contentRef = useRef(null);
    const requested = searchParams.get('template');
    const activeTemplate = resumeTemplates.find(template => template.id === requested)
        ?? resumeTemplates.find(template => template.id === selectedTemplate)
        ?? resumeTemplates[0];
    const ActiveTemplate = activeTemplate.Component;

    const chooseTemplate = (id) => {
        setSelectedTemplate(id);
        setSearchParams(previous => {
            const next = new URLSearchParams(previous);
            next.set('template', id);
            return next;
        }, { replace: true });
    };

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
                    {resumeTemplates.map(({ id, name }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => chooseTemplate(id)}
                            aria-pressed={activeTemplate.id === id}
                            className={activeTemplate.id === id ? 'btn-primary' : 'btn-secondary'}
                            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                <button type="button" onClick={() => handlePrint()} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Printer size={18} aria-hidden="true" /> Print / Save as PDF
                </button>
            </div>

            {/* Preview Area */}
            <div style={{ flex: 1, overflowY: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', background: '#555', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '210mm', minHeight: '297mm', background: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}>
                    <div ref={contentRef} style={{ height: '100%' }}>
                        <ActiveTemplate data={cvData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivePreview;
