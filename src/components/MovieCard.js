import React from 'react';
import {Card} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactStars from 'react-rating-stars-component';
const MovieCard = (props) => {
    return ( 
    <div>
  
        <Card style={{ width: '18rem'} }>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.titre}</Card.Title>
    <ReactStars
    count={5}
    
    size={24}
    value={props.rate}
    activeColor="#ffd700"
  />,
  </Card.Body>
</Card>      



</div>



     );
    }
 
export default MovieCard;