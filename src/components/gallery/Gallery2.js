import React from 'react'
import "./gallery.css"

function Gallery2(props) {
    const mystyle={
        width:"200px",
        height:"300px"
    }
    return (
        <div className="gallery">
            <img src={props.img} alt="" style={mystyle}/>
        </div>
    )
}

export default Gallery2
