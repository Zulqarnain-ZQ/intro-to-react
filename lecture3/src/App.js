import { useState } from "react";
import "./App.css";
import { First } from "./First";
import { Second } from "./Second";
import TestClass from "./TestClass";
import { MyIntro } from "./MyIntro";
import { Products } from "./Products";
import { Counter } from "./Counter";
import { FormInput } from "./FormInput";
import { Calculator } from "./Calculator";
import { Carousel } from "./Carousel";

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
  const [isSaving, setIsSaving] = useState(false);

  // console.log("userData", userData);

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
      <FormInput onSaveData={onSaveData} setIsSaving={setIsSaving} />

      {isSaving && <div>Saving users data...</div>}

      <Calculator />

      {userData && (
        <MyIntro
          firstName={userData.firstName}
          lastName={userData.lastName}
          age={userData.age}
          male={userData.gender === "Male"}
        />
      )}

      <Carousel
        images={[
          "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=30",
          "https://images.unsplash.com/photo-1517052269751-4ae3ad86cc59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=30",
          "https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=30",
        ]}
      />
    </div>
  );
}

export default App;
