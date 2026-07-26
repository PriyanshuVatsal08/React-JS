import { useState } from 'react'
import './App.css'
import Card from './component/Card';

function App() {
  const obj = [
    {
      img: "https://img.icons8.com/color/1200/amazon.jpg",
      compName: "Amazon",
      time: "5 days ago",
      position: "Senior UI/UX Designer",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      img: "https://img.icons8.com/color/1200/google-logo.png",
      compName: "Google",
      time: "2 days ago",
      position: "Frontend Developer",
      pay: "$150/hr",
      location: "Bengaluru, India",
    },
    {
      img: "https://img.icons8.com/color/1200/microsoft.png",
      compName: "Microsoft",
      time: "1 day ago",
      position: "React Developer",
      pay: "$140/hr",
      location: "Hyderabad, India",
    },
    {
      img: "https://img.icons8.com/color/1200/meta.png",
      compName: "Meta",
      time: "3 days ago",
      position: "Full Stack Developer",
      pay: "$160/hr",
      location: "Gurugram, India",
    },
  ];
  return (
    <>
      <div className='parent'>
        {obj.map((item,index)=>{
          return <Card key={index} data={item}/>
        })}

      </div>
    </>
  )
}

export default App
