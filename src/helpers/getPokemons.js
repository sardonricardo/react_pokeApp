const getPokemons = async () => {
    
    

//Declaramos la constante url
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
//Declaramos el response:
    const res = await fetch(url); //Fetch a la url. 
//Declaramos el user;
    const inputValue = await res.json(); 

    console.log(inputValue)

    return inputValue

}


export default getPokemons