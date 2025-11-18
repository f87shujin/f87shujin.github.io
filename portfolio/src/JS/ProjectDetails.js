import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../CSS/ProjectDetails.css';

function ProjectDetails() {
    const { projectId } = useParams();
    
    const projectsInfo = {
        'elibrary': {
            title: "eLibrary - Online Bookstore Platform",
            tagline: "A comprehensive web-based bookstore management system",
            description: "eLibrary is a full-featured online bookstore that allows users to browse, search, and purchase books seamlessly. Built with PHP and MySQL, it provides a robust backend with a clean, intuitive frontend interface.",
            technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "AJAX"],
            features: [
                "User authentication and authorization system",
                "Advanced book search and filtering",
                "Shopping cart and checkout functionality",
                "Admin dashboard for inventory management",
                "Responsive design for mobile and desktop",
                "Real-time inventory updates",
                "Order history and tracking",
                "Secure payment integration ready"
            ],
            challenges: [
                {
                    title: "Database Optimization",
                    description: "Implemented efficient SQL queries and indexing to handle large book catalogs with fast search results."
                },
                {
                    title: "Session Management",
                    description: "Created a robust session handling system for shopping cart persistence and user authentication."
                },
                {
                    title: "Responsive Design",
                    description: "Ensured seamless experience across devices using CSS media queries and flexible layouts."
                }
            ],
            screenshots: [
                {
                    url: "https://via.placeholder.com/800x500/404040/e0e0e0?text=eLibrary+Homepage",
                    caption: "Homepage with featured books and categories"
                },
                {
                    url: "https://via.placeholder.com/800x500/404040/e0e0e0?text=Book+Details",
                    caption: "Detailed book information page"
                },
                {
                    url: "https://via.placeholder.com/800x500/404040/e0e0e0?text=Shopping+Cart",
                    caption: "Interactive shopping cart with real-time updates"
                },
                {
                    url: "https://via.placeholder.com/800x500/404040/e0e0e0?text=Admin+Dashboard",
                    caption: "Admin panel for managing inventory"
                }
            ],
            github: "https://github.com/f87shujin/eLibrary",
            demo: null, // Add demo link if available
            date: "2024",
            role: "Full-Stack Developer"
        }
    };

    const project = projectsInfo[projectId];

    if (!project) {
        return (
            <div className="project-details-container">
                <div className="not-found">
                    <h1>Project Not Found</h1>
                    <Link to="/" className="back-button">← Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-details-container">
            <Link to="/" className="back-button">← Back to Portfolio</Link>
            
            <header className="project-header">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-tagline">{project.tagline}</p>
                <div className="project-meta">
                    <span className="meta-item">📅 {project.date}</span>
                    <span className="meta-item">👤 {project.role}</span>
                </div>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button github-button">
                        <i className="devicon-github-original"></i> View on GitHub
                    </a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-button demo-button">
                            🚀 Live Demo
                        </a>
                    )}
                </div>
            </header>

            <section className="project-section">
                <h2 className="section-title">Overview</h2>
                <p className="section-content">{project.description}</p>
            </section>

            <section className="project-section">
                <h2 className="section-title">Technologies Used</h2>
                <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2 className="section-title">Key Features</h2>
                <ul className="features-list">
                    {project.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                            <span className="feature-icon">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="project-section">
                <h2 className="section-title">Screenshots</h2>
                <div className="screenshots-grid">
                    {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="screenshot-item">
                            <img src={screenshot.url} alt={screenshot.caption} />
                            <p className="screenshot-caption">{screenshot.caption}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2 className="section-title">Challenges & Solutions</h2>
                <div className="challenges-list">
                    {project.challenges.map((challenge, index) => (
                        <div key={index} className="challenge-item">
                            <h3 className="challenge-title">{challenge.title}</h3>
                            <p className="challenge-description">{challenge.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="project-footer">
                <Link to="/" className="back-button-large">← Back to All Projects</Link>
            </footer>
        </div>
    );
}

export default ProjectDetails;
