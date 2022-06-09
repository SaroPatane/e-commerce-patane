import React from 'react'
import { Button, Card} from 'react-bootstrap'


const Item = ({personaje}) => {
  const{name, image, species, status} = personaje
  
    return (
    <Card style={{ width: '18rem', margin: 20 }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Especie: {species}
      Estado: {status}
    </Card.Text>
    <Button variant="primary">Ver detalle</Button>
  </Card.Body>
</Card>
  )
}

export default Item