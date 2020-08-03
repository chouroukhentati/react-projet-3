import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
const[Movie,setMovie]=useState([{titre:"Annihilation",rate:4,image:" https://fr.web.img3.acsta.net/pictures/18/02/23/12/09/5079145.jpg"},{titre:"strswars",rate:3,image:"https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop191x100.1200w.jpg"}])
const AjoutMovie=(a,b,c)=>{
setMovie ([...Movie,{titre:a,rate:b,image:c}])



}

  return (
    <div>
      <MovieList movie={Movie}/>
     <AddMovie AjoutMovie={AjoutMovie} />

    </div>
  );
}

export default App;
