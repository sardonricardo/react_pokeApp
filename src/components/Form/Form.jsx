import React, { useContext, useState, useEffect } from 'react';
import { useDebounce } from "use-debounce";
import ListaPokemon from '../ListaPokemon/ListaPokemon';
import { userContext } from '../../context/useContext';
import { Input } from '@nextui-org/react';
import logo from "../../assets/logogrey.png"


const Form = () => {

  const [inputValue, setValue] = useState("");
  /* const [previous, setPrevious] = useState(""); */ //Vacío para evitar la precarga. 
  const [debouncedValue] = useDebounce(inputValue, 2000);
  const {newPokemon, setNewPokemon} = useContext(userContext)
  /* const [posts, setPosts] = useState([]);//Para los pokemons.  */

  useEffect(

    async () => {

      try {
        /* console.log(inputValue) */
        if (inputValue){
        const value = inputValue.toLowerCase(); 
        
        const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value}`);

        const json = await res.json();

        console.log(json)

        setNewPokemon([...newPokemon, json]);
      }

      }catch(error){

        setNewPokemon([]); //Restaurar pokemons. 

      }
    },
    [debouncedValue]
  );

  /* const handleSubmit = e => {
    e.preventDefault();
    setPrevious(inputValue)
    setValue(e.target.elements.name.value);
  }; */

  const handleChange = (e) => {
    e.preventDefault();
   /*  setPrevious(inputValue) */
    setValue(e.target.value);
  }

  return <section className="container-form">

    <div className="logo-container">
        <img src={logo} alt="logo" />
    </div>

    <Input labelPlaceholder="Search pokemon..." color="black" underlined animated={false} className="name-input" name="name"  onChange={handleChange}/>

    <div className="container-list"> 
        <ListaPokemon info={newPokemon}/>
    </div>

  </section>;
};

export default Form
