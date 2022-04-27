import React from "react";
import './App.css';
import Dictionary from "./Dictionary.js"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
      </header>
      <footer>
        <small>Coded by Ranjana Joshi</small>
      </footer>
    </div>
  );
}

export default App;
