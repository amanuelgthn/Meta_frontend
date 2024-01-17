import logo from './logo.svg';
import './App.css';
function Nav() {
  return (
    <header>
      <nav>
        <img src={logo} alt='react logo' className='img-logo' />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  )
}
export default function App() {
  return (
    <div className="main">
      <Nav />
      <h1>Fun facts about React</h1>
        <ul className='main--facts'>
          <li>Was first released in 2013</li>
          <li>Was orginally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterpirse apps, including mobile apps</li>
        </ul>
        <div className='footer-wrapper'>
          <footer className='footer'>
            <small>©2024 amamnueldev. All rights reserved.</small>
          </footer>
        </div>
    </div>
  );
}


