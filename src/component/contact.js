import React from 'react';
import '../App.css';
import '../styles/contact.css';

  
function Contact (){
    return (
      <div className="App">
        <div class="first-div">
          <h1>Contact <span class="profile-name">Dean Compton</span></h1>
          <div class='contact-link'>
            <i class="fa fa-envelope"></i> <a href = "mailto: deancompton194@yahoo.com">deancompton194@yahoo.com</a>
          </div>  
      </div>
  </div>
      );
}


  
export default Contact;