import React, { Component } from 'react'
import Event2 from "./Event2"
import "./event.css"

export class Event extends Component {
    render() {
        return (
            <div className="eve">
                <h2>Event</h2>
            <div className="event">
                <Event2 img="how-to-throw-a-great-bridal-shower-.jpg" event="Bridal Shower" date="20 Feb 2024" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
                <Event2 img="digitising-the-traditional.jpg" event="Reception" date="3 April 2024" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
                <Event2 img="shades-photography.jpg" event="Wedding" date="4 April 2024" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
                
            </div>
            </div>
        )
    }
}

export default Event