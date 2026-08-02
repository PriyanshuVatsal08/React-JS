import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by....", name);
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className="flex gap-4 p-5">
        
        <input
          type="text"
          placeholder="Ente the name"
          className="border-2 px-3"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="px-3 bg-amber-800 text-white rounded-sm cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default App