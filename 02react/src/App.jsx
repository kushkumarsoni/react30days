import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseValue = () => {
    setCount(count < 20 ? count+1 : count);
  }

  const decreaseValue = () => {
    setCount(count > 0 ? count-1 : count);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter value : {count}</h1>
      <div className="card">
        <button onClick={increaseValue}>
          increase 
        </button>
        <br/><br/>
        <button onClick={decreaseValue}>
          decrease
        </button>
       
      </div>
    </>
  )
}

export default App
