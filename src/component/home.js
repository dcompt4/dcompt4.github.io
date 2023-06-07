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

                      <img src='https://icons8.com/icon/84884/instagram' />
            </div>
            <div class="second-div">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
      );
}

  
export default Home;