import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';
import MovieCard from './MovieCard';
const MovieList = (props) => {
const[Search,setSearch]=useState('')
const[Star,setStar]=useState(0)
const handleSearch=(e)=> {
e.preventDefault()
setSearch(e.target.value)

}

const ratingChanged= (newRating)=>{

    setStar(newRating)
}



    return ( <div>

<ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}

    activeColor="#ffd700"
  />,


<Form.Control size="lg" type="text" placeholder="Search" width="300px" onChange={handleSearch} />  



 
{props.movie.filter(el=>el.titre.toUpperCase().includes(Search.toUpperCase())).filter(el => el.rate >= Star).map(el=> <MovieCard titre={el.titre} image={el.image} rate={el.rate} />)}


</div>



     );
}
 
export default MovieList;