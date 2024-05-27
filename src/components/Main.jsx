import React from 'react'
import "../css/Main.css"
import foto from "../assets/foto.jpg"
import {Card,Container} from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';

function Main () {
  return (
  
   <> 
     <Container className= "contenedor"> 
      
    <Card className='card' style= {{ width: '16rem' }}>

      <Card.Title> Hola soy Ana Sofia </Card.Title>

      <Card.Img variant="top" src= {foto} />
      <Card.Body>
        <Card.Text>
          Estudiante en la Tecnicatura Universitaria en Programación UTN
        </Card.Text> 
      </Card.Body>
    </Card>

    </Container>

    <Container className="conte">

    <Card className='Sobremi' style={{ width: '14rem' }}>
      <Card.Header> Mis datos</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> Nombre: Ana Sofia Acuña</ListGroup.Item>
        <ListGroup.Item>Edad: 25 años</ListGroup.Item>
        <ListGroup.Item> DNI:41495227</ListGroup.Item>
        <ListGroup.Item> Domicilio: Thames 168</ListGroup.Item>
        <ListGroup.Item> Celular:3814059847</ListGroup.Item>
      </ListGroup>
    </Card>
    
</Container>



</>

  )
}
export default Main;
