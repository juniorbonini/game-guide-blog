import Image from "next/image";
import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background p-5 justify-center bg-zinc-50 font-sans dark:bg-black">
      <header>
        <div>
          <div>
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-danger p-3 rounded-md items-center justify-center">
                <Gamepad2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-primary tracking-tight hidden sm:block">
                Game<span className="text-[#EF4444] ">Guide</span>Hub
              </span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
