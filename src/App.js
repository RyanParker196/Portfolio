import React from 'react';
import './App.css';

function List(props) {
  return (
    <ul>
      <li> Project </li>
      <li> Project </li>
      <li> Project </li>
      <li> Project </li>
      <li> Project </li>
    </ul>
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
        <List test="dave"/>
      </header>
    </div>
  );
}

export default App;
