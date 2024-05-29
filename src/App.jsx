import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Coponents/Heading'

function App() {
  let [count, setcount] = useState(0)
  return (
    <>
      {/* <Heading/> */}
      <div className='main'>
        <h1>Counter</h1>
        <div className='count'>
          <h1>{count}</h1>
        </div>
        <button onClick={() => setcount(count + 1)} disabled={count == 50}>Increase count</button>
        <button onClick={() => setcount(count - 1)} disabled={count == 0}>Decrease count</button>
        <button onClick={() => setcount(0)}>Reset</button>
      </div>
    </>
  )
}
export default App
