import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDemoStore } from './store/useDemoStore'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const {value, modify}: any = useDemoStore();

  return (
    <>
      <h1>{value}</h1>
      <button onClick={modify}>Change Store</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
