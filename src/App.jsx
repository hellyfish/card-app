import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Hand from './components/Hand.jsx';
import {DndContext, useSensors, useSensor, PointerSensor} from '@dnd-kit/core';

function App() {
  const [cardId, setCardId] = useState(Math.floor(Math.random() * 52));
  const [parent, setParent] = useState(null);
  const card = (
    <Card cardNo={cardId} data-no-dnd="true"/>
  )

  // allows onclick on child nodes
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  function drawCard() {
    setCardId((prevCard) => {
      let newCard;
      do {
        newCard = Math.floor(Math.random() * 52)
      } while (newCard === prevCard);
      return newCard
    });
  }

  function handleDragEnd(event) {
    const {over} = event;
    console.log("over", over);
    setParent(over ? over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <h1>Card App</h1>
      <div>
        {parent === null ? card : null}
        {/* <p>Your card is {cardObject.value} of {cardObject.suit}!</p> */}
      </div>
      <button onClick={drawCard}>Get new card</button>
      <Hand id="hand" cardNo={cardId}>
        {parent === "hand" ? card : <h1>Drop card here</h1>}
      </Hand>
    </DndContext>
  );
}

export default App;
