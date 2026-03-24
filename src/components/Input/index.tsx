import { Search } from "lucide-react";
import { InputProps } from "./input";

export function Input({ ...props }: InputProps) {
  return (
    <div className="hidden sm:flex relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search games, guides..."
          className="h-9 w-48 lg:w-64 rounded-lg border border-primary/10 bg-primary/5 pl-9 pr-4 text-sm text-primary placeholder:text-gray-500 focus:border-danger/50 focus:outline-none focus:ring-1 focus:ring-danger/50 transition-all"
          {...props}
        />
      </div>
    </div>
  );
}
