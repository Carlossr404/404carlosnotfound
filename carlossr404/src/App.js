import './App.css';
import {Banner} from './Functions.js'


function App() {


  return (
    <div className="App">
      <h1 className='App-header'>
        <Banner/>
      </h1>
      <p>
        <h2>Bio</h2>
        <div>This is a small bio about me (Carlos)</div>
      </p>
      <p>
        <h2>Experience</h2>
      </p>
      <p>
        <h2>Community Involvement</h2>
      </p>
      <p>
        <h2>Projects</h2>
      </p>
      <p>
        <h2>Publications</h2>
      </p>
    </div>
  );
}

export default App;
