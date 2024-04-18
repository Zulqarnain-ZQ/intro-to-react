import logo from "./logo.svg";
import "./App.css";
import { First } from "./First";
import { Second } from "./Second";
import TestClass from "./TestClass";
import { PropComponent } from "./PropComponent";

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

      <First />
      <Second />
      <TestClass />
      <PropComponent
        firstName="Muhammad"
        lastName="Zulqarnain"
        age={30}
        male={true}
        obj={{
          firstName: "Muhammad",
          lastName: "Zulqarnain",
        }}
      />
    </div>
  );
}

export default App;
