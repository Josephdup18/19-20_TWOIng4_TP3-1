import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

class Monprofil extends React.Component {
   
   constructor(props){
    super(props);
}

    render() {
        return (
           
            <div className="BOX-profil">
            <img src={this.props.image}/>   
            <p>{this.props.prenom} {this.props.nom}</p>
            
            <p>{this.props.anniversaire}</p>
        </div>
    );
        
      
    }
}

export default Monprofil;