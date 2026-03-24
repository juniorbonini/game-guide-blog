import clsx from "clsx";
import { ContainerProps } from "./props";

export function Container({ children, containerClass }: ContainerProps) {
  return (
    <div
      className={clsx(
        "text-primary text-sm bg-background min-h-screen flex flex-col",
        containerClass,
      )}
    >
      <div className="mx-auto max-w-7xl flex flex-col flex-1 w-full">{children}</div>
    </div>
  );
}

