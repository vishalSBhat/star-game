import React from 'react';

const DisplayNumber = props => (
    <button
      className={`number ${props.status}`}
      onClick={() => props.onClick(props.value, props.status)}
    >
      {props.value}
    </button>
  );

  export default DisplayNumber;