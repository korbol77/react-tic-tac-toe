export const Box = ({ element, winner, winField, onClick }) => {
  return (
    <button
      className={`${
        winField
          ? "text-green-500 !bg-green-500/20"
          : element == "X"
          ? "text-red-500"
          : "text-blue-500"
      } bg-zinc-800 shadow-[0_0_10px_rgba(39,39,42,0.8)] rounded size-full font-extrabold text-4xl select-none`}
      onClick={onClick}
      disabled={winner}
    >
      {element}
    </button>
  );
};
