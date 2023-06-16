import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import DCBadge from './DCBadge';
import '../styles/badge.css';
import '../styles/projects.css';



const projects = [
  { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']},
   { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']},
   { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']},
   { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']},
   { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']},
   { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']},
   { name: 'PDM',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
  'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
   'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' , labels: ['js', 'html', 'p5', 'css']}
  
];


  
function Projects (){

  

    return (
        <div className="App">    
        
          <div class="projects-container">
            {projects.map((data, idx) => (
              <div class="project-wrapper">
                <div class="project">
                  <h1>{data.name}</h1>
                  <p>{data.desc}</p>
                  <div class='badge-container'>   
                    {data.labels.map((lab, idxy) => (<DCBadge label={lab} />))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}



var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {

    const square = entry.target.querySelector('.project');

    if (entry.isIntersecting) {
      // Add the class if the div is visible
      square.classList.add('square-animation');
      return;
    }
      // Remove the class if the div is not visible
      square.classList.remove('square-animation');
    
  });
});

var divElements = document.getElementsByClassName('project-wrapper');

  Array.from(divElements).forEach(function(divElement) {
    observer.observe(divElement);
  });


  
export default Projects;