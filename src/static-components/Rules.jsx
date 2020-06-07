import React, {useState} from 'react';
import arrow from "../images/arrow.png";

const Rules = () => {

    let [toggle, toggleUpdate] = useState(false);

    const toggleClick = () => toggleUpdate(!toggle);

    return (
    <div className='rules'>
          <div className='rules-title'>
            <h2>Game Play</h2>
            <img style={{cursor: 'pointer'}} src={arrow} alt="Show" onClick={toggleClick}/>
          </div>
          {toggle && 
          <div className="rules-content">
            <p style={{fontSize: '20px'}}>On the top(or left) of the play area random number of stars will be displayed.
              You will have to select either a number or set of numbers whose value will be equal
              to the number of stars present on the top(or left).
            </p>
            <h3>Color Representation:</h3>
            <ul>
              <li>White(No color) - Available for use</li>
              <li>Yellow - Already used</li>
              <li>Blue - Currently selected</li>
              <li>Red - Wrong selection</li>
            </ul>
          </div>
          }
        </div>

        );

    }

export default Rules;