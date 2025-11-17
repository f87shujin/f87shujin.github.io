
import '../CSS/App.css';
import Header  from './header.js';
import MyInfo from './MyInfo.js';
import MySkills from './MySkills.js';
import Projects from './Projects.js';
import Dream from './Dream.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
