import React,  {useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import $ from 'jquery';


const navigation = [
    { icon: 'language',  label: 'Dean Compton' },
    { icon: 'home',  label: 'Home',      link: '/'},
    { icon: 'work',  label: 'Projects',  link: '/projects'},
    { icon: 'call',  label: 'Contact',   link: '/contact'},
    { icon: 'description',  label: 'Resume',   link: '/resume'},
  ];

const DCBadge = (props) => {
    return (
        <>
          <p class='dc-badge'>
              {props.label}
          </p>
        </>
      );
};



export default DCBadge;