import React from "react";
import { getRandomNumber } from "react-hall-pass";

const Home: React.FC = () => {
  const num = getRandomNumber();
  return (
    <div className="home">
      <h1>React Hall Pass example</h1>
      <p>number: {num}</p>
    </div>
  );
};

export default Home;
