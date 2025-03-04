import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <CSSModule />
      </div>
      /*
      <div className="App">
      <header>
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    */
    )
  }
}

export default App;
