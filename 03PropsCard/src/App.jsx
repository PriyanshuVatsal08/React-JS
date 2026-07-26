import React from "react"
import Card from './Component/Card'

const App=()=>{

  const subject=["React", "Java", "DBMS", "DSA"];
  return(
    <Card  course={subject}/>
  )
}

export default App
