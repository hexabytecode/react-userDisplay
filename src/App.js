import React, { useState } from "react";
import ImgComponent from "./components/ImgComponent";
import TextContainer from "./components/TextContainer";
import { fetchUserData } from "./services/app";
import "./index.css";

function App() {
  const [userData, setUserData] = useState({});

  const handleClick = async (event) => {
    const buttonValue = event.target.value;
    try {
      const data = await fetchUserData(buttonValue);
      setUserData(data);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Basic React app with API</h1>
      </header>
      <button value={1} onClick={handleClick}>
        1
      </button>
      <button value={2} onClick={handleClick}>
        2
      </button>
      <button value={3} onClick={handleClick}>
        3
      </button>
      <button value={100} onClick={handleClick}>
        100
      </button>
      <TextContainer userData={userData} />
      <ImgComponent userData={userData} />
    </div>
  );
}

export default App;
