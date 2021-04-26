import React from 'react'
import "./couple.css"

function Couple2(props) {
    
    return (
        <div className="couple">
            <img src={props.image} alt="" className='img1'/>
            <div className="bio">
            <p>{props.bio}</p>
            </div>
            
        </div>
    )
}

export default Couple2
