import React from 'react'
import AddPokemon from '../AddPokemon'
import { Route, Switch } from 'react-router-dom';
import Details from '../Details'
import Form from '../Form'
import Footer from '../Footer'

const Main = () => {
  return (
    
    <main>
          <Switch>
                <Route path="/" component={Form} exact /> 
                <Route path="/new" component={AddPokemon} />
                <Route path="/pokemon/:id" component={Details} />       
                {/* <Route component={Error} /> */}
          </Switch>

          
    </main>
    
  )
  
}

export default Main
