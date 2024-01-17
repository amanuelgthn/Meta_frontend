import logo from './logo.svg';
import './App.css';
function Nav() {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} alt='react logo' className='img-logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
export default function App() {
  return (
    <div>
      <Nav />
      <h1>Reasons that I am excited to learn React</h1>
        <ol>
          <li>Finalizing my first webframework</li>
          <li>will help me in finding a job</li>
          <li>Being a FUllstack engineerng</li>
        </ol>
        <div className='footer-wrapper'>
          <footer className='footer'>
            <small>©2024 amamnueldev. All rights reserved.</small>
          </footer>
        </div>
    </div>
  );
}


