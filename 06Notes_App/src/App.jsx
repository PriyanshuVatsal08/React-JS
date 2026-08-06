import React from 'react'
import { Notebook,Trash2, Underline } from "lucide-react"
import { useState } from 'react';
const App = () => {
  let [current, setCurrent] = useState({
    write_task: ""
  });

  let [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!current.write_task.trim()) return;

    setTask((prev) => [...prev, current]);

    console.log(task);

    setCurrent({ write_task: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrent((prev) => ({
      ...prev, [name]: value
    }))
  };

  const handleDelete=(idToDelete)=>{
    setTask((prev)=>prev.filter((_,i)=>i!==idToDelete));
  }

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className='bg-white w-2/5 py-8 px-5 rounded-2xl flex flex-col items-center'>

          <div className='flex gap-3 items-center '>
            <h1 className='font-bold text-2xl'>To-Do List</h1>
            <Notebook />
          </div>

          <form onSubmit={handleSubmit} className='m-5'>
            <input
              type="text"
              placeholder='Enter the task..'
              name='write_task'
              value={current.write_task}
              className='border p-2 w-90 outline-none rounded-bl-xl rounded-tl-xl '
              onChange={handleChange}
            />
            <input
              id='button_Div'
              type="submit"
              value="Submit"
              className='bg-blue-700 hover:bg-blue-400 p-2 border border-black  rounded-br-xl rounded-tr-xl font-bold text-white cursor-pointer'
            />
          </form>


          <div>
            {task.map((elem, index) => (
              <div key={index} className='bg-white p-3 rounded-lg shadow w-100 mb-2'>
                <div className='flex items-center justify-between'>
                  <h1>{elem.write_task}</h1>
                 <Trash2 className='cursor-pointer hover:text-red-600' onClick={()=>handleDelete(index)}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App