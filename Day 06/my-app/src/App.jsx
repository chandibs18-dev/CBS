import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react';
import ContextProvider from './context/AppContext'
import Contact from './Components/contact'
import Footer from './Components/footer'
function App() {
  return (
    <>
      <ContextProvider>
        <Contact/>
        <Footer/>
      </ContextProvider>
    </>
  )
}

export default App
