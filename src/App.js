import React from 'react'
import Navbar from './components/Navbar/navbar.js';
import Intro from './components/intro/intro.js';
import About from './components/aboutme/about.js';
import Interest from './components/interests/interest.js'
import Connect from './components/connect/connect.js';
const App = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Interest/>
      <Connect/>
    </>
  )
}

export default App
