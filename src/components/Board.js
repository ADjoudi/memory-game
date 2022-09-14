import React, { useEffect } from "react";

export default function Board(props) {
  return (
    <div className={props.className}>
      {props.order.map((position, i) => (
        <img
          key={i}
          alt={i + 1}
          id={"card" + i}
          src={require("../assets/card/" + (i + 1) + ".jpg")}
          className={"p" + position}
          onClick={props.handleCardClick}
        />
      ))}
    </div>
  );
}
