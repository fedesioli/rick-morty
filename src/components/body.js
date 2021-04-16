import React, {Component} from 'react';
import Tarjeta from './tarjetas';
import arrayDePersonajes from '../rickandmorty.json';
import { render } from '@testing-library/react';

class Body extends Component{
    constructor(props){
        super(props);
    }

    borrar = (id) => {console.log(id);}
    // Reset = () => {arrayDePersonajes = arrayDePersonajesOk}
    
    render(){

        return(
            <div className='personajesPadre'>    
                {
                arrayDePersonajes.map((personaje)=>(
                  
                
                    <Tarjeta datosPersonaje = {personaje} key={personaje.id} id={personaje.id} color="white" onBorrar={this.borrar}/>
                    
                    
                ))
                }   
            
            </div>   
        )
    }
}

export default Body; 