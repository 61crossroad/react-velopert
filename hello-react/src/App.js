// import logo from './logo.svg';
// import './App.css';
// import { Fragment } from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}
*/
function App() {
  const name = "React";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'blod',
    padding: 16
  };

  return (
    // style doesn't work with Fragment
    // <div style={style}>
    // first { is a javascript expression, then second { for javascript object
    <div 
      style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'blod',
        padding: 16
      }}>
      {name === 'React' ? (
        <h1>It's a {name}</h1>
      ) : (
        <h1> It's not a React</h1>
      )}
      {/* <h1>Hello! {name}</h1> */}
      <h2>How are you?</h2>
    </div>
  )
}

export default App;
