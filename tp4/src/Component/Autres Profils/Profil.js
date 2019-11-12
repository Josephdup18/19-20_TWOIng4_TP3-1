import React, { Component } from 'react';

class Profil extends Component {
   
    constructor(props){
        super(props);
    }  
  
    render() {
        return (
            <div className="box-header">
            <button onClick={this.props.onClick}>
                <p>{this.props.prenom}</p>
            </button>
            </div>
        );
    }
}

export default Profil;