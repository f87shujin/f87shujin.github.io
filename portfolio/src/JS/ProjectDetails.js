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
            demo: "https://7madi.duckdns.org/library/",
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
            demo: "https://7madi.duckdns.org/recipes/",
            date: "2024",
            role: "AI/ML Developer & Full-Stack Developer"
        },
        'mitray-bot': {
            title: "Mitray - Multi-Purpose Discord Bot",
            tagline: "Feature-rich Discord bot with music streaming, AI chat, and entertainment",
            description: "Mitray is a versatile Discord bot built with Python that brings entertainment and functionality to Discord servers. Stream music from YouTube and Spotify, interact with an AI chatbot, fetch GIFs and images, and enjoy mini-games like Russian Roulette - all in one bot.",
            technologies: ["Python", "Discord.py", "YouTube API", "Spotify API", "AI/Chatbot", "Async Programming"],
            features: [
                "Music streaming from YouTube with queue management",
                "Spotify integration for seamless music playback",
                "AI-powered chatbot for natural conversations",
                "GIF and image fetcher for quick media sharing",
                "Mini-games including Russian Roulette for server entertainment",
                "Asynchronous command handling for smooth performance",
                "User-friendly commands with intuitive syntax",
                "Multi-server support with individual configurations"
            ],
            challenges: [
                {
                    title: "Audio Streaming Architecture",
                    description: "Implemented robust audio streaming from both YouTube and Spotify APIs, handling queue management, playback controls, and ensuring smooth audio delivery across multiple servers."
                },
                {
                    title: "API Rate Limiting",
                    description: "Designed efficient caching and request management systems to handle YouTube and Spotify API rate limits while maintaining responsive bot performance."
                },
                {
                    title: "Asynchronous Operations",
                    description: "Leveraged Python's asyncio and Discord.py's asynchronous features to handle multiple concurrent commands and audio streams without blocking or lag."
                }
            ],
            github: "https://github.com/f87shujin/Mitray",
            demo: null,
            date: "2024",
            role: "Bot Developer & Backend Engineer"
        },
        'solid-snake': {
            title: "Solid Snake - DQN AI Training Testbed",
            tagline: "Neural network training experiments with parallel environments and GPU acceleration",
            description: "A Deep Q-Network reinforcement learning project that trains 250 snake agents simultaneously to validate AI training techniques for larger projects. Features GPU acceleration via DirectML for AMD hardware, real-time web dashboard monitoring, and optimized network architecture. This serves as a personal testing ground for neural network optimization strategies, parallel training systems, and hybrid CPU/GPU pipelines before scaling to enterprise-level AI applications.",
            technologies: ["Python", "PyTorch", "DirectML", "Pygame", "Flask", "SocketIO", "NumPy"],
            features: [
                "Parallel training across 250 snake environments simultaneously",
                "GPU acceleration with AMD DirectML support (also CUDA/CPU compatible)",
                "Real-time web dashboard with Flask + SocketIO for monitoring",
                "Optimized compact network: 128-neuron architecture (~17,600 parameters)",
                "Experience replay buffer with 100,000 transitions",
                "Target network updated every 10 episodes for stability",
                "Distance-based reward shaping for improved learning",
                "Auto-save checkpointing with resume capability",
                "Sparse rendering optimization (updates every 500 steps)",
                "Wall-wrapping mechanics instead of death on collision"
            ],
            challenges: [
                {
                    title: "GPU Acceleration on AMD Windows",
                    description: "PyTorch doesn't natively support AMD GPUs on Windows. Implemented DirectML integration to leverage DirectX 12 for AMD Radeon RX 6900XT acceleration, achieving 2-3x speedup in neural network operations while CPU handles game logic."
                },
                {
                    title: "Network Architecture Optimization",
                    description: "Reduced network from 256 to 128 neurons per layer (50% parameter reduction) without sacrificing performance. Smaller network proved sufficient for the 11-dimensional state space, resulting in faster training and better generalization."
                },
                {
                    title: "Balancing Performance and Monitoring",
                    description: "Implemented smart rendering strategy: display updates every 500 steps instead of every frame, web dashboard batch updates, and no FPS cap. This balanced training speed with adequate visual feedback for debugging."
                }
            ],
            github: "https://github.com/f87shujin/Solid-snake",
            demo: null,
            date: "2024-2025",
            role: "AI/ML Engineer & Full-Stack Developer"
        },
        'elixir-fountain': {
            title: "Elixir Fountain - E-commerce Platform",
            tagline: "Full-stack online store with modern React frontend and Flask REST API",
            description: "A complete e-commerce solution featuring product management, user authentication, shopping cart functionality, and order processing. Built with React and Vite for a fast, responsive frontend, and Flask with MongoDB for a scalable backend. Includes admin dashboard for product and user management, wishlist functionality, and secure session-based authentication.",
            technologies: ["React", "Flask", "MongoDB", "Python", "Vite", "Axios", "Flask-CORS"],
            features: [
                "Dynamic product catalog with category filtering and search",
                "User authentication and authorization system with session management",
                "Shopping cart with real-time updates and quantity management",
                "Wishlist functionality for saving favorite products",
                "Secure checkout process with shipping and payment information",
                "Admin dashboard for managing products, users, and orders",
                "Product management with image uploads and featured items",
                "Order history and tracking for customers",
                "Responsive design optimized for all devices",
                "RESTful API with CORS support for frontend-backend communication"
            ],
            challenges: [
                {
                    title: "State Management Across Components",
                    description: "Implemented React Context API for global state management of cart, wishlist, and authentication. Created custom hooks (useCart, useAuth) to provide clean, reusable access to shared state throughout the application."
                },
                {
                    title: "Session-Based Authentication",
                    description: "Built secure session management with Flask-Session and HTTP-only cookies. Implemented protected routes on both frontend (React Router) and backend (decorators) to ensure proper access control for user and admin functionality."
                },
                {
                    title: "Real-Time Cart Synchronization",
                    description: "Developed dual-mode cart system: localStorage for guest users and MongoDB backend for authenticated users. Seamlessly migrates cart data on login and keeps frontend/backend synchronized with optimistic UI updates."
                }
            ],
            github: "https://github.com/Madeinbasement/Ecomerce-pro",
            demo: "https://7madi.duckdns.org/",
            date: "2025",
            role: "Full-Stack Developer"
        },
        'business-assistant': {
            title: "Business Assistant - AI-Powered Business Intelligence",
            tagline: "Smart business analysis and decision-making platform powered by AI",
            description: "An intelligent business assistant that leverages artificial intelligence to provide comprehensive market analysis, competitor insights, and data-driven recommendations. This platform helps businesses make informed decisions through automated research, trend analysis, and strategic planning tools, streamlining the business intelligence process with AI-powered automation.",
            technologies: ["Python", "Flask", "AI/ML", "Natural Language Processing", "Data Analysis", "REST API"],
            features: [
                "AI-powered market research and competitor analysis",
                "Automated business intelligence gathering and reporting",
                "Data-driven insights and strategic recommendations",
                "Natural language query interface for business questions",
                "Trend analysis and market forecasting",
                "Competitive landscape visualization and comparison",
                "Custom report generation with actionable insights",
                "Real-time data processing and analysis",
                "Interactive dashboard for business metrics",
                "Export functionality for reports and analytics"
            ],
            challenges: [
                {
                    title: "AI Model Integration for Business Context",
                    description: "Developed specialized AI models trained on business data to provide contextually relevant insights. Implemented natural language processing to understand complex business queries and generate accurate, actionable recommendations."
                },
                {
                    title: "Data Aggregation and Analysis",
                    description: "Built robust data pipeline to collect, process, and analyze information from multiple sources. Designed efficient algorithms for real-time market analysis and competitor tracking while ensuring data accuracy and relevance."
                },
                {
                    title: "Scalable Architecture Design",
                    description: "Engineered a scalable Flask backend with optimized API endpoints to handle concurrent analysis requests. Implemented caching strategies and asynchronous processing for improved performance and user experience."
                }
            ],
            github: "https://github.com/f87shujin/Busniss_Assist",
            demo: "https://7madi.duckdns.org/analysis/",
            sampleData: "/business_sales_large.csv",
            date: "2024-2025",
            role: "AI/ML Engineer & Full-Stack Developer"
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
                        {project.sampleData && (
                            <a href={project.sampleData} download className="link-button data-button">
                                📊 Sample Data (CSV)
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
