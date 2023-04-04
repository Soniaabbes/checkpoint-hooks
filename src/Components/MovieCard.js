import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movie,deleteMovie}) {
  return (
    <div >
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie. description}
          <br/>
          {movie.rate}
        </Card.Text>
        <Button variant="secondary" onClick={()=>deleteMovie(movie.id)}>delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default MovieCard