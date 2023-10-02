import React from "react";

const originalValue = ["Bulbasaur", "Charmander", "Squirtle"];
let value;

value = originalValue.map(pokemon => <p>{pokemon}</p>)


export default function Task() {
    return (
        <div>
            {originalValue}
            <p>{value}</p>
        </div>
    );
};