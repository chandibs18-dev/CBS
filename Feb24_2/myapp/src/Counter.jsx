import { useState } from "react";

function Counter({ initialCount, backupCount }) {
  const [count, setCount] = useState(initialCount);
  const backup = backupCount ?? initialCount;

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const restart = () => setCount(initialCount);
  const switchSign = () => setCount(prev => prev * -1);
  const swap = () => setCount(prev => (prev === backup ? initialCount : backup));

  return (
    <div style={{ textAlign: "center" }}>
      <h1 data-testid="count" style={{ fontSize: "3rem", marginBottom: "20px" }}>
        {count}
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button data-testid="increment" onClick={increment}>+</button>
        <button data-testid="decrement" onClick={decrement}>-</button>
        <button data-testid="restart" onClick={restart}>restart</button>
        <button data-testid="switch" onClick={switchSign}>switch</button>
        {backupCount !== undefined && (
          <button data-testid="swap" onClick={swap}>swap</button>
        )}
      </div>
    </div>
  );
}

export default Counter;