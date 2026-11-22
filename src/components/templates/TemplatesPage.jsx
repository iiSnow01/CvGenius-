import { Link } from 'react-router-dom';
import { useCV } from '../../context/CVContext';
import { resumeTemplates } from './resumeTemplates';
import './templates.css';

const sampleResume = {
    personalInfo: {
        fullName: 'Alex Example',
        title: 'Frontend Developer',
        email: 'alex@example.com',
        summary: 'Builds accessible web interfaces and maintains reusable components.',
    },
    experience: [
        {
            id: 'sample-role',
            position: 'Frontend Developer',
            company: 'Example Studio',
            startDate: '2023',
            endDate: 'Present',
            description: 'Built a responsive dashboard and maintained its component library.',
        },
    ],
    education: [
        {
            id: 'sample-education',
            school: 'Example College',
            degree: 'Computer Science',
            startDate: '2019',
            endDate: '2023',
        },
    ],
    skills: ['React', 'CSS', 'Git'],
    projects: [],
};

export default function TemplatesPage() {
    const { setSelectedTemplate } = useCV();

    return (
        <section className="container template-gallery" aria-labelledby="gallery-title">
            <h1 id="gallery-title">Choose a résumé template</h1>
            <div className="template-gallery-grid">
                {resumeTemplates.map(({ id, name, description, Component }) => (
                    <article className="template-option" key={id}>
                        <div className="template-preview" aria-hidden="true" inert>
                            <div className="template-preview-sheet"><Component data={sampleResume} /></div>
                        </div>
                        <div className="template-option-body">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <Link
                                className="btn-primary"
                                to={'/editor?template=' + id}
                                onClick={() => setSelectedTemplate(id)}
                            >
                                Use {name}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
