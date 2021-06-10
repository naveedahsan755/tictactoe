import React from "react";

const Status = ({ board, win, isNextX }) => {
  let status = "";
  if (win) {
    status = `Player ${win} is Winner`;
  } else if (board.every((el) => el)) {
    status = "Player X and Player 0 are tie";
  } else {
    status = `Player ${isNextX ? "X" : "0"} Turn`;
  }
  return (
    <div>
      <h3>{status}</h3>
    </div>
  );
};

export default Status;
