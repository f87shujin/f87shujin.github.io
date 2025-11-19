
import { Routes, Route } from 'react-router-dom';
import '../CSS/App.css';
import Header  from './header.js';
import MyInfo from './MyInfo.js';
import MySkills from './MySkills.js';
import Projects from './Projects.js';
import Dream from './Dream.js';
import Footer from './Footer.js';
import ProjectDetails from './ProjectDetails.js';

function HomePage() {
  return (
    <div className="App-header homepage">
      <Header />
      <section id="info">
        <MyInfo />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="dreams">
        <Dream />
      </section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
