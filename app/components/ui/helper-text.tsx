import { clsx } from "clsx";
import type { ReactNode } from "react";

interface HelperTextProps {
  children: ReactNode;
  className?: string;
}

export default function HelperText({ children, className = "" }: HelperTextProps) {
  return <small className={clsx("text-gray-500 text-xs italic", className)}>{children}</small>;
}
