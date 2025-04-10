// Write the logic of the component, including hooks like useEffect and states related to the functionality, 
// inside a custom hook, and then import this hook into the component that needs it.

import { useState } from "react"
export default function UseButtonHook(){
  const [buttonText, setButtonText] = useState("Click Me")
  function handleClick(event){
    console.log(" button ckicked")
  }
  return{
    handleClick,
    buttonText
  }
}