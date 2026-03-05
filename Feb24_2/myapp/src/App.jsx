import React from "react";
import Counter from "./Counter";
//import bgImage from "./background.jpg"; // make sure to have an image in src folder

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
       // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Counter Container */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)", // semi-transparent white
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>React Counter App</h1>
        <Counter initialCount={0} backupCount={10} />
      </div>
    </div>
  );
}

export default App;