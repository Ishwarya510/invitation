import React from 'react'
import "./RP.css"

const RP = () => {
    return (
        <div id="h2">
            <h2>You are invited</h2>
            
                <form>
                <div className="inpu">
                <input type="text" placeholder="Name" className="name"/>
                <input type="email" placeholder="Email" className="email"/>
                <input type="text" placeholder="No. of guest attending" className="guest"/>
                <input type="text" placeholder="Attending on" className="attend"/>
                <textarea name="Message" rows="6" cols="50" placeholder="Message" className="message"></textarea>
                </div>
                <div className="but">
                <button id="btn">Confirm Invitation</button>
                </div>
                </form>
            

        </div>
    )
}
export default RP
