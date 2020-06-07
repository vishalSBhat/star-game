import React from 'react';
import DisplayNumber from "./DisplayNumber";

const RightPlayArea = (props) => {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="playArea-right">
            {nums.map(value => (
              <DisplayNumber
                key={value}
                value={value}
                status={props.numberStatus(value)}
                onClick={props.onClick}
              />
            ))}
        </div>
    )
}

export default RightPlayArea;