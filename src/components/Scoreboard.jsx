import { TrophyIcon } from "@heroicons/react/16/solid";

export const Scoreboard = ({ wins }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-xl sm:text-2xl font-bold mb-5">
      <div className="flex items-center gap-1">
        <p className="text-red-500">
          Player X: <span className="text-zinc-200">{wins.X}</span>
        </p>
        <TrophyIcon className="size-6 text-yellow-600" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-blue-500">
          Player O: <span className="text-zinc-200">{wins.O}</span>
        </p>
        <TrophyIcon className="size-6 text-yellow-600" />
      </div>
    </div>
  );
};
