import React from 'react';

const StarsDisplay = (props) => {
  return (
    <>
      {
        props.stars.map(startId =>
          <div key={startId} className="star" />
        )
      }
    </>
  );
}

export default StarsDisplay;