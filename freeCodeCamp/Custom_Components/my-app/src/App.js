import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div>
      <header>
        <nav>
        <img src={logo} width='40px' alt='react logo' />
        </nav>
      </header>
      <h1>Reasons that I am excited to learn React</h1>
      <ol>
        <li>Finalizing my first webframework</li>
        <li>will help me in finding a job</li>
        <li>Being a FUllstack engineerng</li>
      </ol>
      <footer>
        <small>©2024 amamnueldev. ALl rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
