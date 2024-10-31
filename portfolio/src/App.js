
import './App.css';
import Header  from './header.js';
import MyInfo from './MyInfo.js';
import MySkills from './MySkills.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyInfo />
        <MySkills />
      </header>
    </div>
  );
}

export default App;
