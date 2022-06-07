import React, { useState } from 'react'

const ItemCount = ({inicial, max, onAdd}) => {
      
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if(count < max){
        setCount(count + 1)
        }
        else {
            alert('No puedes agregar mas productos')
        }
    }     
    
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No puedes menos de 1')
    }

    const reset = () => {
        setCount(inicial)
    }

  return (
    <div style={{fontFamily: 'monospace', fontSize:'1rem',}}>
      <h2>{count}</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={reset}>Resetear</button>
      <button onClick={() => { onAdd(count); reset()}}>Agregar al changuito</button>
</div>
  )
}

export default ItemCount