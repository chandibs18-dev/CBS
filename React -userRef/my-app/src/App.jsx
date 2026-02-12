import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const count = useRef(0);
  const marks =useRef(0);
  console.log(marks.current);

  const [inputElem,setInputElem] = useState("blue");
  const [value,setValue] = useState(0);
  //console.log(count.current);
  useEffect(() =>{
    setCount((count)=>count + 1);
    //count.current = count.current + 1 ;
    //console.log(count.current);
  }, []);
  const btnClicked = () =>{
    //console.log(inputElem.current);
    setInputElem("red");
//inputElem.current.style.background = "blue";
  };

  return (
    <>
      <button 
      onClick={() =>{
        setValue((prev) => prev - 1);
      }}
      >
        Decrement
      </button>
      <h1>{value}</h1>
      <button 
      onClick={() =>{
        setValue((prev) => prev + 1);
      }}
      >
      Increment
      </button>
      <h2>Render Count : {count}</h2>
      <input type="text"style={{ backgroundColor: inputElem }}/>
      <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default App
