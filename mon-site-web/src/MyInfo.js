import React from "react";
import './MyInfo.css'; // Import the CSS for styling and animations

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
                <h2 className="info-name">Full Name: John Doe</h2><br />
                <p className="info-username">Username: johndoe</p><br />
                <p className="info-email">Email: john.doe@example.com</p><br />
                <p className="info-number">Phone Number: +1 (123) 456-7890</p><br />
                
            </div>
        </div>
    );
}

export default MyInfo;
