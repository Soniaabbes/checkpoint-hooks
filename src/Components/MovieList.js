import React from 'react'
import MovieCard from './MovieCard'


function MovieList({movies, deleteMovie}) {
 
  return (
    <div className='listOfFilm'> 
    {movies.map((movie)=> <MovieCard movie={movie} deleteMovie={deleteMovie} />
    )};
  

     
    </div>
  )
}

export default MovieList