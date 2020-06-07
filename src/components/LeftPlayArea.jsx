import React from "react";
import Star from "./Star";

const LeftPlayArea = (props) => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="playArea-left" id="test">
      {props.gameStatus !== "" && (
        <div className="gameStatus">
          <h2 className="gameMessage">{props.gameStatus}</h2>
          <button className="btn btn-md btn-warning" onClick={props.onClick}>
            Play Again
          </button>
        </div>
      )}
      {nums.map((value) => {
        if (value <= props.stars) return <Star key={value} />;
        return null;
      })}
    </div>
  );
};

export default LeftPlayArea;
