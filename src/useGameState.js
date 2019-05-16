import { useState, useEffect } from 'react';
import { utils } from './gameLogicHelper';

// Custom hook
export const useGameState = () => {
  // Random number of stars to show
  const [starsNbr, setStarsNbr] = useState(utils.random(1, 9))

  // Btn states
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  // Counter state
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== starsNbr) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStarsNbr(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    starsNbr,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
    setStarsNbr,
    setAvailableNums,
    setCandidateNums,
    setSecondsLeft
  };
};