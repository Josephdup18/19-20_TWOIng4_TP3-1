import React, { Component } from 'react';


class Monprofil extends React.Component {
   
   constructor(props){
    super(props);

    this.state = {
        color: ""
    }
}


handleClick = (e) => {
    if (this.state.color === "lightblue") {
        this.setState({
            color: "MediumTurquoise"
        })
    }

    
    else if(this.state.color === "MediumTurquoise") {
        this.setState({
            color: "white"
        })
    }

    else  {
        this.setState({
            color: "lightblue"
        })
    }
}


    render() {
        return (
           
            <div className="BOX-profil"style={{backgroundColor: this.state.color}}>
            <img src={this.props.image}/>   
            <p>{this.props.prenom} {this.props.nom}</p>
            
            <p>Date d'anniversaire : {this.props.anniversaire}</p>
            <button onClick={this.handleClick}>Change color</button>
        
        </div>
    );
        
      
    }
}

export default Monprofil;