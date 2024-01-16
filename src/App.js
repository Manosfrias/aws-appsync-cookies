import logo from './logo.svg';
import './App.css';
import { VersionModal } from './components/versionModal/versionModal';
import { cookieService } from './utils/cookie';
import changelog from "./version.md"
import { useMarkdownToText } from './hooks/useMarkdownToText';
import { API_CONNECTION } from './config/apiConnection';


const COOKIE_DATA = {
  app: "myApp",
  user: "ana",
  version: "0.0.1"
}

function App() {
  return (
    <div className="App">
      <VersionModal cookieData={COOKIE_DATA} markdown={useMarkdownToText(changelog)} manageCookies={cookieService(API_CONNECTION)} />
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
