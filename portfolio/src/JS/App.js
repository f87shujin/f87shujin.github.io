
import '../CSS/App.css';
import Header  from './header.js';
import MyInfo from './MyInfo.js';
import MySkills from './MySkills.js';
import Projects from './Projects.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyInfo />
        <MySkills />
        <Projects />
      </header>
    </div>
  );
}

export default App;
