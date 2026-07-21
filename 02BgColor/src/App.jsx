import { useState } from 'react'
import Cards from './component/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards/>
    </>
  )
}

export default App
