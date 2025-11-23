import React from 'react';

const CreativeTemplate = ({ data }) => {
    const { personalInfo, experience, education, skills, projects } = data;

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', height: '100%', minHeight: '1000px' }}>
            {/* Sidebar */}
            <div style={{ background: '#2d3748', color: 'white', padding: '3rem 2rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem' }}>
                        {personalInfo.fullName || 'Your Name'}
                    </h1>
                    <p style={{ color: '#a0aec0', fontSize: '1.1rem' }}>
                        {personalInfo.title || 'Professional Title'}
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#cbd5e0' }}>
                    {personalInfo.email && <div>{personalInfo.email}</div>}
                    {personalInfo.phone && <div>{personalInfo.phone}</div>}
                    {personalInfo.location && <div>{personalInfo.location}</div>}
                    {personalInfo.website && <div>{personalInfo.website}</div>}
                </div>

                {skills.length > 0 && (
                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid #4a5568', paddingBottom: '0.5rem' }}>Skills</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {skills.map((skill, index) => (
                                <span key={index} style={{ background: '#4a5568', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {education.length > 0 && (
                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid #4a5568', paddingBottom: '0.5rem' }}>Education</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {education.map(edu => (
                                <div key={edu.id}>
                                    <div style={{ fontWeight: '700', color: 'white' }}>{edu.school}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#a0aec0' }}>{edu.degree}</div>
                                    <div style={{ fontSize: '0.85rem', color: '#718096' }}>{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div style={{ padding: '3rem', background: 'white' }}>
                {personalInfo.summary && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>About Me</h3>
                        <p style={{ color: '#4a5568', lineHeight: '1.7' }}>{personalInfo.summary}</p>
                    </div>
                )}

                {experience.length > 0 && (
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Experience</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <h4 style={{ fontSize: '1.2rem', color: '#2d3748', fontWeight: '700' }}>{exp.position}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#718096', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                        <span style={{ fontWeight: '600' }}>{exp.company}</span>
                                        <span>{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {projects.length > 0 && (
                    <div>
                        <h3 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Projects</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {projects.map(proj => (
                                <div key={proj.id}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.2rem', color: '#2d3748', fontWeight: '700' }}>{proj.name}</h4>
                                        {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#667eea' }}>View</a>}
                                    </div>
                                    <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreativeTemplate;
