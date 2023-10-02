import React from "react";
import Card from "./Card";
import data from "../data";

export default function MainContent() {
    const dataValues = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <section className="cardSection">
            {dataValues}
        </section>
    )
};