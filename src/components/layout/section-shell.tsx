import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
  size?: "default" | "wide";
  align?: "center" | "left" | "right";
}>;

export function SectionShell({
  id,
  className,
  size = "default",
  align = "center",
  children,
}: Props) {
  return (
    <section id={id} className={cn("py-14 sm:py-20", className)}>
      <div
        className={cn(
          "w-full px-5 sm:px-6",
          size === "wide" ? "max-w-7xl" : "max-w-6xl",

          // alignment of the section container within the page
          align === "center" && "mx-auto",
          align === "left" && "mr-auto ml-0",
          align === "right" && "ml-auto mr-0"
        )}
      >
        {children}
      </div>
    </section>
  );
}
