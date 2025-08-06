import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { StrictMode } from 'react';


function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
    
  )
}
/*const ReactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'Click me to visit google'
}*/

const AnotherElement=(
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)
const anotherUser='Kus  Shaw'
const reactElement= React.createElement( //react element how to make(injected by babble)
  'a', //first the  Element type(tag)
  { //then a object for attributes like link 
    href:'https://www.google.com', 
    target:'_blank'
  },
  'Click Me to visit Google', //then a text node 
   anotherUser   //to access variables from outside of createElement parenthesis
) //keep in mind that there is no key in this and just the value of the key is passed as a string
createRoot(document.getElementById('root')).render(
  
 
  reactElement
 
    
 
)
