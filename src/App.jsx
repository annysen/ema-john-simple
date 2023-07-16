import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>   
      </div>
     
    </>
  )
}

export default App
