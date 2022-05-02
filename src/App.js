import React from "react";
import './App.css';
import Dictionary from "./Dictionary.js"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mt-5">Dictionary 📖</h1>
        <main className="mt-5">
          <Dictionary />
        </main>
      </header>
      <footer>
        <small>Coded by Ranjana Joshi, and open sourced on <a href="https://tranquil-haupia-3dda30.netlify.app/">Github</a></small>
      </footer>
    </div>
  );
}

export default App;
