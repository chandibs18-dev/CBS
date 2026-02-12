import { useCallback,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../../Components/Header.jsx';

function App() {

  const newFn= useCallback(()=> {},[]);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header newFn ={newFn} name={"Department of Examinations"}></Header>
      <h1> {counter}</h1>
      <button 
      onClick={()=>{
      setCounter((prev) => prev + 1);

      } }
>      
     {" "} 
     Click Here
</button>

    </>
  );
}

export default App
