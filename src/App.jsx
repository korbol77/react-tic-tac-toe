import { useState } from "react";

import { winBoard } from "./constants/winBoard";
import { Scoreboard } from "./components/Scoreboard";
import { GameBoard } from "./components/GameBoard";
import { ResetButton } from "./components/ResetButton";

const App = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("X");
  const [wins, setWins] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState(null);
  const [winFields, setWinFields] = useState(null);

  const changePlayerTurn = () => {
    setPlayerTurn(playerTurn == "X" ? "O" : "X");
  };

  const checkWin = (board) => {
    let currentWinner = null;

    winBoard.map((el) => {
      const [el1, el2, el3] = el;

      if (
        board[el1] == playerTurn &&
        board[el1] == board[el2] &&
        board[el2] == board[el3]
      ) {
        currentWinner = playerTurn;
        setWinFields(el);
      }
    });

    if (!currentWinner)
      board.includes(null) ? changePlayerTurn() : setWinner("tie");
    else {
      setWinner(currentWinner);
      setWins((prev) =>
        currentWinner == "X"
          ? { X: prev.X + 1, O: prev.O }
          : { X: prev.X, O: prev.O + 1 }
      );
    }
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
      <Scoreboard wins={wins} />
      {winner ? (
        <p className="text-2xl font-bold text-green-500 animate-pulse">
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
      <ResetButton onClick={resetGame} />
    </main>
  );
};

export default App;
