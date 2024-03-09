import { ArrowPathIcon } from "@heroicons/react/16/solid";

export const ResetButton = ({ onClick }) => {
  return (
    <button
      className="flex gap-1 items-center [&>svg]:hover:animate-[spin_1s_ease-in-out_1] text-zinc-500 hover:bg-zinc-100/10 duration-300 rounded-lg px-2 py-0.5"
      onClick={onClick}
    >
      <ArrowPathIcon className="size-6" />
      <p className="font-medium">Reset Game</p>
    </button>
  );
};
