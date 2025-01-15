
import React from "react";
import './../styles/App.css';
// import {Button} from "./Button.js"
import { useState } from "react";
const App = () => {
  const [count, setCount]=useState(0);
  const inc=()=>{
    setCount(count+1)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        // <Button />
      <div>
        <p>Button clicked {count} times</p>
        <button onClick={inc}>Click me</button>
      </div>
    </div>
  )
}

export default App
