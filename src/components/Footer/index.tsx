import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 mt-auto">
      <div className="py-5 flex flex-col items-center justify-between gap-4 text-center">
        <div className="flex items-center text-lg font-semibold text-white">
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-danger flex h-9 w-9 items-center justify-center rounded-lg">
              <Gamepad2 className="h-7 w-7" />
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:block">
              Game<span className="text-danger">Guide</span>Hub
            </span>
          </div>
        </div>

        <p className="text-sm">Explorando o melhor dos games</p>

        <div className="flex gap-0.5">
          <span className="font-medium tracking-tight hidden px-2 sm:block">
            © Game<span className="text-danger">Guide</span>Hub
          </span>
          <p>Produzido por </p>
          <Link
            href="https://github.com/juniorbonini/game-guide-blog"
            target="_blank"
            className="relative px-1 text-gray hover:text-primary font-medium transition-colors group"
          >
            Junior Bonini
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-danger transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
