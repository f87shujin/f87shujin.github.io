import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Project.css';


function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Elixir Fountain E-commerce",
            description: "Full-stack e-commerce platform with React frontend and Flask backend featuring product management, shopping cart, and secure checkout",
            image: "https://www.marykay.ca/-/media/images/mk/united-states/canada/esuite/product-shop-landing/shop/category-fragrance-hero-2.png?h=521&w=1418&la=en-CA&hash=78AF8FFDAE893DAD7E80979F5B62AC2A9ECC1EE7",
            link: "https://github.com/Madeinbasement/Ecomerce-pro",
            detailsLink: "/project/elixir-fountain",
            demo: "http://172.93.26.243",
            tech: ["React", "Flask", "MongoDB", "Python"]
        },
        {
            id: 2,
            title: "Intelligent Recipes",
            description: "AI-powered recipe assistant with ingredient recognition and smart suggestions",
            image: "https://indatalabs.com/wp-content/uploads/2024/01/ai-app.webp",
            link: "https://github.com/f87shujin/AI-Desert",
            detailsLink: "/project/intelligent-recipes",
            demo: "http://172.93.26.243/recipes/",
            tech: ["Python", "YOLOv8", "AI/ML", "Flask"]
        },
        {
            id: 3,
            title: "Business Assistant",
            description: "AI-powered business intelligence platform for market analysis, competitor insights, and data-driven decision making",
            image: "https://emerj.com/wp-content/uploads/2018/11/AI-business.jpg",
            link: "https://github.com/f87shujin/Busniss_Assist",
            detailsLink: "/project/business-assistant",
            demo: "http://172.93.26.243/analysis/",
            tech: ["Python", "AI/ML", "Flask", "Data Analysis"]
        },
        {
            id: 4,
            title: "Web Portfolio",
            description: "Modern responsive portfolio website built with React showcasing my projects, skills, and professional journey with a sleek dark-themed design",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
            link: "https://f87shujin.github.io",
            detailsLink: "/project/portfolio",
            tech: ["React", "JavaScript", "CSS", "HTML"]
        },
        {
            id: 5,
            title: "eLibrary",
            description: "A dynamic online bookstore platform where users can browse, search, and purchase books with an intuitive interface",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
            link: "https://github.com/f87shujin/eLibrary",
            detailsLink: "/project/elibrary",
            tech: ["PHP", "JavaScript", "HTML", "CSS"]
        },
        {
            id: 6,
            title: "Mitray Discord Bot",
            description: "Multi-purpose Discord bot with music streaming, AI chat, and mini-games",
            image: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2021/07/Discord-Logo-Lede.png",
            link: "https://github.com/f87shujin/Mitray",
            detailsLink: "/project/mitray-bot",
            tech: ["Python", "Discord.py", "YouTube API", "Spotify"]
        },
        {
            id: 7,
            title: "Solid Snake - DQN AI Training",
            description: "Deep Q-Network reinforcement learning project training 250 snakes simultaneously with GPU acceleration and real-time web dashboard",
            image: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
            link: "https://github.com/f87shujin/Solid-snake",
            detailsLink: "/project/solid-snake",
            tech: ["Python", "PyTorch", "Pygame", "Flask", "DirectML"]
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
                                <div className="project-buttons">
                                    {project.detailsLink && (
                                        <Link to={project.detailsLink} className="view-details-btn">
                                            View Details →
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} className="demo-btn" target="_blank" rel="noopener noreferrer">
                                            Live Demo 🚀
                                        </a>
                                    )}
                                </div>
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