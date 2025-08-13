import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter]=useState(5) //use of hook to manage state
  /*if we don't use hook then it will not re-render the component
  and the value of counter will not change on button click
  because the component will not re-render and the value will remain same
  if we use hook then it will re-render the component and the value will change
  on button click and the value will be updated
  */

  //let counter=5
   const addValue=()=>{
   setCounter(counter+1)//counter++
   console.log('Counter Value:', counter,Math.random());
   }
   const reduceValue=()=>{
    if(counter==0){
      console.log('VALUE CANNOT BE NEGATIVE:', counter,Math.random());
      document.getElementById('print').innerHTML='VALUE CANNOT BE NEGATIVE'
      return;
    }
    setCounter(counter-1);
    console.log('Counter Value:', counter,Math.random());
   }
  return (
    <>
     <h1>Chai Aur react</h1>
     <h2>Counter Value:{counter}</h2>
     <h2 id="print"></h2>
     <button
     onClick={addValue}//onClick event handler to add value
     >Add Value{counter}</button>
     <br/>
     <button
     onClick={reduceValue}  //onClick event handler to reduce value don't give parentheses() after function name
     >Decrease Value{counter}</button>
     <p>footer:{counter}</p>
  </>
  )
}

export default App
