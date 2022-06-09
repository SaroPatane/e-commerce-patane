import React, { useEffect, useState} from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .catch(error => console.error('Error', error))
      .then(res => setPersonajes(res.results))

  }, [])
  
  console.log(personajes)

  return (
    <div>
          <ItemList personajes={personajes}  />

    </div>
  )
}

export default ItemListContainer