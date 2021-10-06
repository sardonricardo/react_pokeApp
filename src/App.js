import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import {userContext} from './context/useContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './style/styles.scss'
import './App.css'


const App = () => {

  

 const [newPokemon, setNewPokemon] = useState([])

 
  const dataPokemon = {
    newPokemon: newPokemon,
    setNewPokemon: setNewPokemon
  } 

  return (
    <div className="App">

        <BrowserRouter>
        <userContext.Provider value={dataPokemon}> 
          <Header/>
          <Main/> 
        </userContext.Provider>
        </BrowserRouter>
        
        <Footer/>

    </div>
  );
}

export default App;
