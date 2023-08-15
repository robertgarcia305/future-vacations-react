import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
    return (
        <div className="card-wrap">
            <div className="card-img-wrap">
                <img src={props.item.img}></img>
            </div>
            <section>
                <a href={props.item.googleMapsLink}>Check On Google Maps</a>
                <h3>{props.item.title}</h3>
                <p>{props.item.location}</p>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </section>
        </div>
    )
};

export default Card;