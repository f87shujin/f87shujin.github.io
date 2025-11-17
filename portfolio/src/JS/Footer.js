import React from 'react';
import '../CSS/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Houmani Fahd</h3>
                    <p>Developer | Problem Solver | Python Enthusiast</p>
                </div>
                
                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="https://github.com/f87shujin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="devicon-github-original"></i>
                        </a>
                        <a href="mailto:houmanifahd87@gmail.com" aria-label="Email">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/fahd-houmani-b40347339/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#info">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Houmani Fahd. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
