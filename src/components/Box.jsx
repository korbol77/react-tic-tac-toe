export const Box = ({ element, winner, onClick }) => {
  return (
    <button
      className={`${
        element == "X" ? "text-red-500" : "text-blue-500"
      } bg-zinc-800 shadow-[0_0_10px_rgb(39,39,42)] rounded-xl h-14 w-14 font-extrabold text-4xl`}
      onClick={onClick}
      disabled={winner}
    >
      {element}
    </button>
  );
};
