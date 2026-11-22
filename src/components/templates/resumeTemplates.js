import ModernTemplate from './ModernTemplate';
import CreativeTemplate from './CreativeTemplate';

export const resumeTemplates = [
    { id: 'modern', name: 'Modern', description: 'A single-column layout for a straightforward reading order.', Component: ModernTemplate },
    { id: 'creative', name: 'Creative', description: 'A two-column layout with a sidebar for skills and education.', Component: CreativeTemplate },
];
