import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/components/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100/90",
        destructive:
          "bg-red-500 text-slate-100 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-100 dark:hover:bg-red-900/90",
        destructiveOutline:
          "border border-red-500 bg-transparent hover:bg-red-500 text-red-500 hover:text-slate-50 dark:border-red-900 dark:bg-transparent dark:hover:bg-red-900 dark:hover:text-slate-100",
        outline:
          "border text-neutral-800 border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:text-slate-500 dark:border-slate-600 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        secondary:
          "bg-blue-100 border border-blue-400 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        destructiveGhost:
          "text-red-600 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-100",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      <span className="flex items-center gap-2 justify-center">{children}</span>
    </Button>
  );
});
Button.displayName = "ButtonWithIcon";

export { Button, ButtonWithIcon, buttonVariants };
