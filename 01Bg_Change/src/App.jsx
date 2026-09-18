import React from 'react'
import { useState } from 'react'
const App = () => {
  const [color, setcolor] = useState("olive")
  return (
    <>
      <div className='relative'>
        <div className='h-screen w-full' style={{ background: color }}>
        </div>

        <div className='absolute top-5 left-150 flex gap-x-5 bg-white p-3 rounded-2xl'>
          <div>
            <button onClick={()=>setcolor("red")} className='bg-red-600 p-2 text-white rounded-lg cursor-pointer'>Red</button>
          </div>

          <div>
            <button onClick={()=>setcolor("blue")} className='bg-blue-600 p-2 text-white rounded-lg cursor-pointer'>Red</button>
          </div>

          <div>
            <button onClick={()=>setcolor("gray")} className='bg-gray-600 p-2 text-white rounded-lg cursor-pointer'>Red</button>
          </div>

          <div>
            <button onClick={()=>setcolor("yellow")} className='bg-yellow-600 p-2 text-white rounded-lg cursor-pointer'>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App