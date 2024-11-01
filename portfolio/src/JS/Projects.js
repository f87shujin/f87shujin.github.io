import React from 'react';
import '../CSS/Project.css';


function Projects() {
    return(
<div class="project-section">
  <div class="project-image">
    <img src="https://images7.alphacoders.com/132/1323803.jpeg" alt="Project Landscape"/>
  </div>
  <div class="project-content">
    <h2 class="project-title">Project Title</h2>
    <a href="https://your-project-link.com" class="project-link" aria-label="Visit project">
      <i class="fa fa-external-link" aria-hidden="true"></i>
    </a>
  </div>
</div>
)}

export default Projects;