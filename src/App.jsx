import { useState } from "react";

import { winBoard } from "./constants/winBoard";
import { GameBoard } from "./components/GameBoard";

const App = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const changePlayerTurn = () => {
    setPlayerTurn(playerTurn == "X" ? "O" : "X");
  };

  const checkWin = (board) => {
    winBoard.map((el) => {
      const [el1, el2, el3] = el;

      if (
        board[el1] == playerTurn &&
        board[el1] == board[el2] &&
        board[el2] == board[el3]
      ) {
        setWinner(playerTurn);
      } else {
        board.includes(null) ? changePlayerTurn() : setWinner("Tie");
      }
    });
  };

  const playerMove = (boardIndex) => {
    let updatedBoard = [...gameBoard];
    updatedBoard[boardIndex] = playerTurn;

    setGameBoard(updatedBoard);
    checkWin(updatedBoard);
  };

  return (
    <main className="h-svh flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-black text-zinc-100 drop-shadow-[0_0_5px_rgba(244,244,245,0.5)]">
        Tic-Tac-Toe
      </h1>
      {winner && (
        <p className="text-2xl font-bold text-green-500">Winner: {winner}</p>
      )}
      <GameBoard gameBoard={gameBoard} winner={winner} onClick={playerMove} />
    </main>
  );
};

export default App;
