import React from "react";
import "../assets/styles/components/Card.css";

const Card = ({ id, title, handleComplete }) => {
  function handleClickComplete() {
    handleComplete(id);
  }

  return (
    <article className="Card">
      <h1 className="Card-title">{title}</h1>
      <div className="Card-buttons">
        <button className="Card-complete" onClick={handleClickComplete}>
          ✔
        </button>
      </div>
    </article>
  );
};

export default Card;
