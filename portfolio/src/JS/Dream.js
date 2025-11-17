import React from 'react';
import '../CSS/Dream.css';

function Dream() {
  const dreams = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Building intelligent systems and exploring deep learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      link: "https://github.com/f87shujin"
    },
    {
      id: 2,
      title: "Full-Stack Development",
      description: "Creating seamless web applications from front to back",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      link: "https://github.com/f87shujin"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Contributing to the developer community worldwide",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600",
      link: "https://github.com/f87shujin"
    },
    {
      id: 4,
      title: "Tech Innovation",
      description: "Exploring cutting-edge technologies and frameworks",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
      link: "https://github.com/f87shujin"
    }
  ];

  return (
    <div className="dreams-container">
      <h1 className="dreams-heading">Future Goals & Aspirations</h1>
      <p className="dreams-subtitle">What drives me forward in my tech journey</p>
      <div className="dreams-grid">
        {dreams.map((dream) => (
          <div key={dream.id} className="dream-section">
            <div className="dream-image">
              <img src={dream.image} alt={dream.title} />
              <div className="dream-overlay"></div>
            </div>
            <div className="dream-content">
              <h2 className="dream-title">{dream.title}</h2>
              <p className="dream-description">{dream.description}</p>
              <a href={dream.link} className="dream-link" target="_blank" rel="noopener noreferrer" aria-label="Visit project">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dream;
