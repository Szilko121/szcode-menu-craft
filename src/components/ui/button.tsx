import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        control:
          "h-10 rounded-md border border-border bg-card px-4 text-sm text-card-foreground hover:border-primary hover:bg-accent",
        icon: "size-10 rounded-md border border-border bg-card text-card-foreground hover:border-primary hover:bg-accent",
        ghost: "h-10 rounded-md px-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
      },
    },
    defaultVariants: { variant: "control" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export { Button, buttonVariants };