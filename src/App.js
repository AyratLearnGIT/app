import logo from './logo.svg';
import './App.css';
import TestWs from "./testWS";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Hello</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestWs/>
      </header>
      <div>new b</div>
    </div>
  );
}

export default App;
