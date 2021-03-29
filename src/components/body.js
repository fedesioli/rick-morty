import React from 'react';
import Tarjeta from 'tarjetas';
import fs from 'fs';
const arrayDePersonajes = fs.readFileSync('../rickandmorty.json');

function Body(){
    return(
        <ul>    
            {
            arrayDePersonajes.map(function(personaje, idx){
            <div key={idx}>
                <Tarjeta datosPersonaje = {personaje} />
            </div>    
                })
            }   
            
        </ul>   
    )
}

export default Body; 