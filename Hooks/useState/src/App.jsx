import { useState } from 'react'
import React  from 'react'
import './App.css'

function App() {
    const [num, setNum] = useState({name:"Priyanshu",age:30});
    const [arr,setArr]=useState([10,20,30]);

    const changeObj=()=>{
        setNum(prev=>({...num,age:50}));
    }

    const changeArr=()=>{
        const newArr=[...arr];
        newArr.push(50);
        setArr(newArr);
    }

    return (
        <>
            <div>{num.name},{num.age}</div>
            <button onClick={changeObj}>Add</button>

            {arr.map((elm)=>{
                return <div>{elm}</div>
            })}
            <button onClick={changeArr}>Add</button>
        </>
    )
}

export default App
