import { useState } from 'react'
import './App.css'
import FireCrackers from './assets/Components/FireCrackers/FireCrackers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<FireCrackers/>
    </>
  )
}

export default App
