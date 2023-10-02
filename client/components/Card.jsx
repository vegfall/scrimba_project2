import React from "react";

export default function Card(props) {

    return (
        <div>
            <img src={props.img} width={"200px"} alt={props.img.toString()}/>
            <br />
            <small>{props.rating} ({props.reviewCount}) >{props.country}</small>
            <p>{props.title}</p>
            <b>NOK{props.price};-</b>
        </div>
    )
};