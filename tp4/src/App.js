import React from 'react';
import './App.css';
import Monprofil from './Component/Mon Profil/Monprofil';
import Publication from './Component/Publication/Publication';
import Profil from './Component/Autres Profils/Profil';
import bob from './img/bob.png';
import camille from './img/camille.jpg';
import martine from './img/martine.jpg';

class App extends React.Component {
 
 
  constructor(props) {
    super(props);
 
   
    this.state = {
      
 profils : [
    {
      prenom: "Bob",
      nom: "Thome",
      anniversaire: "8/10/1978",
      post: "Je prefere le Rock",
      image: bob,
      like: 0,
      //id:1
      
    },
    {
      prenom: "Martine",
      nom: "Dupont",
      anniversaire: '12/03/1998',
      post: 'Je prefere le Jazz',
      image: martine,
      like: 0,
      //id:2
    },
    {
      prenom: 'Camille',
      nom: 'Dupuy',
      anniversaire: '12/12/1998',
      post: 'Je prefere le Rap',
      image: camille,
      like: 0,
      //id:3
    }
  ],
 
 show: 0
    
};
}

handleClick(i){
  this.setState({show: i})
}



 render(){
 
  return (
    <div className="App">
      <p> I'm the parent</p>
       
      <Profil 
          prenom={this.state.profils[0].prenom}
          onClick={() => this.handleClick(0)}
      />
      <Profil 
          prenom={this.state.profils[1].prenom}
          onClick={() => this.handleClick(1)}
      />
      <Profil 
          prenom={this.state.profils[2].prenom}
          onClick={() => this.handleClick(2)}
      />

      <Monprofil 
       image={this.state.profils[this.state.show].image}
       prenom={this.state.profils[this.state.show].prenom}
       nom={this.state.profils[this.state.show].nom}
       anniversaire={this.state.profils[this.state.show].anniversaire}
      />

      <Publication 
        post={this.state.profils[this.state.show].post}
      />
  
    </div>
  );
}
}

export default App;
