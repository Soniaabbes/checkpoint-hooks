import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddFilm from './AddFilm'


function Filtre({movieT, movieRate, addMovie}) {
    const [text, setText]= useState("");
    const research=(e)=>{
        e.preventDefault();
        if (text == false ) {alert ("ecrire le nom du film ") }  else  {movieT(text) } ;
     };

    const [rate, setRate]= useState("");
    const researchRate=(e)=>{
        e.preventDefault();
        if (rate == false ) {alert ("le texte est vide  ") }  else  {movieRate(rate)} ;
     };

    
    
    

    return (
        <div>
            <p className='chooseFilm'>
                <p className='intro'>
                    Unlimited movies, TV shows, and more.
                            Choose your favorite movie:<br/>
                    <p className='intro2'>
                        <img className='img' src="http://www.famillechretienne.fr/sites/default/files/dpistyles/ena_16_9_extra_big/node_38156/78560/public/thumbnails/image/film_enfants.jpg?itok=xvA0Amvp1649770522" alt='regarder le film'/>

                        <p>
                            <>
                                <p className='addFilm'>
                                    <AddFilm  addMovie={addMovie}/>
                                </p>
                                <br/>
                            
                                <p className='rateFilm'>
                                    <Form  onSubmit={research}>
                                    <Form.Control type="text" placeholder="Film" value={text} onChange={(e)=> setText(e.target.value)}/>
                                    <Button variant="secondary" type='submit'>
                                        see related movies</Button>
                                        </Form>


                                    <br/>

                                </p>
                                <p className='titleFilm'>
                                    <Form onSubmit={researchRate}>
                                    <Form.Control size="sm" type="text" placeholder="rate" value={rate} onChange={(e)=>setRate(e.target.value)}/>
                                    <Button variant="secondary" type='submit'>
                                        see related movies</Button>
                                        </Form>

                                </p>
                            </>
                        </p>
                    </p>
                </p>
            </p>
        </div>
    )
}
export default Filtre


