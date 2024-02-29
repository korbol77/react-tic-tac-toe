import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

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

  const resetGame = () => {
    setGameBoard(Array(9).fill(null));
    setPlayerTurn("X");
    setWinner(null);
  };

  return (
    <main className="h-svh flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-black text-zinc-100 drop-shadow-[0_0_5px_rgba(244,244,245,0.5)]">
        Tic-Tac-Toe
      </h1>
      {winner ? (
        <p className="text-2xl font-bold text-green-500">
          Winner: <span className="underline">{winner}</span>
        </p>
      ) : (
        <p className="text-xl font-bold text-zinc-300">
          Player Turn:{" "}
          <span
            className={playerTurn == "X" ? "text-red-500" : "text-blue-500"}
          >
            {playerTurn}
          </span>
        </p>
      )}
      <GameBoard gameBoard={gameBoard} winner={winner} onClick={playerMove} />
      <button
        className="flex gap-1 items-center [&>svg]:hover:animate-[spin_1s_ease-in-out_1] text-zinc-500 bg-red-600/20 rounded-lg px-2 py-0.5"
        onClick={resetGame}
      >
        <ArrowPathIcon className="size-6" />
        <p className="font-medium">Reset Game</p>
      </button>
    </main>
  );
};

export default App;
