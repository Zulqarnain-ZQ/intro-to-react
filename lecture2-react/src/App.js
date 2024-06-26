import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { First } from "./First";
import { Second } from "./Second";
import TestClass from "./TestClass";
import { MyIntro } from "./MyIntro";
import { Products } from "./Products";
import { Counter } from "./Counter";

const products = [
  {
    id: 1,
    name: "Coca cola",
    type: "Soft drink",
  },
  {
    id: 2,
    name: "KFC",
    type: "Burger",
  },
  {
    id: 3,
    name: "Pizzahut",
    type: "Pizza",
  },
];

// TODO: Build Students component and it would display [{id, name, age}]

function App() {
  const [counter, setCounter] = useState(0);
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

      <Products products={products} />

      <Counter value={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
