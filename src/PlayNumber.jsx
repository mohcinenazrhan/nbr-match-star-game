import React from 'react';

// Status theme colors
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const PlayNumber = (props) => {
  return ( 
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => console.log('Number', props.number) }
    >
      {props.number}
    </button>
  );
}
 
export default PlayNumber;