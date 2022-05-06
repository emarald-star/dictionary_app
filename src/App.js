import React from "react";
import './App.css';
import Dictionary from "./Dictionary.js";
import logo from "./images/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="dictionarylogo" className="img-fluids logo" />
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
