import React from "react";
import '../CSS/MyInfo.css'; // Import the CSS for styling and animations

function MyInfo() {
    return (
        <div className="info-container">
            <div className="image-container">
                <img 
                    src="https://i.pinimg.com/564x/57/8b/8e/578b8e3579215c2fa19b87548fec5cee.jpg" 
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
                
            </div>
        </div>
    );
}

export default MyInfo;
