import React, {Component} from 'react';

class Tarjeta extends Component{

    constructor(props){
        super(props);
        this.state = {
            colorOriginal: props.color,              
            color: "white",
        }
    }

    cambiarColorHover(){
        this.setState({
            color: "lightgray",
        })
    }
    cambiarColorHover2(){
        this.setState({
            color: "white",
            
        })
    }
    cambiarColorBoton(){
        if(this.state.color === "white")
            this.setState({
                color: "pink",
            })
        else   
            this.setState({
                color: "white",
            }) 
    }   


    render(){
        return(
        <div className="tarjetaPadre"  style = {{backgroundColor: this.state.color}}
        onMouseEnter={this.cambiarColorHover.bind(this)}
        onMouseOut={this.cambiarColorHover2.bind(this)}
        >
            <img src={this.props.datosPersonaje.image} className='imagenTarjeta'></img>
            <div className='tarjetaHijo'>
            <h3>{this.props.datosPersonaje.name}</h3>
            <p>{this.props.datosPersonaje.status} - {this.props.datosPersonaje.species}</p>
            <p>Origin: {this.props.datosPersonaje.origin.name}</p>
            <button onClick={this.cambiarColorBoton.bind(this)}>Cambiar color</button>
            <button onClick={this.props.borrarPersonaje.bind(this)}>Borrar</button>
            </div>
        </div>
        );
    }

}

export default Tarjeta;
