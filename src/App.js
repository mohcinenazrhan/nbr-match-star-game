import React from 'react';

import './App.css';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';
import { utils } from './gameLogicHelper';
import { useGameState } from './useGameState';

function App() {

  const {
    starsNbr,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
    setStarsNbr,
    setAvailableNums,
    setCandidateNums,
    setSecondsLeft
  } = useGameState();

  // Check if candidates are wrong
  const candidatesAreWrong = utils.sum(candidateNums) > starsNbr;

  // Game status whether if lost, win or still active
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';  

  const resetGame = () => {
    setStarsNbr(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
    setSecondsLeft(10);
  };

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  }

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          { gameStatus !== 'active'
             ? <PlayAgain onClick={resetGame} gameStatus={gameStatus} />
              : <StarsDisplay stars={utils.range(1, starsNbr)} /> 
          }
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber 
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
}

export default App;
