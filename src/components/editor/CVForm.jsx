import React, { useState } from 'react';
import { useCV } from '../../context/CVContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, GraduationCap, Code, FolderGit2, Plus, Trash2 } from 'lucide-react';

const tabs = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
];

const CVForm = () => {
    const { cvData, setCvData, updatePersonalInfo, addExperience, updateExperience, removeExperience } = useCV();
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', overflowX: 'auto' }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: 1,
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: 'none',
                            background: activeTab === tab.id ? 'var(--color-primary-light)' : 'transparent',
                            color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            borderBottom: activeTab === tab.id ? '2px solid var(--color-primary)' : '2px solid transparent',
                            transition: 'all 0.2s',
                            minWidth: '80px'
                        }}
                    >
                        <tab.icon size={20} />
                        <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'personal' && (
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                <h2 style={{ marginBottom: '1rem' }}>Personal Information</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <InputGroup label="Full Name" value={cvData.personalInfo.fullName} onChange={e => updatePersonalInfo('fullName', e.target.value)} />
                                    <InputGroup label="Job Title" value={cvData.personalInfo.title} onChange={e => updatePersonalInfo('title', e.target.value)} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <InputGroup label="Email" value={cvData.personalInfo.email} onChange={e => updatePersonalInfo('email', e.target.value)} />
                                    <InputGroup label="Phone" value={cvData.personalInfo.phone} onChange={e => updatePersonalInfo('phone', e.target.value)} />
                                </div>
                                <InputGroup label="Location" value={cvData.personalInfo.location} onChange={e => updatePersonalInfo('location', e.target.value)} />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Professional Summary</label>
                                    <textarea
                                        value={cvData.personalInfo.summary}
                                        onChange={e => updatePersonalInfo('summary', e.target.value)}
                                        rows={4}
                                        style={{
                                            padding: '0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border)',
                                            fontFamily: 'inherit',
                                            resize: 'vertical'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <InputGroup label="LinkedIn URL" value={cvData.personalInfo.linkedin} onChange={e => updatePersonalInfo('linkedin', e.target.value)} />
                                    <InputGroup label="Website" value={cvData.personalInfo.website} onChange={e => updatePersonalInfo('website', e.target.value)} />
                                </div>
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2>Experience</h2>
                                    <button onClick={addExperience} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Plus size={16} /> Add Position
                                    </button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {cvData.experience.map((exp, index) => (
                                        <div key={exp.id} style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', position: 'relative' }}>
                                            <button
                                                onClick={() => removeExperience(exp.id)}
                                                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'red', background: 'none', border: 'none', opacity: 0.5, cursor: 'pointer' }}
                                            >
                                                <Trash2 size={18} />
                                            </button>

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                                <InputGroup label="Company" value={exp.company} onChange={e => updateExperience(exp.id, 'company', e.target.value)} />
                                                <InputGroup label="Position" value={exp.position} onChange={e => updateExperience(exp.id, 'position', e.target.value)} />
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                                <InputGroup label="Start Date" type="text" placeholder="YYYY-MM" value={exp.startDate} onChange={e => updateExperience(exp.id, 'startDate', e.target.value)} />
                                                <InputGroup label="End Date" type="text" placeholder="Present or YYYY-MM" value={exp.endDate} onChange={e => updateExperience(exp.id, 'endDate', e.target.value)} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Description</label>
                                                <textarea
                                                    value={exp.description}
                                                    onChange={e => updateExperience(exp.id, 'description', e.target.value)}
                                                    rows={3}
                                                    style={{
                                                        padding: '0.75rem',
                                                        borderRadius: 'var(--radius-md)',
                                                        border: '1px solid var(--color-border)',
                                                        fontFamily: 'inherit',
                                                        resize: 'vertical'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {cvData.experience.length === 0 && (
                                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                            No experience added yet.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2>Education</h2>
                                    <button onClick={() => {
                                        const newEdu = { id: Date.now(), school: '', degree: '', startDate: '', endDate: '', description: '' };
                                        setCvData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
                                    }} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Plus size={16} /> Add Education
                                    </button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {cvData.education.map((edu) => (
                                        <div key={edu.id} style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', position: 'relative' }}>
                                            <button
                                                onClick={() => {
                                                    setCvData(prev => ({ ...prev, education: prev.education.filter(e => e.id !== edu.id) }));
                                                }}
                                                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'red', background: 'none', border: 'none', opacity: 0.5, cursor: 'pointer' }}
                                            >
                                                <Trash2 size={18} />
                                            </button>

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1rem' }}>
                                                <InputGroup label="School / University" value={edu.school} onChange={e => {
                                                    setCvData(prev => ({ ...prev, education: prev.education.map(item => item.id === edu.id ? { ...item, school: e.target.value } : item) }));
                                                }} />
                                                <InputGroup label="Degree / Major" value={edu.degree} onChange={e => {
                                                    setCvData(prev => ({ ...prev, education: prev.education.map(item => item.id === edu.id ? { ...item, degree: e.target.value } : item) }));
                                                }} />
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                                <InputGroup label="Start Date" placeholder="YYYY" value={edu.startDate} onChange={e => {
                                                    setCvData(prev => ({ ...prev, education: prev.education.map(item => item.id === edu.id ? { ...item, startDate: e.target.value } : item) }));
                                                }} />
                                                <InputGroup label="End Date" placeholder="YYYY" value={edu.endDate} onChange={e => {
                                                    setCvData(prev => ({ ...prev, education: prev.education.map(item => item.id === edu.id ? { ...item, endDate: e.target.value } : item) }));
                                                }} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Description</label>
                                                <textarea
                                                    value={edu.description}
                                                    onChange={e => {
                                                        setCvData(prev => ({ ...prev, education: prev.education.map(item => item.id === edu.id ? { ...item, description: e.target.value } : item) }));
                                                    }}
                                                    rows={3}
                                                    style={{
                                                        padding: '0.75rem',
                                                        borderRadius: 'var(--radius-md)',
                                                        border: '1px solid var(--color-border)',
                                                        fontFamily: 'inherit',
                                                        resize: 'vertical'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {cvData.education.length === 0 && (
                                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                            No education added yet.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div>
                                <h2 style={{ marginBottom: '1.5rem' }}>Skills</h2>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    <input
                                        type="text"
                                        placeholder="Add a skill (e.g. React, Design)..."
                                        id="skill-input"
                                        onKeyDown={e => {
                                            if (e.key === 'Enter') {
                                                const val = e.target.value.trim();
                                                if (val) {
                                                    setCvData(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                                    e.target.value = '';
                                                }
                                            }
                                        }}
                                        style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                                    />
                                    <button onClick={() => {
                                        const input = document.getElementById('skill-input');
                                        const val = input.value.trim();
                                        if (val) {
                                            setCvData(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                            input.value = '';
                                        }
                                    }} className="btn-primary">Add</button>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {cvData.skills.map((skill, index) => (
                                        <div key={index} style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '0.5rem 1rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                            {skill}
                                            <button onClick={() => {
                                                setCvData(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }));
                                            }} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'currentColor', display: 'flex', alignItems: 'center' }}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    {cvData.skills.length === 0 && (
                                        <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>No skills added yet.</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2>Projects</h2>
                                    <button onClick={() => {
                                        setCvData(prev => ({ ...prev, projects: [...prev.projects, { id: Date.now(), name: '', description: '', link: '' }] }));
                                    }} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Plus size={16} /> Add Project
                                    </button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {cvData.projects.map((proj) => (
                                        <div key={proj.id} style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', position: 'relative' }}>
                                            <button
                                                onClick={() => {
                                                    setCvData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== proj.id) }));
                                                }}
                                                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'red', background: 'none', border: 'none', opacity: 0.5, cursor: 'pointer' }}
                                            >
                                                <Trash2 size={18} />
                                            </button>

                                            <InputGroup label="Project Name" value={proj.name} onChange={e => {
                                                setCvData(prev => ({ ...prev, projects: prev.projects.map(p => p.id === proj.id ? { ...p, name: e.target.value } : p) }));
                                            }} />
                                            <InputGroup label="Link (Optional)" value={proj.link} onChange={e => {
                                                setCvData(prev => ({ ...prev, projects: prev.projects.map(p => p.id === proj.id ? { ...p, link: e.target.value } : p) }));
                                            }} />

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                                                <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>Description</label>
                                                <textarea
                                                    value={proj.description}
                                                    onChange={e => {
                                                        setCvData(prev => ({ ...prev, projects: prev.projects.map(p => p.id === proj.id ? { ...p, description: e.target.value } : p) }));
                                                    }}
                                                    rows={3}
                                                    style={{
                                                        padding: '0.75rem',
                                                        borderRadius: 'var(--radius-md)',
                                                        border: '1px solid var(--color-border)',
                                                        fontFamily: 'inherit',
                                                        resize: 'vertical'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {cvData.projects.length === 0 && (
                                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                            No projects added yet.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

const InputGroup = ({ label, value, onChange, type = 'text', placeholder }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                fontFamily: 'inherit',
                width: '100%'
            }}
        />
    </div>
);

export default CVForm;
