import React,  {useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import $ from 'jquery';
import { Link } from 'react-router-dom';


const navigation = [
    { icon: 'language',  label: 'Dean Compton' },
    { icon: 'home',  label: 'Home',      link: '/'},
    { icon: 'work',  label: 'Projects',  link: '/projects'},
    { icon: 'call',  label: 'Contact',   link: '/contact'},
    { icon: 'description',  label: 'Resume',   link: '/resume'},
  ];

const Nav = () => {
    useEffect(() => {
        // code to run after render goes here
        $('a[href="' + window.location.pathname + '"]').addClass('active');
      });

    return (
        <>
          <Navbar bg="dark" variant="dark">
          <Link to='/'><span class="material-symbols-outlined nav-icon">language</span>Dean Compton</Link>
          <Link to='/'><span class="material-symbols-outlined nav-icon">home</span>Home</Link>
          <Link to='/projects'><span class="material-symbols-outlined nav-icon">work</span>Projects</Link>
          <Link to='/contact'><span class="material-symbols-outlined nav-icon">call</span>Contact</Link>
          <Link to='/resume'><span class="material-symbols-outlined nav-icon">description</span>Resume</Link>
    
          {/* {navigation.map((data, idx) => (<Link to={data.link}>{data.label}</Link>))} */}
              
          </Navbar>
        </>
      );
};



export default Nav;