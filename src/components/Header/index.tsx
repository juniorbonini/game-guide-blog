import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background p-5 justify-around items-center px-35">
      <div>
        <div>
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-danger p-1.5 rounded-md items-center justify-center">
              <Gamepad2 className="h-7 w-7 text-primary" />
            </div>
            <span className="text-lg font-bold text-primary tracking-tight hidden sm:block">
              Game<span className="text-[#EF4444] ">Guide</span>Hub
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
