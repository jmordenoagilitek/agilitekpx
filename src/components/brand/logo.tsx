import LogoSvg from "@/components/pics/logo.svg?react";

type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className, title = "Agilitek" }: LogoProps) {
  return <LogoSvg className={className} role="img" aria-label={title} />;
}
