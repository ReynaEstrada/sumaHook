import { useState } from "react";
function Contador2(){

    const [count, setCount] = useState(0);
    const handleIncrement = () => {
       if (count < 100) {
        setCount(prevCount => prevCount + 1);
       }else{
        alert( 'El número ya es 100, y no puede seguir incrementando' );
      }
    };
    return (
      <div className="Contador2">
        <div>
          <button onClick={handleIncrement}>+</button>
            <h5>This conuter is: {count}</h5>
        </div>
       <button onClick={() => setCount(0)}>
          Reset
       </button>
      </div>
    );
}
export default Contador2;
