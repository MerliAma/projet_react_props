import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Player({nom="Nom Joueur", equipe="Equipe", nationalite="Nationalité", numeroMaillot=0, age=0, image=""}) {
  return (
      <div>
          <Card className=' shadow-sm h-auto'>
              <Card.Img variant="top" src={image} alt={nom} width={"100%"} height={300} className=' object-fit-cover'/>
              <Card.Body>
                  <Card.Title>{nom}</Card.Title>
                  <Card.Text className='d-flex flex-column g-2'>
                      <span>Joueur FIFA appartenant à l'équipe de <strong>{equipe}</strong>.</span>
                      <span className='my-2'>Numéro de maillot associé </span>
                      <Badge bg="warning" text='dark' className='fs-4 mx-auto' >{numeroMaillot}</Badge>
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item>Nationalité : {numeroMaillot}</ListGroup.Item>
                  <ListGroup.Item>Age: {age} ans</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                  <Button variant="primary" className=' ms-auto '>Voir Détails</Button>
              </Card.Body>

          </Card>
      </div>
  )
}

export default Player
