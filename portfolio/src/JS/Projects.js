import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Project.css';


function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "eLibrary",
            description: "A dynamic online bookstore platform where users can browse, search, and purchase books with an intuitive interface",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
            link: "https://github.com/f87shujin/eLibrary",
            detailsLink: "/project/elibrary",
            tech: ["PHP", "JavaScript", "HTML", "CSS"]
        },
        {
            id: 2,
            title: "Web Portfolio",
            description: "Modern responsive portfolio website built with React",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
            link: "https://f87shujin.github.io",
            tech: ["React", "JavaScript", "CSS"]
        },
        {
            id: 3,
            title: "Data Analysis Tool",
            description: "Python-based data visualization and analysis application",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            link: "https://github.com/f87shujin",
            tech: ["Python", "Pandas", "Matplotlib"]
        },
        {
            id: 4,
            title: "Automation Scripts",
            description: "Collection of productivity-enhancing automation scripts",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
            link: "https://github.com/f87shujin",
            tech: ["Python", "Automation", "Scripts"]
        }
    ];

    return(
        <div className="projects-container">
            <h1 className="projects-heading">Featured Projects</h1>
            <p className="projects-subtitle">A showcase of my recent work and passion projects</p>
            
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-section">
                        <div className="project-image">
                            <img src={project.image} alt={project.title}/>
                            <div className="project-overlay">
                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-info">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                {project.detailsLink && (
                                    <Link to={project.detailsLink} className="view-details-btn">
                                        View Details →
                                    </Link>
                                )}
                            </div>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Visit project">
                                <i className="fa fa-external-link" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;