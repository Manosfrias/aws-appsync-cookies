import logo from './assets/img/logo.svg';
import './assets/styles/App.css';
import { VersionModal } from './components/versionModal/versionModal';
import changelog from "./version.md"
import { useMarkdownToText } from './hooks/useMarkdownToText';

const COOKIE_DATA = {
  app: "myApp",
  user: "ana",
  version: "0.0.3"
}

function App() {
  return (
    <div className="App">
      <VersionModal cookieData={COOKIE_DATA} 
                    markdown={useMarkdownToText(changelog)} 
      />
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

export default App;
