import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Collage from './components/collage.jsx'
import Appointment from './components/appointment.jsx'


function App() {

  return (
    <div>
  <Nav />
  <Collage />
  <Appointment />
  </div>
);
}

export default App
