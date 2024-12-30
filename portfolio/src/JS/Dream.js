import React from 'react';
import '../CSS/Dream.css';

function Dream() {
  return (
    <div className="dreams-container">
      <h1 className="dreams-heading">Projects</h1>
      <div className="dreams-grid">
        <div className="dream-section">
          <div className="dream-image">
            <img src="https://repository-images.githubusercontent.com/624589634/1b51aa7b-c125-4fda-9340-b2edcb9cb48a" alt="Project Landscape" />
          </div>
          <div className="dream-content">
            <h2 className="dream-title">Project Title</h2>
            <a href="https://your-project-link.com" className="dream-link" aria-label="Visit project">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="dream-section">
          <div className="dream-image">
            <img src="https://images7.alphacoders.com/132/1323803.jpeg" alt="Project Landscape" />
          </div>
          <div className="dream-content">
            <h2 className="dream-title">Project Title</h2>
            <a href="https://your-project-link.com" className="dream-link" aria-label="Visit project">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="dreams-grid">
        <div className="dream-section">
          <div className="dream-image">
            <img src="https://repository-images.githubusercontent.com/624589634/1b51aa7b-c125-4fda-9340-b2edcb9cb48a" alt="Project Landscape" />
          </div>
          <div className="dream-content">
            <h2 className="dream-title">Project Title</h2>
            <a href="https://your-project-link.com" className="dream-link" aria-label="Visit project">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="dream-section">
          <div className="dream-image">
            <img src="https://images7.alphacoders.com/132/1323803.jpeg" alt="Project Landscape" />
          </div>
          <div className="dream-content">
            <h2 className="dream-title">Project Title</h2>
            <a href="https://your-project-link.com" className="dream-link" aria-label="Visit project">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dream;
