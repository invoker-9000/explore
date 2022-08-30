import React from "react"

export default function Card(props){

    const capLocation = props.item.location.toUpperCase();
    return(
        <div className="card--container">
            <img className="card--photo" src={props.item.imageUrl} alt="Fuji"></img>
            <div className="card--info-container">
            <img className="card--location-marker" src={"../images/marker.png"} alt="Marker"></img>
            <span className="card--location">{capLocation}</span>
            <a className="card--google" href={props.item.googleMapsUrl}> View On Google Maps </a>
            <h2 className="card--title">{props.item.title}</h2>
            <span className="card--date">{props.item.startDate} - {props.item.endDate}</span>
            <p className="card--content">{props.item.description}</p>
            <hr className="card-linebreak" />
            </div>
            
        </div>
    )

}