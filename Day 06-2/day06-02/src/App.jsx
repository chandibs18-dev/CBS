import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'

function App() {
useEffect(()=>{
    console.log("Message from useEffect");
},[]); 
useLayoutEffect(()=>{
    console.log("Message from useLayoutEffect");
},[]);
  return (
    <>
      <h2>UseLayoutEffect</h2>
      {Array(40000) .fill("") .map((item,index)=>(
        <li key={index}>{Math.pow(Math.random(),10)}</li>
      ))
      }
    </>
  )
}

export default App
