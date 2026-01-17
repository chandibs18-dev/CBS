import React from "react";
import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement } = useCounter(5);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Custom Counter Hook</h2>
      <p>Count : {count} </p>

      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
