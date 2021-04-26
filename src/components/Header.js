import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./header.css"
import "./gallery/gallery.css"
import "./couple/couple.css"

export class header extends Component {
    render() {
        return (
            <div className="home">
                <nav>
                    <ul>
                        <Link to="/">
                        <li>Home</li>
                        </Link>
                        <Link to="/couple">
                        <li>Couple</li>
                        </Link>
                        <Link to="/gallery">
                        <li>Gallery</li>
                        </Link>
                        <Link to="/event">
                        <li>Event</li>
                        </Link>
                        <Link to="/rp">
                        <li>RP</li>
                        </Link>
                    </ul>
                   <div className="dinku">
                   <img src="menu.png" alt="" style={{width:"30px",
                   backgroundColor:"white"}} className="menu-icon"/>
                </div>
                </nav>
            </div>
        )
    }
}

export default header
