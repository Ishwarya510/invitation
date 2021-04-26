import React from 'react'
import Header from "./components/Header"
import Home from "./body/Home"
import Couple from "./components/couple/Couple"
import Event from "./components/event/Event"
import Gallery from "./components/gallery/Gallery"
import RP from "./components/rp/RP"
import {BrowserRouter,Switch,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/couple" component={Couple} />
        <Route path="/event" component={Event} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/rp" component={RP} />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

