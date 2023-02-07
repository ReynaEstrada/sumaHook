import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);
  const Increment10 = () => {
    setCount(prevCount => prevCount+10);
  };
  const Increment20 = () => {
    setCount(prevCount => prevCount +20);
  };
  const Increment30 = () => {
    setCount(prevCount => prevCount +30);
  };
  const Increment40 = () => {
    setCount(prevCount => prevCount +40);
  };
  const Increment50 = () => {
    setCount(prevCount => prevCount +50);
  };

  return (
    <div className="App">
      <div>The result is:  {count}</div>
      <div className="card">
        <button onClick={Increment10}>10</button>
        <button onClick={Increment20}>20</button>
        <button onClick={Increment30}>30</button>
        <button onClick={Increment40}>40</button>
        <button onClick={Increment50}>50</button>
      </div>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default App
