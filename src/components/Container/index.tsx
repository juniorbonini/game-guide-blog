import clsx from "clsx";
import { ContainerProps } from "./props";

export function Container({ children, containerClass }: ContainerProps) {
  return (
    <div
      className={clsx(
        "text-primary text-sm bg-background min-h-screen",
        containerClass,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
}
