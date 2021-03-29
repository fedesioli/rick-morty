import React from 'react';
import Tarjeta from './tarjetas';
import arrayDePersonajes from '../rickandmorty.json';

function Body(){
    return(
        <div className='personajesPadre'>    
            {
            arrayDePersonajes.map(function(personaje, idx){
              return(
            <div  key={idx} className="tarjetaPadre">
                <Tarjeta datosPersonaje = {personaje} />
            </div>    
              )  
                })
            }   
            
        </div>   
    )
}

export default Body; 