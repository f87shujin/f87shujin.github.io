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
            demo: null,
            date: "2024",
            role: "Full-Stack Developer"
        },
        'portfolio': {
            title: "Personal Portfolio Website",
            tagline: "A modern, responsive portfolio showcasing my projects and skills",
            description: "A dynamic single-page application built with React that showcases my professional work, technical skills, and career aspirations. Features a dark theme design with smooth animations, interactive components, and detailed project pages powered by React Router.",
            technologies: ["React", "JavaScript", "HTML5", "CSS3", "React Router", "GitHub Pages"],
            features: [
                "Modern dark theme with professional color scheme",
                "Fully responsive design optimized for all devices",
                "Interactive skills section with technology icons",
                "Dynamic project showcase with detail pages",
                "Smooth scrolling and CSS transitions",
                "Custom styled components and animations",
                "SEO-optimized with meta tags and descriptions",
                "Deployed on GitHub Pages with automated CI/CD"
            ],
            challenges: [
                {
                    title: "React Router Integration",
                    description: "Implemented HashRouter to enable client-side routing on GitHub Pages while maintaining clean URLs and proper navigation."
                },
                {
                    title: "CSS Architecture",
                    description: "Designed a modular CSS system with separate stylesheets for each component, ensuring maintainability and consistent theming across all pages."
                },
                {
                    title: "Performance Optimization",
                    description: "Optimized component rendering and implemented code splitting to ensure fast load times and smooth user experience."
                }
            ],
            github: "https://github.com/f87shujin/f87shujin.github.io",
            demo: "https://f87shujin.github.io",
            date: "2025",
            role: "Front-End Developer & Designer"
        },
        'intelligent-recipes': {
            title: "Intelligent Recipes - AI-Powered Recipe Assistant",
            tagline: "Smart recipe management with AI-driven ingredient recognition and suggestions",
            description: "An intelligent recipe application that leverages AI and computer vision to revolutionize cooking. Using YOLOv8 for ingredient detection and AI language models for recipe generation, this app helps users discover recipes based on available ingredients and manage their recipe collection effortlessly.",
            technologies: ["Python", "Flask", "YOLOv8", "AI/ML", "HTML5", "CSS3", "Computer Vision", "Ollama"],
            features: [
                "AI-powered recipe creation - Input recipe name and AI automatically gathers data and adds to database",
                "Ingredient recognition - Upload image or provide text list of ingredients to get matching recipes",
                "Smart recipe suggestions based on available ingredients",
                "Interactive AI chef chatbot for cooking questions and guidance",
                "Recipe database management with review and edit capabilities",
                "Computer vision integration using YOLOv8 for ingredient detection",
                "Natural language processing for recipe generation",
                "User-friendly interface for browsing and managing recipes"
            ],
            challenges: [
                {
                    title: "AI Model Integration",
                    description: "Successfully integrated YOLOv8 for ingredient recognition and custom AI models for recipe generation, ensuring accurate detection and relevant recipe suggestions."
                },
                {
                    title: "Real-time Image Processing",
                    description: "Optimized the image processing pipeline to handle ingredient detection in real-time while maintaining accuracy and performance."
                },
                {
                    title: "Conversational AI Implementation",
                    description: "Developed a chef-persona chatbot using Ollama that provides contextually relevant cooking advice and responds naturally to user queries."
                }
            ],
            github: "https://github.com/f87shujin/AI-Desert",
            demo: null,
            date: "2024",
            role: "AI/ML Developer & Full-Stack Developer"
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
            <div className="details-wrapper">
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
        </div>
    );
}

export default ProjectDetails;
