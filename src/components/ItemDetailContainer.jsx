import React, {useEffect, useState} from 'react'

const ItemDetailContainer = () => {

    const userId = Math.floor(Math.random()*10)+1;
    const datos = `https://jsonplaceholder.typicode.com/users/${userId}`

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
        <h2>Probando consumir Api
        </h2>
        <ul className="ItemDetailCont">
            {
                equipo.map(item =>(
                    <li key="item.id">{item.name} - {item.email} <button><a href={datos}>Ver detalle</a></button></li>
                ))
            }
        </ul>
    </div>
  )
}

export default ItemDetailContainer