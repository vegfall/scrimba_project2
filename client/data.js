import art from "./images/art.png"
import cat from "./images/cat.png"
import dog from "./images/dog.png"

export default [
    {
        id: 1,
        title: "Great art",
        description: "Isn't this great art, then I know what is.",
        price: 100000,
        coverImg: art,
        stats: {
            rating: 5.0,
            reviewCount: 6,
        },
        location: "Norway",
        openSpots: 1,
    },
    {
        id: 2,
        title: "A dog",
        description: "Not a cat.",
        price: 1000,
        coverImg: dog,
        stats: {
            rating: 4.0,
            reviewCount: 100,
        },
        location: "Twitter",
        openSpots: 4,
    },
    {
        id: 3,
        title: "A cat",
        description: "Not a dog",
        price: 500,
        coverImg: cat,
        stats: {
            rating: 3.0,
            reviewCount: 1000,
        },
        location: "Youtube",
        openSpots: 10,
    }
];