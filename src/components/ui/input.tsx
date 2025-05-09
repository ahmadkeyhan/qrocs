import * as React from "react"
import { Eye,EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "./button"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [showPassword,setShowPassWord] = useState(false)
    if (type !== "password") {
      return (
        <div className="relative">
            <input
                dir="rtl"
                type={type}
                className={cn(
                    "flex flex-row-reverse h-10 w-full rounded-full bg-primary/10 px-6 py-2 text-right text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
                    className
                )}
                ref={ref}
                {...props}
                />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      )
    } else {
      return (
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className={cn(
              "flex h-10 w-full rounded-mdbg-primary/10 px-3 py-2 text-right text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
              className
            )}
            ref={ref}
            {...props}
          />
          <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassWord(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
            </Button>
        </div>
      )
    }
  }
)
Input.displayName = "Input"

export { Input }
