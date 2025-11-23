import React from 'react';

const ModernTemplate = ({ data }) => {
    const { personalInfo, experience, education, skills, projects } = data;

    return (
        <div style={{ padding: '3rem', background: 'white', height: '100%', color: '#333' }}>
            <div style={{ borderBottom: '2px solid var(--color-primary)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#1a1a1a', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                    {personalInfo.fullName || 'Your Name'}
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '500', marginBottom: '1rem' }}>
                    {personalInfo.title || 'Professional Title'}
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.875rem', color: '#666' }}>
                    {personalInfo.email && <span>{personalInfo.email}</span>}
                    {personalInfo.phone && <span>• {personalInfo.phone}</span>}
                    {personalInfo.location && <span>• {personalInfo.location}</span>}
                    {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
                </div>
            </div>

            {personalInfo.summary && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: '#888' }}>Profile</h3>
                    <p style={{ lineHeight: '1.6' }}>{personalInfo.summary}</p>
                </div>
            )}

            {experience.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: '#888' }}>Experience</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {experience.map(exp => (
                            <div key={exp.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{exp.position}</h4>
                                    <span style={{ fontWeight: '600', color: '#666' }}>
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <div style={{ color: 'var(--color-primary)', fontWeight: '500', marginBottom: '0.5rem' }}>{exp.company}</div>
                                <p style={{ fontSize: '0.95rem', color: '#555' }}>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {education.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: '#888' }}>Education</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {education.map(edu => (
                            <div key={edu.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{edu.school}</h4>
                                    <span style={{ fontWeight: '600', color: '#666' }}>
                                        {edu.startDate} - {edu.endDate}
                                    </span>
                                </div>
                                <div style={{ color: 'var(--color-primary)', fontWeight: '500', marginBottom: '0.5rem' }}>{edu.degree}</div>
                                <p style={{ fontSize: '0.95rem', color: '#555' }}>{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {skills.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: '#888' }}>Skills</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {skills.map((skill, index) => (
                            <span key={index} style={{ background: '#f0f4f8', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.9rem', color: '#333' }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {projects.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: '#888' }}>Projects</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {projects.map(proj => (
                            <div key={proj.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{proj.name}</h4>
                                    {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>View Project</a>}
                                </div>
                                <p style={{ fontSize: '0.95rem', color: '#555' }}>{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModernTemplate;
