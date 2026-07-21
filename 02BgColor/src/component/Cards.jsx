import React, { useState } from 'react'

function Cards() {
    const [color, setColor] = useState("olive")
    return (
        <>
            <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
            </div>

            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 bg-amber-50 px-3 py-2 gap-2 mx-20 rounded-3xl'>

                <button onClick={() => setColor("red")} className='bg-red-800 px-3 py-2 text-amber-50 rounded-2xl cursor-pointer'>Red</button>

                <button onClick={() => setColor("green")} className='bg-green-800 px-3 py-2 text-amber-50 rounded-2xl cursor-pointer'>Red</button>

                <button onClick={() => setColor("black")} className='bg-mauve-950 px-3 py-2 text-amber-50 rounded-2xl cursor-pointer'>Red</button>

                <button onClick={() => setColor("grey")} className='bg-gray-500 px-3 py-2 text-amber-50 rounded-2xl cursor-pointer'>Gray</button>

            </div>


        </>
    )
}

export default Cards