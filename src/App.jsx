import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

import { winBoard } from "./constants/winBoard";
import { GameBoard } from "./components/GameBoard";

const App = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winFields, setWinFields] = useState(null);

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
        setWinFields(el);
      } else {
        board.includes(null) ? changePlayerTurn() : setWinner("tie");
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
    setWinFields(null);
  };

  return (
    <main className="h-svh flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
        Tic-Tac-Toe
      </h1>
      {winner ? (
        <p className="text-2xl font-bold text-green-500">
          {winner == "tie" ? "Tie!" : `Winner ${winner}!`}
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
      <GameBoard
        gameBoard={gameBoard}
        winner={winner}
        winFields={winFields}
        onClick={playerMove}
      />
      <button
        className="flex gap-1 items-center [&>svg]:hover:animate-[spin_1s_ease-in-out_1] text-zinc-500 hover:bg-zinc-100/10 duration-300 rounded-lg px-2 py-0.5"
        onClick={resetGame}
      >
        <ArrowPathIcon className="size-6" />
        <p className="font-medium">Reset Game</p>
      </button>
    </main>
  );
};

export default App;
