import logo from './logo.svg';
import './App.css';
import {Sidebar} from './Sidebar'
import {Content} from './Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App-menu">
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </header>

      <div className="wrapper">
        <Sidebar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
