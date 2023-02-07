import { useState } from 'react'
import './App.css'

function App() {
  const [suma, setSuma] = useState(0);
  const Increment10 = () => {
    setSuma(sumNum => sumNum +10);
  };
  const Increment20 = () => {
    setSuma(sumNum => sumNum +20);
  };
  const Increment30 = () => {
    setSuma(sumNum => sumNum +30);
  };
  const Increment40 = () => {
    setSuma(sumNum => sumNum +40);
  };
  const Increment50 = () => {
    setSuma(sumNum => sumNum +50);
  };

  return (
    <div className="App">
      <div>The result is:  {suma}</div>
      <div className="card">
        <button onClick={Increment10}>10</button>
        <button onClick={Increment20}>20</button>
        <button onClick={Increment30}>30</button>
        <button onClick={Increment40}>40</button>
        <button onClick={Increment50}>50</button>
      </div>
      <button onClick={() => setSuma(0)}>
        Reset
      </button>
    </div>
  )
}

export default App
