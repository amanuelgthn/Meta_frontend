import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" width='100' height='100' />
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Was First released in 2013</li>
          <li>Was orginally created by Jordan Walke</li>
          <li>Has well over 100k stars in Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>

        </ul>
    </div>
  );
}
export default App;
