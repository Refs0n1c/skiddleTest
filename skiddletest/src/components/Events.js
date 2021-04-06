import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Events = (props) => {


  return (
      <div>
          <div className = {"row"}>
          {props.events.map((event) => (
            <Card style={{ width: '18rem' }} className = {"col-md-6"}>
            <Card.Body>
                <Card.Title>{event.eventname}</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

          ))}
          </div>
        
        
      </div>
 
  );
}

export default Events