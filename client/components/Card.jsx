import React from "react";

export default function Card(props) {
    let badgeText;

    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div>
            {badgeText !== null && <div className="cardBadge">{badgeText}</div>}
            <img src={props.item.coverImg} width={"200px"} alt={props.item.coverImg.toString()}/>
            <br />
            <small>{props.item.stats.rating} ({props.item.stats.reviewCount}) >{props.item.location}</small>
            <p>{props.item.title}</p>
            <b>NOK{props.item.price};-</b>
        </div>
    )
};