import React from "react"
import Card from "./Component/Card";
import "./App.css"

function App() {
  const changeWant= (e)=>{
    console.log(e.target.value);
  }
  
  return (
    <input
      type="text"
      placeholder="Enter Name"
      onChange={changeWant}
    />
  )
}

export default App