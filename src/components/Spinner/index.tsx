import { Loader2Icon } from "lucide-react";
import { SpinnerProps } from "./props";
import clsx from "clsx";

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div className="flex items-center justify-center mt-[20%]">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={clsx("size-5 animate-spin", className)}
        {...props}
      />
    </div>
  );
}
