import React from "react";
import './Card.css'

const Card = (prop) => {
    let imgSource = "https://robohash.org/" + prop.name + "?200x200";
    // Just like in SwiftUI we can only return one item at the root of return
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={imgSource} alt="robo-img" />
            <div className="tc">
                <h2>
                    {prop.name}
                </h2>
                <p>{prop.email}</p>
            </div>
        </div>
    );
}

export default Card;