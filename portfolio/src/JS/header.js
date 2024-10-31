// src/Header.js
import React from 'react';
import '../CSS/header.css';

function Header() {
  return (
    <header className="header">
      
      <div className="logo-container">
        <i className="devicon-python-plain" title="Python"></i>
        <i className="devicon-javascript-plain" title="JavaScript"></i>
        <i className="devicon-html5-plain" title="HTML5"></i>
        <i className="devicon-java-plain" title="Java"></i>
        <h1>Bienvenue sur mon Portfolio !</h1>
        <i className="devicon-mysql-plain" title="SQL"></i>
        <i className="devicon-php-plain" title="PHP"></i>
        <i className="devicon-csharp-plain" title="C#"></i>
        <i className="devicon-linux-plain" title="Linux"></i>
      </div>
    </header>
  );
}

export default Header;
