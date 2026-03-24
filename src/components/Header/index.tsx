import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "../NavMenu";

export function Header() {
  return (
    <header className="top-0 z-50 border-b border-primary/10">
      <div className="">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-danger flex h-9 w-9 items-center justify-center rounded-lg">
              <Gamepad2 className="h-7 w-7" />
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:block">
              Game<span className="text-danger">Guide</span>Hub
            </span>
          </Link>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
