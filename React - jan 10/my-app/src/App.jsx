import { useState, useEffect } from 'react';
import './App.css';

const Lesson = () => {
  const [color, setColor] = useState("Red");

  // Runs on every render
  useEffect(() => {
    console.log("Component rendered");
  });

  // Runs only once (on mount)
  useEffect(() => {
    console.log("Component rendered new");
  }, []);

  // Runs when color changes
  useEffect(() => {
    console.log("Color changed to", color);
  }, [color]);

  const changeColor = () => {
    setColor("Green");
  };

  return (
    <div>
      <h2>Lesson</h2>
      <p>Color is {color}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Lesson;
