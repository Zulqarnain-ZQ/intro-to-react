import logo from "./logo.svg";
import "./App.css";
import { First } from "./First";
import { Second } from "./Second";
import TestClass from "./TestClass";
import { MyIntro } from "./MyIntro";

function App() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <First />
      <Second />
      <TestClass />
      <MyIntro
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
