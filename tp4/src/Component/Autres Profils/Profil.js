import React, { Component } from 'react';

class Profil extends Component {
   
    constructor(props){
        super(props);
    }  
  
    render() {
        return (
            <button onClick={this.props.onClick}>
                <p>{this.props.prenom}</p>
            </button>
        );
    }
}

export default Profil;