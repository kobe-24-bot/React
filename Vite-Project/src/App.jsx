import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)
let Arr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black '>Tailwind Test</h1>
      
   <Card username="Kushal" button=""/> //whatever we pass here will be passed as props to the Card component
    <Card  button="Not okay"/>

    </>
  )
}

export default App
