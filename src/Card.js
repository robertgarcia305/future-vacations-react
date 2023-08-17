import React from "react";
import ReactDOM from "react-dom";

import location from "./img/location.svg";

const Card = (props) => {
    return (
        <div className="card-wrap">
            <div className="card-img-wrap">
                <img src={props.item.pic}></img>
            </div>
            <section>
                <div className="location-wrap">
                    <img src={location}></img>
                    <p>{props.item.location}</p>
                    <a className="google-maps" target="_blank" href={props.item.googleMapsLink}>Check On Google Maps</a>
                </div>
                <h3>{props.item.title}</h3>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </section>
        </div>



    )
};

export default Card;