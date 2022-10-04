import logo from './logo.svg';
import './App.css';
import * as emoji from 'node-emoji'

function App() {
  const welcome = emoji.emojify('Site in progress :male-construction-worker:')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {welcome}
        </p>
      </header>
    </div>
  );
}

export default App;
