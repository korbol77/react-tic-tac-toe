import { Box } from "./Box";

export const GameBoard = ({ gameBoard, winner, winFields, onClick }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-2">
        {gameBoard.map((element, index) => (
          <li key={index + 1} className="size-12 sm:size-14">
            <Box
              element={element}
              winner={winner}
              winField={winFields != null && winFields.includes(index)}
              onClick={() => element == null && onClick(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
