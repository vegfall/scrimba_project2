import React from "react";
import Card from "./Card";
import art from "../images/art.png"
import data from "../data";

export default function MainContent() {
    const dataValues = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })

    return (
        <section className="cardSection">
            {dataValues}
        </section>
    )
};