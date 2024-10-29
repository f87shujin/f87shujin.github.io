import './App.css';
import React from 'react';
import Header from './Header';
import MyInfo from './MyInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyInfo />
      </header>
    </div>
  );
}

export default App;
