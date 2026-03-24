import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "../NavMenu";

export function Header() {
  return (
    <header className="bg-backgroundtop-0 z-50 w-full bg-[#0B0F19] border-b border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-danger flex h-9 w-9 items-center justify-center rounded-lg">
              <Gamepad2 className="h-7 w-7 text-primary" />
            </div>
            <span className="text-lg font-bold text-primary tracking-tight hidden sm:block">
              Game<span className="text-[#EF4444] ">Guide</span>Hub
            </span>
          </Link>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
