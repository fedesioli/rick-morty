import React from 'react'

function Tarjeta(props){
    return(
    <>
        <img src={props.datosPersonaje.image}></img>
        <h3>{props.datosPersonaje.name}</h3>
        <p>Status: {props.datosPersonaje.status}</p>
        <p>Species: {props.datosPersonaje.species}</p>
        <p>Origin: {props.datosPersonaje.origin.name}</p>
    </>
    );

}

export default Tarjeta;
