import React, { useState } from "react";
import "../CSS/MySkills.css";
import pythonIcon from "../icons/python.svg";
import linuxIcon from "../icons/linux.png";
import csharpIcon from "../icons/C.png";
import sqlIcon from "../icons/SQL.png";
import jsIcon from "../icons/JS.png";
import phpIcon from "../icons/php.png";
import htmlIcon from "../icons/html.png";

function MySkills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const topRowSkills = [
    { icon: pythonIcon, text: "Python", category: "Programming" },
    { icon: linuxIcon, text: "Linux", category: "Operating System" },
    { icon: csharpIcon, text: "C#", category: "Programming" },
    { icon: sqlIcon, text: "SQL", category: "Database" },
  ];

  const bottomRowSkills = [
    { icon: jsIcon, text: "JavaScript", category: "Web Development" },
    { icon: phpIcon, text: "PHP", category: "Web Development" },
    { icon: htmlIcon, text: "HTML", category: "Web Development" },
  ];

  const handleClick = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  const renderSkillIcons = (skills) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className={`skill-icon ${activeSkill === skill ? 'active' : ''}`}
        onClick={() => handleClick(skill)}
      >
        <img src={skill.icon} alt={skill.text} />
        <p className="skill-name">{skill.text}</p>
      </div>
    ));
  };

  return (
    <div className="skills-container">
      <div className="skills-grid top-row">
        {renderSkillIcons(topRowSkills)}
      </div>
      <div className="skills-grid bottom-row">
        {renderSkillIcons(bottomRowSkills)}
      </div>
      <div className="skill-details">
        {activeSkill ? (
          <>
            <h3>{activeSkill.text}</h3>
            <p>Category: {activeSkill.category}</p>
            {/* Add more details about the skill here */}
          </>
        ) : (
          <p>Click on a skill to see more details</p>
        )}
      </div>
    </div>
  );
}

export default MySkills;
