import { useState } from "react"
import "./App.css"

function App() {
  let [counter, setCounter] = useState(0);
  let add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Not more than 20")
    }
  };

  let remove=()=>{
    if(counter > 0){
      setCounter(counter-1);
    }else{
      alert("Not less than 0");
    }
  }
  return (
    <>
      <div id="main">
        <div id="cards">
          <h1>{counter}</h1>
          <div id="btn-div">
            <button onClick={add}>Increase</button>
            <button onClick={remove}>Decresase</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
