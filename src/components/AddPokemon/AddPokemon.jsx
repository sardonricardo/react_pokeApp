import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {userContext} from '../../context/useContext'



export default function AddPokemon() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const {newPokemon, setNewPokemon} = useContext(userContext)

  const onSubmit = (info) => {

    console.log('submit', info)

    if(info) {

      setNewPokemon([...newPokemon, info])

    }else {
      console.log('Prueba otra vez!')
    }
  }
  /* const value = useContext(useContext); */
  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="container-form-add">
      
        <div>
          <h2>Create your pokemon</h2>
        </div>
        
        <input placeholder="id" {...register("id", { required: true })} type="number" className="input-value" />
        <label>Give a beautiful name to your Pokemon</label>
        <input placeholder="name" {...register("name", { required: true, minlenght: 3 } )} className="input-value"  />
        <label>Share its image</label>
        <input placeholder="image" {...register("image", { required: true })} className="input-value"  />
        <h3>Which type is it?</h3>
        <div className="select-container">
        <select {...register("typeOne")}>
          <option value="normal">normal</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="ground">ground</option>
          <option value="grass">grass</option>
          <option value="rock">rock</option>
          <option value="steal">steal</option>
          <option value="thunder">thunder</option>
          <option value="dark">dark</option>
          <option value="ghost">ghost</option>
          <option value="fossil">fossil</option>
          <option value="thunder">thunder</option>
          <option value="ice">ice</option>
          <option value="legendary">legendary</option>
          <option value="psy">psy</option>
        </select>
        <select {...register("typeTwo")}>
          <option value="normal">normal</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="ground">ground</option>
          <option value="grass">grass</option>
          <option value="rock">rock</option>
          <option value="steal">steal</option>
          <option value="thunder">thunder</option>
          <option value="dark">dark</option>
          <option value="ghost">ghost</option>
          <option value="fossil">fossil</option>
          <option value="thunder">thunder</option>
          <option value="ice">ice</option>
          <option value="legendary">legendary</option>
          <option value="psy">psy</option>
        </select>
        </div>
    
      {errors.id && errors.name && <span>This field is required</span>}

     
      <input type="submit" value="add Pokemon" />

    </form>
    </>
  );
}