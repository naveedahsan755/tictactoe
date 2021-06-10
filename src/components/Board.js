import React from "react";

const Board = ({ board, onClickHandle, winRow }) => {
  const box = (pos) => (
    <button
      style={{
        fontWeight: winRow && winRow.includes(pos) ? "bold" : "normal",
        color: board[pos] === "X" ? "red" : "orange",
      }}
      className="box"
      onClick={() => onClickHandle(pos)}
    >
      {board[pos]}
    </button>
  );
  return (
    <div>
      <div className="boxrow">
        {box(0)}
        {box(1)}
        {box(2)}
      </div>
      <div className="boxrow">
        {box(3)}
        {box(4)}
        {box(5)}
      </div>
      <div className="boxrow">
        {box(6)}
        {box(7)}
        {box(8)}
      </div>
    </div>
  );
};

export default Board;
