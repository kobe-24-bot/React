
  import { useState } from 'react'
function App() {
  const [color,setColor]=useState("olive")
  const colorChange=(color)=>{
    console.log(color);
     setColor(color);
    };
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button 
            onClick={()=>colorChange("red")}//since the function has arguments we need to use arrow function to pass it and jjst camnt pass its reference
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"Red"}}>Red</button>
             <button 
                onClick={()=>{setColor("green")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"Green"}}>Green</button>
             <button 
             onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"Blue"}}>Blue</button>
             <button 
              onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"Yellow"}}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
