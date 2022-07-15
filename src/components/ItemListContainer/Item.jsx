import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

export const Item = ({id, title,  description, price, pictureUrl}) => {
  
  return (
        <Card style={{ width: '18rem' }} id="item">
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Precio: ${price}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">
                  <Link to={`/item/${id}`} className="button-detail">
                  Ver detalles de producto
                  </Link>
                </Button>
            </Card.Body>
        </Card>
  )
}

