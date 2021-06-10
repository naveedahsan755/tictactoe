import React, { useState } from "react";

import Board from "./components/Board";
import findwin from "./components/findwin";
import Status from "./components/Status";
import Reset from "./components/Reset";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);

  const { win, winRow } = findwin(board);

  const onClickHandle = (pos) => {
    let newBoard = board.map((itm, ind) => {
      if (!win && !board.every((el) => el) && ind === pos && !itm) {
        setIsNextX(!isNextX);
        return isNextX ? "X" : "0";
      }
      return itm;
    });
    setBoard(newBoard);
  };

  const resetHandle = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Status isNextX={isNextX} win={win} board={board} />
      <Board board={board} onClickHandle={onClickHandle} winRow={winRow} />
      <Reset board={board} resetHandle={resetHandle} win={win} />
    </div>
  );
}

export default App;
