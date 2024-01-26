/* eslint-disable react/prop-types */
import { useState } from "react";
import { cardData } from "../assets/cardData";

export default function Card(props) {
    const cardObject = cardData.cards[[props.cardNo]];
    const [cardFlip, setCardFlip] = useState(false); // front: false, back: true
    const cardImg = cardFlip? `/card-backs/card-back-1.svg` : `/card-svg/${cardObject.img}`

    function flipCard() {
        setCardFlip(prevState => {
            return !prevState;
        })
    }

    return (
        <div className="card-container">
            <img src={cardImg} onClick={flipCard}/>
            <p>Your card is {cardObject.value} of {cardObject.suit}!</p>
        </div>
    );
}