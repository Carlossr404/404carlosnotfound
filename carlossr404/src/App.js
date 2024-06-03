import './App.css';
import {Banner} from './Functions.js'


function App() {


  return (
    <div className="App">
      <h1>
        <Banner/>
      </h1>
      <p>
        <h2>Bio:</h2>
        <div>This is a small bio about me (Carlos)</div>
      </p>
    </div>
  );
}

export default App;
