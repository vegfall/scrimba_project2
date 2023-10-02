import React from "react";
import Card from "./Card";
import art from "../images/art.png"

export default function MainContent() {
    return (
        <div>
            <Card
                img={art}
                rating={5.0}
                reviewCount={6}
                country={"Norway"}
                title={"Great art"}
                price={1000000}
            />
        </div>
    )
};