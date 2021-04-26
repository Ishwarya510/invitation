import React from 'react'
import Couple2 from "./Couple2"
import "./couple.css"

const Couple = () => {
    return (
        <div className="hh">
             <h2>Lovely Couple</h2>
        <div className="lovely">
           
            <Couple2  image="asian-bride-indian-beauty.jpg" bio="Hi I'm Iyra,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  "/>
            <Couple2 image="sherwani-groom-wedding-sherwani.jpg" bio="Hi I'm Akshay,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
        </div>
        </div>
    )
    }
    export default Couple
