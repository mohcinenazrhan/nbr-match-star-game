import React from 'react';

const PlayNumber = (props) => {
  return ( 
    <button className="number" onClick={() => console.log('Number', props.number) }>
      {props.number}
    </button>
  );
}
 
export default PlayNumber;