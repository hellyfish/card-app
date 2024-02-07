/* eslint-disable react/prop-types */
import { useState } from "react";
import { cardData } from "../assets/cardData";
import ReactCardFlip from "react-card-flip";
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export default function Card(props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });
    const style = transform ? {
        transform: CSS.Translate.toString(transform),
      } : undefined;

    const cardObject = cardData.cards[[props.cardNo]];
    const [isFlipped, setIsFlipped] = useState(false); // front: false, back: true

    function flipCard() {
        setIsFlipped(prevState => {
            return !prevState;
        })
    }

    return (
        <div className="card-container" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <img
                    src={`/card-png/${cardObject.id}.png`}
                    onClick={flipCard}
                    alt={`${cardObject.value} of ${cardObject.suit}`}
                    className="card-img front" />
                <img
                    src="/card-backs/red.png"
                    onClick={flipCard}
                    alt="Card back."
                    className="card-img back" />
            </ReactCardFlip>
        </div>
    );
}