import React from 'react'; 

const PokeCard = (props) => {

  const poke = props.info

  console.log(props)

  return (
    <section>
    <div className="container-pokemon" >
        <p className="pokemon-number">#{props.info.id}</p>
        <div className="container-image">
          <img src={poke.sprites.front_default?poke.sprites.front_default:"..."} alt="" />
        </div>
        <h1>{poke.name?poke.name: ""}</h1>
        <div className="container-data">
        <p>Weight: {poke.weight?poke.weight:"..."} kg</p>
        <p>Height: {poke.height?poke.height:"..."} ft</p>
        <p>Ability: {props.info.abilities[0].ability.name}</p>
        <p className={poke.types[0].type.name?poke.types[0].type.name:"..."}>{props.info.types[0].type.name}</p>
        <p>Base experience: {props.info.base_experience} exp</p>
        </div>

          {/*   <i className={`wi ${props.weatherIcon} display-1`}></i> 
          </h1>
          <h2>{props.temp_celsius}&deg;</h2>
          {minmaxTemp(props.temp_min,props.temp_max)}
          <h4>{props.description}</h4> * */}
    </div>
</section>
  )
}

export default PokeCard
