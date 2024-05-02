import { useState } from "react";
import "./App.css";
import { First } from "./First";
import { Second } from "./Second";
import TestClass from "./TestClass";
import { MyIntro } from "./MyIntro";
import { Products } from "./Products";
import { Counter } from "./Counter";
import { FormInput } from "./FormInput";

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
  const [userData, setUserData] = useState(null);

  console.log("userData", userData);

  function onSaveData(user) {
    setUserData(user);
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormInput onSaveData={onSaveData} />

      {userData && (
        <MyIntro
          firstName={userData.firstName}
          lastName={userData.lastName}
          age={userData.age}
          male={userData.gender === "Male"}
        />
      )}
    </div>
  );
}

export default App;
