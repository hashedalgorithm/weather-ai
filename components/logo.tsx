import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

type LogoProps = ComponentPropsWithoutRef<"div"> & {
  variant?: "only-icon" | "full";
};

const Logo = ({ variant = "full", className, ...props }: LogoProps) => {
  return (
    <div className={cn(`flex gap-3 items-center`, className)} {...props}>
      <Brain />
      {variant === "full" && <p className="font-bold">Weather AI</p>}
    </div>
  );
};

export default Logo;
