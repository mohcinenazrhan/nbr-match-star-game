import React from 'react';

const PlayAgain = (props) => {
  return (
    <div className="game-done">
      <button onClick={props.onClick}>Play Again</button>
    </div>
  );
}
 
export default PlayAgain;