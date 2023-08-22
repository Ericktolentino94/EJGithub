import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Total from './components/Total'
import You from './components/You'
import Me from './components/Me'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Header />
    <Total />
    <Me />
    <You />
      </ div>
    </>
  )
}

export default App
