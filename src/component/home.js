import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../styles/home.css'
  
function Home (){
    return (
        <div className="App">
    
            <div class="first-div">
                <h1>Hi, I'm <span class="profile-name">Dean Compton</span>.</h1>
                <p>I'm a software engineer with experience in full-stack web development. I graduated from LSU in May 2023 with a B.S. in
                     Computer Science with a concentration in Software Engineering and a minor in Digital Media Arts and Engineering in
                      Technology.</p>

                    <div class="social-holder">
                        <a target="_blank" href="https://www.linkedin.com/in/dean-compton-7bb44a207/" class="fa fa-linkedin social-link"></a>
                        <a target="_blank" href="https://www.facebook.com/dean.compton.92" class="fa fa-facebook social-link"></a>
                        <a target="_blank" href="https://www.instagram.com/dean__compton/" class="fa fa-instagram social-link"></a>
                        <a target="_blank" href="https://twitter.com/deancompton7" class="fa fa-twitter social-link"></a>
                    </div>
                      
            </div>
            <div class="second-div">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
      );
}

  
export default Home;