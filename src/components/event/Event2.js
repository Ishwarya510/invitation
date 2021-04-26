
import React from 'react'
import "./event.css"

const Event2 = (props) => {
    return (
        <div className="eve2">
            
           
            <img src={props.img} alt="" className="win" />
            <div className="even">
                <p>{props.date}</p>
                <h3>{props.event}</h3>
                <p>{props.para}</p>
            
                </div>
        </div>
    )
}
export default Event2
