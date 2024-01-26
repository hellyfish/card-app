import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';

function App() {
  const [cardId, setCardId] = useState(Math.floor(Math.random() * 52));

  function drawCard() {
    setCardId((prevCard) => {
      let newCard;
      do {
        newCard = Math.floor(Math.random() * 52)
      } while (newCard === prevCard);
      return newCard
    });
  }

  return (
    <>
      <h1>Card App</h1>
      <Card cardNo={cardId}/>
      <button onClick={drawCard}>Get new card</button>
    </>
  );
}

export default App;
