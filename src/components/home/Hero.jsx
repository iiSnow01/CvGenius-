import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, CheckCircle, Loader } from 'lucide-react';
import { useCV } from '../../context/CVContext';

const Hero = () => {
    const { connectLinkedIn } = useCV();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [linkedinUrl, setLinkedinUrl] = useState('');

    const handleConnect = async () => {
        if (!linkedinUrl) return;
        setIsLoading(true);
        await connectLinkedIn(linkedinUrl);
        setIsLoading(false);
        navigate('/editor');
    };

    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                        borderRadius: '2rem',
                        marginBottom: '1.5rem',
                        fontWeight: '600',
                        fontSize: '0.875rem'
                    }}>
                        <span style={{ display: 'block', width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }}></span>
                        AI-Powered Resume Builder
                    </div>

                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Craft Your Perfect <br />
                        <span className="gradient-text">Professional Story</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                        Import your LinkedIn profile or start from scratch. Create a stunning, ATS-friendly CV in minutes with our premium templates.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#0077b5' }}>
                                    <Linkedin size={20} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Paste LinkedIn Profile URL..."
                                    value={linkedinUrl}
                                    onChange={(e) => setLinkedinUrl(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem 0.75rem 3rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-border)',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <button
                                onClick={handleConnect}
                                disabled={isLoading || !linkedinUrl}
                                className="btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: (isLoading || !linkedinUrl) ? 0.7 : 1, whiteSpace: 'nowrap' }}
                            >
                                {isLoading ? <Loader className="animate-spin" size={20} /> : 'Import'}
                            </button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Or start from scratch:</span>
                            <Link to="/editor" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                Create Manually <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                        {['ATS-Friendly', 'Premium Templates', 'PDF Export'].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="var(--color-primary)" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div className="glass-panel" style={{ padding: '2rem', transform: 'rotate(-2deg)', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ddd' }}></div>
                            <div>
                                <div style={{ width: '200px', height: '24px', background: '#eee', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                                <div style={{ width: '150px', height: '16px', background: '#f5f5f5', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{ width: '100%', height: '12px', background: '#f5f5f5', borderRadius: '4px' }}></div>
                            ))}
                            <div style={{ width: '80%', height: '12px', background: '#f5f5f5', borderRadius: '4px' }}></div>
                        </div>
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        borderRadius: 'var(--radius-lg)',
                        opacity: 0.1,
                        transform: 'rotate(3deg)',
                        zIndex: 0
                    }}></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
