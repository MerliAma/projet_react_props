import React from 'react'
import players from './players'
import Player from './Player'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlayersList() {
  return (
    <div className=' bg-dark-subtle p-5'>
        <h1 className='mb-5'>----- Liste de Joueurs FIFA -----</h1>
        {/*Afficher les joueurs dans une gille */}
        { (players && players.length>0) ?
            (
            <>
                <Container>
                    <Row className=' g-3'>
                        {players.map((unjoueur, index) => 
                            <Col key={index+1} md={6} lg={3} >
                                {/*nom={unjoueur.nom} equipe={unjoueur.equipe} nationalite={unjoueur.nationalite} numeroMaillot={unjoueur.numeroMaillot} age={unjoueur.age} image={unjoueur.image} */}
                                <Player {...unjoueur} /> 
                            </Col>
                        )}
                    </Row>
                </Container>
            </>)
            :
            (
                <p>Aucun joueur enregistré ! </p>
            )
    
        }
        
        
        
    </div>
  )
}

export default PlayersList
