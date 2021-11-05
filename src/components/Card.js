import React from "react";
import './Card.css'

// const Card = (prop) => {
const Card = ({ id, name, username, email }) => {
    // const { id, name, username, email } = prop;
    const imgSource = "https://robohash.org/" + username + "?200x200";
    // Just like in SwiftUI we can only return one item at the root of return
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={imgSource} alt="robo-img" />
            {/* <img src={`https://robohash.org/${prop.id}?200x200`} alt="robo-img" /> This would also have worked*/}
            <div className="tc">
                <h2>
                    {name}
                </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;