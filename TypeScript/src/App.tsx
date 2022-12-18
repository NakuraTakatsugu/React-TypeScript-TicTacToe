import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from "react";
import ReactDOM from "react-dom";
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

/* ------------------------------
Square
------------------------------ */
  const Square = () => {
    return <button className="square">{/* TODO */}</button>;
  };

/* ------------------------------
Board
------------------------------ */
  const Board = () => {
    const renderSquare = (i: number) => {
      return <Square />;
    };
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

/* ------------------------------
Game
------------------------------ */
  const GameApp = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  };

// ========================================


  return (
    <GameApp />
  )
}
