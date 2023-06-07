import React from 'react';
import logo from '../logo.svg';
import '../App.css';
  
function Contact (){
    return (
        <div className="App">    
        
          <div class="container-main">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              No <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      );
}


  
export default Contact;