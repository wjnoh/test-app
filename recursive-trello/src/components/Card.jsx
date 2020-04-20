import React from "react";
import "./Card.scss";

function Card({ data: { id, content, bro, child } }) {
  return (
    <div className="card">
      {content}
      {bro && bro.map((b) => <Card key={b.id} data={b} />)}
      {child && <Card key={id} data={child} />}
    </div>
  );
}

export default Card;
