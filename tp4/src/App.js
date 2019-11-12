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
      post: "Salut tous le monde, je viens de decouvrir on verra de Nekfeu, vous connaissez ?",
      image: bob,
      like: 0,
      //id:1
      
    },
    {
      prenom: "Martine",
      nom: "Dupont",
      anniversaire: '12/03/1998',
      post: "Qui peut me rappeler chez qui était l'after hier soir ? ",
      image: martine,
      like: 0,
      //id:2
    },
    {
      prenom: 'Camille',
      nom: 'Dupuy',
      anniversaire: '12/12/1998',
      post: "Camille est un surnom... Mon vrai nom c'est Batman !",
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
      <header>
       <h3 style={{textAlign:"center"}}>Mon Facebook Ultra-lite</h3>
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
    </header>

    <main>
      <Monprofil 
       image={this.state.profils[this.state.show].image}
       prenom={this.state.profils[this.state.show].prenom}
       nom={this.state.profils[this.state.show].nom}
       anniversaire={this.state.profils[this.state.show].anniversaire}
      />

      <Publication 
        post={this.state.profils[this.state.show].post}
      />

      </main>
  
    </div>
  );
}
}

export default App;
