import React from "react";
import '../CSS/MyInfo.css'; // Import the CSS for styling and animations
import profileImage from '../images/ME.png'; // Import the profile image

function MyInfo() {
    return (
        <div className="info-container">
            <div className="image-container">
                <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="profile-image" 
                />
                <img 
                    src="https://media.tenor.com/fYg91qBpDdgAAAAi/bongo-cat-transparent.gif" 
                    alt="Hover GIF" 
                    className="hover-gif" 
                />
            </div>
            <div className="info-details">
                <h2 className="info-name">Full Name: Houmani Fahd</h2><br />
                <p className="info-username">Username: f87shujin</p><br />
                <p className="info-email">Email: houmanifahd87@gmail.com</p><br />
                <p className="info-number">Phone Number: +1 (438) 365-2608</p><br />
                
                <div className="info-description">
                    <h3 className="description-title">About Me</h3>
                    <p className="description-text">
                        I'm Fahd, a 21-year-old developer with a passion for programming and problem-solving. 
                        Throughout my journey, I've explored multiple programming languages and found a particular 
                        affinity for Python due to its versatility and powerful capabilities. I'm constantly working 
                        on new projects to sharpen my skills, embrace challenges, and most importantly—have fun while coding.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;
