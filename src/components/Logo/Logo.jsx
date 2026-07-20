import {Clapperboard } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
  <div className="bg-black p-2 rounded-lg">
    <Clapperboard
      size={32}
      className="text-gray-400"
    />
  </div>

  <span className="text-3xl font-bold text-red-500">
    MovieFlix
  </span>
</div>
  );
}
export default Logo;