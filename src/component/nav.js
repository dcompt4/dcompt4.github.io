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
    
                {navigation.map((data, idx) => (

<Link to={data.link}>{data.label}</Link>


                ))}
              
          </Navbar>
        </>
      );
};



export default Nav;