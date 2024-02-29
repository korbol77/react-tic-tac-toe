export const Box = ({ element, winner, onClick }) => {
  return (
    <button
      className={`${
        element == "X" ? "text-red-500" : "text-blue-500"
      } bg-zinc-800 shadow-[0_0_5px_rgb(39,39,42)] rounded size-full font-extrabold text-4xl select-none`}
      onClick={onClick}
      disabled={winner}
    >
      {element}
    </button>
  );
};
