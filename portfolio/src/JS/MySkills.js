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
    { icon: pythonIcon, text: "Python", category: "Great language simple and strong that helped me make a lot of scripts and AI programs and some fun projects and games" },
    { icon: linuxIcon, text: "Linux", category: "An open-source operating system with powerful command-line tools that allows me to manage servers, automate tasks, and improve security practices" },
    { icon: csharpIcon, text: "C#", category: "A versatile programming language primarily used in .NET applications, which has enabled me to build desktop applications, games, and backend systems" },
    { icon: sqlIcon, text: "SQL", category: "A powerful database language that I use for querying, managing, and analyzing structured data within relational databases like MySQL and PostgreSQL" },
  ];
  
  const bottomRowSkills = [
    { icon: jsIcon, text: "JavaScript", category: "A core web development language that helps me add interactivity to websites, develop web applications, and work on both client and server-side projects using frameworks like Node.js" },
    { icon: phpIcon, text: "PHP", category: "A backend web scripting language that I use to create dynamic, data-driven websites and applications, especially in conjunction with MySQL databases" },
    { icon: htmlIcon, text: "HTML", category: "The foundation of web development that enables me to structure and display content on the web, ensuring accessibility and cross-browser compatibility" },
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
            <p>{activeSkill.category}</p>
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
