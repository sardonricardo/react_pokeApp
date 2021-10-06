import React from 'react'
import Card from '../Card/Card'

const ListaPokemon = (props) => {

    console.log(props)

    const paintCard = () => {
        
        return props.info.map((pokemon, i) =>  <Card info={pokemon} key={i}  />)
        
    }

    return (
        <div className="container-card">
          {paintCard()}   
        </div>
    )
}

export default ListaPokemon
