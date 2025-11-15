import * as React from "react"
import { cn } from "@/lib/utils"
import GradientBorder from "./gradientBorder"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <GradientBorder color="border">
    <div
        ref={ref}
        className={className}
        {...props}
    />
  </GradientBorder>
))
Card.displayName = "Card"

export { Card }
