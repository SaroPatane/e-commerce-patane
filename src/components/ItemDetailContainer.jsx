import React, {useEffect, useState} from 'react'

const ItemDetailContainer = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])


    const obtenerDatos = async () =>{
       const data = await fetch('https://jsonplaceholder.typicode.com/users')
       const usuarios = await data.json()
       setEquipo(usuarios)
    }
  
    return (
    <div>
        <h2>Probando consumir Api</h2>
        <ul>
            {
                equipo.map(item =>(
                    <li key="item.id">{item.name} - {item.email}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ItemDetailContainer