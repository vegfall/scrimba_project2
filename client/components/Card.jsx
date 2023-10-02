import React from "react";

export default function Card(props) {
    let badgeText;

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div>
            {badgeText !== null && <div className="cardBadge">{badgeText}</div>}
            <img src={props.img} width={"200px"} alt={props.img.toString()}/>
            <br />
            <small>{props.rating} ({props.reviewCount}) >{props.location}</small>
            <p>{props.title}</p>
            <b>NOK{props.price};-</b>
        </div>
    )
};