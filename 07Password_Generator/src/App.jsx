import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'

import './App.css'
const App = () => {

  //Hooks 
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef=useRef(null);


  //Password generator function with useCallback for optimization
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*()_+}{[]:;.>,</?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, isNumber, isChar, setPassword]);

  //Or optimize high re-rendering
  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isChar,passwordGenerator])
  

  //Password Reference
  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0,7);
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className='bg-[#28282B] p-8 w-1/2 rounded-4xl'>
          <div>
            <h1 className='text-white text-4xl text-center mb-7 font-bold uppercase'>Password Generator</h1>
          </div>

          <div className='text-white flex'>
            <input
              type="text"
              value={password}
              placeholder='Password'
              className=' border w-full px-3 py-3 text-[18px] outline-0 rounded-bl-lg rounded-tl-lg'
              readOnly
              ref={passwordRef}// thih is how referenceis given
            />
            <button onClick={copyPassword} className='bg-blue-600 text-white font-bold px-3 py-1 text-[26px] cursor-pointer hover:bg-orange-400 rounded-br-lg rounded-tr-lg border '>
              Copy
            </button>
          </div>

          <div className='flex text-sm gap-x-5 mt-6 text-blue-600'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label className='text-lg' htmlFor="">Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={isNumber}
                id='numberInput'
                onChange={() => {
                  setIsNumber((prev) => !prev);
                }}
              />
              <label className='text-xl'>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={isChar}
                id='charInput'
                onChange={() => {
                  setIsChar((prev) => !prev);
                }}
              />
              <label className='text-xl'>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App