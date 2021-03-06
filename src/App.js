import React from "react";
import './App.css';
import Dictionary from "./Dictionary.js";
import logo from "./images/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub);

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div className="Title"> Dictionary 
        <img src={logo} alt="dictionarylogo" className="img-fluid logo p-2" />
        </div>
      
        <div className="main">
          <Dictionary />
        </div>
      </header>
      <footer>
        <small>Coded by <strong>Ranjana Joshi</strong>,open sourced on <a href="https://github.com/emarald-star/dictionary_app.git"><FontAwesomeIcon icon="fa-brands fa-github" /></a> and hosted on <a href="https://tranquil-haupia-3dda30.netlify.app/"> Netlify</a></small>
      </footer>
      
        {/* <FontAwesomeIcon icon={solid('user-secret')} />
        <FontAwesomeIcon icon={solid('coffee')} />
        <FontAwesomeIcon icon={brands('twitter')} /> */}

      
    </div>
  );
}

export default App;
