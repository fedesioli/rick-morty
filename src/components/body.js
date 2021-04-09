import React, {Component} from 'react';
import Tarjeta from './tarjetas';
import arrayDePersonajes from '../rickandmorty.json';
import { render } from '@testing-library/react';

class Body extends Component{


    Borrar = () => {arrayDePersonajes.filter(function(personaje){
        return personaje = null
    })}
    Reset = () => {arrayDePersonajes = arrayDePersonajes}
    
    render(){

        return(
            <div className='personajesPadre'>    
                {
                arrayDePersonajes.map(function(personaje, idx){
                  return(
                
                    <Tarjeta datosPersonaje = {personaje} key={idx} color="white" borrarPersonaje = {borrar}/>
                    
                  )  
                    })
                }   
            <button onClick={this.Reset.bind(this)}>Resetear Personajes</button>
            </div>   
        )
    }
}

export default Body; 