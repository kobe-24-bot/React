import { useState,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed,setNumber]=useState(false);
  const[characterAllowed,setCharacter]=useState(false);
  const[password,setPassword]=useState("");


  //useRef
  const passRef=useRef();


  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)str+="0123456789";
    if(characterAllowed)str+="!@#$%^&*()_+[]{}|;:,.<>?";
    for(let i=1;i<=length;i++){
  let char=Math.random()*str.length+1;  //random value between 0 and str.length
  char=Math.floor(char);
  pass+=str.charAt(char); //get the character at the index char
    }
    setPassword(pass);
   
  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passRef.current?.select(); //select the input element
    passRef.current?.setSelectionRange(0,99999); //set the selection range to select all text
    window.navigator.clipboard.writeText(password)
  },[password])

   useEffect(()=>{
    passwordGenerator();
   },[length,numberAllowed,characterAllowed,passwordGenerator]);

  return (
    <>
     
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Generated Password'
        readOnly
        ref={passRef} //ref to access the input element
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e)=>setLength(e.target.value)}
          />
          <label>Length:{length}</label> 
        </div>
        <input  type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>setNumber((prev)=>!prev)}//change of value for every click or change
        ></input>
        <label htmlFor="numberInput">Numbers</label>
        <div>
          <input  type="checkbox"
        defaultChecked={characterAllowed}
        id="characterInput"
        onChange={()=>setCharacter((prev)=>!prev)}//change of value for every click or change
        ></input>
        <label
        htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
