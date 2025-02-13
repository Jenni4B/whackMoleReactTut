import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './Scoreboard';

const Game = () => {
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(new Array(9).fill(false));

  useEffect(() => {
    const highlightMole = () => {
      setGrid(prevGrid => {
        const newGrid = new Array(9).fill(false);
        newGrid[Math.floor(Math.random() * 9)] = true;
        return newGrid;
      });
    };

    highlightMole();
    const moleTimer = setInterval(highlightMole, 1000);

    return () => clearInterval(moleTimer);
  }, []);

  const handleMoleClick = (index) => {
    if (grid[index]) {
      setScore(prevScore => prevScore + 1);
      setGrid(new Array(9).fill(false));
    }
  };

  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <ScoreBoard score={score} />
      <Grid grid={grid} onMoleClick={handleMoleClick} />
    </div>
  );
};

export default Game;