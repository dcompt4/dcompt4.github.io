import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const languages = [
  { title: 'java',        rating: 1 },
  { title: 'html',        rating: 2 },
  { title: 'css',         rating: 3 },
  { title: 'javascript',  rating: 3 },
  { title: 'php',         rating: 3 },
  { title: 'sql',         rating: 3 },
  { title: 'python',      rating: 3 },
  { title: 'c#',          rating: 3 },
];

const navigation = [
  { icon: 'language',  label: 'Dean Compton' },
  { icon: 'home',  label: 'Home',      link: '/'},
  { icon: 'work',  label: 'Projects',  link: '/projects'},
  { icon: 'call',  label: 'Contact',   link: '/contact'},
  { icon: 'description',  label: 'Resume',   link: '/resume'},
];



function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yes <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
