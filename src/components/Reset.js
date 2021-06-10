import React from "react";

const Reset = ({ board, resetHandle, win }) => {
  return (
    <button
      className={`btnrst ${win || board.every((el) => el) ? "btnact" : ""}`}
      onClick={resetHandle}
    >
      Reset Game
    </button>
  );
};

export default Reset;
