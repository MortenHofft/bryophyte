import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OccurrenceSearch } from './components';
import { ThemeProvider } from 'emotion-theming'
import theme from './styles/themes/Dark';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <OccurrenceSearch>Click here</OccurrenceSearch>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
