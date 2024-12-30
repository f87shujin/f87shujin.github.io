
import '../CSS/App.css';
import Header  from './header.js';
import MyInfo from './MyInfo.js';
import MySkills from './MySkills.js';
import Projects from './Projects.js';
import Dream from './Dream.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyInfo />
        <MySkills />
        <Projects />
        <Dream />
      </header>
    </div>
  );
}

export default App;
