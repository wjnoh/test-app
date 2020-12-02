import React, { useState } from "react";
import CardList from "./components/CardList";
import "./App.scss";

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      content: <div>0</div>,
      bro: [
        {
          id: 2,
          content: <div>2</div>,
        },
      ],
      child: {
        id: 1,
        content: <div>1</div>,
        child: {
          id: 3,
          content: <div>3</div>,
          bro: [
            {
              id: 4,
              content: <div>4</div>,
            },
            {
              id: 5,
              content: <div>5</div>,
            },
          ],
        },
      },
    },
    {
      id: 6,
      content: <div>6</div>,
      child: {
        id: 7,
        content: <div>7</div>,
      },
    },
  ]);

  return (
    <div className="App">
      {cards &&
        cards.map((card, index) => {
          return <CardList key={index} data={card} />;
        })}
    </div>
  );
}

export default App;
