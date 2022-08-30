import React from "react"
import Navbar from "./component/Navbar"
import Card from "./component/Card"
import data from "./data"


export default function App(){

  const cards = data.map((element)=>
  {
    return (
      <Card key={element.key} item={element}
      />
    )
  })

  return(
    <div>
  <Navbar/>
  <section>
    {cards}
    
  </section>
  
  </div>
    )
}
