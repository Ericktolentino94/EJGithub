import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Total from './components/Total'
import You from './components/You'
import Me from './components/Me'

function App() {
  const [quantity, setQuantity] = useState(30)
      const handleIncrement = () => {
        console.log(quantity)
        if (quantity <= 30) {
          setQuantity(quantity)
        }
      }
      const handleDecrement = () => {
        if (quantity >= 0) {
          setQuantity(quantity)
        }
      }


  return (
    <>
      <div className="colorBattle">
    <Header />
    <Total />
    <Me quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
    <You quantity={quantity} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
      </ div>
    </>
  )
}

export default App
