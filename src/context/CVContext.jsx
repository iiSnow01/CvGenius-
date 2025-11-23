import React, { createContext, useContext, useState } from 'react';
import { userProfile } from '../data/userProfile';

const CVContext = createContext();

export const useCV = () => useContext(CVContext);

const initialData = {
    personalInfo: {
        fullName: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
        linkedin: '',
        website: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: []
};

const mockLinkedInData = {
    personalInfo: {
        fullName: 'Alex Morgan',
        title: 'Senior Product Designer',
        email: 'alex.morgan@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        summary: 'Passionate product designer with 8+ years of experience building digital products for global brands. Expert in UI/UX, design systems, and user research.',
        linkedin: 'linkedin.com/in/alexmorgan',
        website: 'alexmorgan.design'
    },
    experience: [
        {
            id: 1,
            company: 'TechFlow Inc.',
            position: 'Senior Product Designer',
            startDate: '2021-03',
            endDate: 'Present',
            description: 'Leading the design system team and overseeing product design for the core platform. Improved user retention by 15% through UX optimizations.'
        },
        {
            id: 2,
            company: 'Creative Studio',
            position: 'UX Designer',
            startDate: '2018-06',
            endDate: '2021-02',
            description: 'Collaborated with cross-functional teams to deliver award-winning web and mobile applications for clients in fintech and healthcare.'
        }
    ],
    education: [
        {
            id: 1,
            school: 'California College of the Arts',
            degree: 'BFA in Interaction Design',
            startDate: '2014',
            endDate: '2018',
            description: 'Graduated with High Honors. President of the Design Club.'
        }
    ],
    skills: ['Figma', 'React', 'Design Systems', 'Prototyping', 'User Research', 'HTML/CSS', 'Motion Design'],
    projects: [
        {
            id: 1,
            name: 'E-Commerce Redesign',
            description: 'Complete overhaul of a major e-commerce platform resulting in a 20% increase in conversion rate.',
            link: 'behance.net/project1'
        }
    ]
};

const mockProfiles = {
    default: mockLinkedInData,
    developer: {
        personalInfo: {
            title: 'Senior Software Engineer',
            summary: 'Full-stack developer with a passion for building scalable web applications. Experienced in React, Node.js, and cloud architecture.',
        },
        experience: [
            {
                id: 1,
                company: 'Tech Giants Corp',
                position: 'Senior Frontend Engineer',
                startDate: '2020-01',
                endDate: 'Present',
                description: 'Architected the new client-facing dashboard using React and GraphQL. Improved load times by 40%.'
            },
            {
                id: 2,
                company: 'StartupX',
                position: 'Full Stack Developer',
                startDate: '2017-05',
                endDate: '2019-12',
                description: 'Built the MVP from scratch using MERN stack. Scaled the application to 100k+ users.'
            }
        ],
        skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'GraphQL']
    },
    manager: {
        personalInfo: {
            title: 'Product Manager',
            summary: 'Strategic product leader with a track record of delivering successful products. Expert in agile methodologies and cross-functional team leadership.',
        },
        experience: [
            {
                id: 1,
                company: 'Innovate Solutions',
                position: 'Lead Product Manager',
                startDate: '2019-03',
                endDate: 'Present',
                description: 'Led the roadmap for the flagship SaaS product. Increased ARR by 25% year-over-year.'
            }
        ],
        skills: ['Product Strategy', 'Agile/Scrum', 'User Research', 'Data Analysis', 'Stakeholder Management']
    },
    amine: userProfile
};

export const CVProvider = ({ children }) => {
    const [cvData, setCvData] = useState(initialData);
    const [isLinkedInConnected, setIsLinkedInConnected] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState('modern');

    const updatePersonalInfo = (field, value) => {
        setCvData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value }
        }));
    };

    const addExperience = () => {
        setCvData(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                { id: Date.now(), company: '', position: '', startDate: '', endDate: '', description: '' }
            ]
        }));
    };

    const updateExperience = (id, field, value) => {
        setCvData(prev => ({
            ...prev,
            experience: prev.experience.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const removeExperience = (id) => {
        setCvData(prev => ({
            ...prev,
            experience: prev.experience.filter(exp => exp.id !== id)
        }));
    };

    const connectLinkedIn = (url) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let name = 'Alex Morgan';
                let username = 'alexmorgan';
                let selectedProfile = mockProfiles.default;

                if (url) {
                    try {
                        const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                        const pathParts = urlObj.pathname.split('/').filter(p => p);
                        if (pathParts.length > 0) {
                            const possibleUsername = pathParts[pathParts.length - 1] === 'in' ? pathParts[pathParts.length] : pathParts[pathParts.length - 1];
                            if (possibleUsername) {
                                username = possibleUsername;
                                name = possibleUsername.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

                                // Smart selection logic
                                const lowerUsername = username.toLowerCase();
                                if (lowerUsername.includes('amine') || lowerUsername.includes('aguilal')) {
                                    selectedProfile = mockProfiles.amine;
                                    name = selectedProfile.personalInfo.fullName;
                                } else if (lowerUsername.includes('dev') || lowerUsername.includes('eng') || lowerUsername.includes('code')) {
                                    selectedProfile = { ...mockProfiles.default, ...mockProfiles.developer };
                                } else if (lowerUsername.includes('manager') || lowerUsername.includes('product') || lowerUsername.includes('lead')) {
                                    selectedProfile = { ...mockProfiles.default, ...mockProfiles.manager };
                                }
                            }
                        }
                    } catch (e) {
                        console.error("Invalid URL", e);
                    }
                }

                const scrapedData = {
                    ...selectedProfile,
                    personalInfo: {
                        ...selectedProfile.personalInfo,
                        fullName: name,
                        linkedin: url || `linkedin.com/in/${username}`,
                        email: selectedProfile.personalInfo.email || `${username.replace(/-/g, '.')}@example.com`
                    }
                };

                setCvData(scrapedData);
                setIsLinkedInConnected(true);
                resolve();
            }, 2000);
        });
    };

    return (
        <CVContext.Provider value={{
            cvData,
            setCvData,
            updatePersonalInfo,
            addExperience,
            updateExperience,
            removeExperience,
            isLinkedInConnected,
            connectLinkedIn,
            selectedTemplate,
            setSelectedTemplate
        }}>
            {children}
        </CVContext.Provider>
    );
};
