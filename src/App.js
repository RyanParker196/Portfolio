import React from 'react';
import './App.css';

function Para(props) {
  return (
    <p>
      this is a para
    </p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./me.jpg" className="App-pic" alt="pic" />
        <p>
          Welcome to my first React App!
        </p>
        <Para/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
