import React from "react";
import "./App.css";
import { getRandomNumber } from "react-hall-pass";

const App: React.FC = () => {
  const num = getRandomNumber();
  return (
    <div className="App">
      <h1>React Hall Pass example</h1>
      <p>number: {num}</p>
    </div>
  );
};

export default App;
