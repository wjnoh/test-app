import React from "react";
import Card from "./Card";
import "./CardList.scss";

function CardList({ data }) {
  return (
    <div className="card-list">
      <Card key={data.id} data={data} />
    </div>
  );
}

export default CardList;
