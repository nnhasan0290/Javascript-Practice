import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import logo from './logo.svg';
import { increment } from './reducer';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.testState);
  console.log(state);
  
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
      <button onClick={() => dispatch(increment())}>button</button>
    </div>
  );
}

export default App;
