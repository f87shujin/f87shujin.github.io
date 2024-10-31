import React, { useState } from "react";
import "./MySkills.css"; // We'll create this CSS file to style the component
import pythonIcon from "./icons/Py.webp"; // example path for icons
import linuxIcon from "./icons/Py.webp";
import csharpIcon from "./icons/Py.webp";
import sqlIcon from "./icons/Py.webp";
import jsIcon from "./icons/Py.webp";
import phpIcon from "./icons/Py.webp";
import htmlIcon from "./icons/Py.webp";

function MySkills() {
  const [hoverText, setHoverText] = useState("");

  const skills = [
    { icon: pythonIcon, text: "Python", row: 1 },
    { icon: linuxIcon, text: "Linux", row: 1 },
    { icon: csharpIcon, text: "C#", row: 1 },
    { icon: sqlIcon, text: "SQL", row: 2 },
    { icon: jsIcon, text: "JavaScript", row: 2 },
    { icon: phpIcon, text: "PHP", row: 2 },
    { icon: htmlIcon, text: "HTML", row: 2 },
  ];

  const handleMouseEnter = (text) => setHoverText(text);
  const handleMouseLeave = () => setHoverText("");

  return (
    <div className="skills-container">
      <div className="skills-row">
        {skills
          .filter((skill) => skill.row === 1)
          .map((skill, index) => (
            <div
              key={index}
              className="skill-icon"
              onMouseEnter={() => handleMouseEnter(skill.text)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.icon} alt={skill.text} />
              <p className={`hover-text ${hoverText === skill.text ? "visible" : ""}`}>
                {skill.text}
              </p>
            </div>
          ))}
      </div>
      <div className="skills-row">
        {skills
          .filter((skill) => skill.row === 2)
          .map((skill, index) => (
            <div
              key={index}
              className="skill-icon"
              onMouseEnter={() => handleMouseEnter("Web Development")}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.icon} alt={skill.text} />
            </div>
          ))}
        <p className={`hover-text ${hoverText === "Web Development" ? "visible" : ""}`}>
          Web Development
        </p>
      </div>
    </div>
  );
}

export default MySkills;
