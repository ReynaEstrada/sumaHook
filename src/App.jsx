import { useState } from 'react'
import './App.css'
import Contador2 from './Contador2';

function App() {
 /*  const [suma, setSuma] = useState(0);

  /*  const es la palabra clave.
      plus: es el nombre de la función 
      setSuma: es la función del hook
      sumNum: es una variable que contiene el valor anterior, en este caso cero
      numero: es el parámetro o el valor que recibira la variable numero.
      const plus = (numero) => { setSuma(sumNum => sumNum + numero);};
  */
   /*  const plus = (numero) => { /* numero , recibe los parametros o el valor del parametro */
   /*  setSuma(sumNum => sumNum + numero);
  }; */
  
  return (
    <div className="App">
    {/*   /*<div>The result is:  {suma}</div>
      <div className="card">
        <button onClick={() => plus(10)}>10</button> 
        <button onClick={() => plus(20)}>20</button>
        <button onClick={() => plus(30)}>30</button>
        <button onClick={() => plus(40)}>40</button>
        <button onClick={() => plus(50)}>50</button>
      </div>
      <button onClick={() => setSuma(0)}>
        Reset
      </button>  */}
      <Contador2/>
    </div>
   
  )
}

export default App
