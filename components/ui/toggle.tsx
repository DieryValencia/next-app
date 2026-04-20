"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, pressed = false, onPressedChange, ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(pressed)

    const handleClick = () => {
      const newPressed = !isPressed
      setIsPressed(newPressed)
      onPressedChange?.(newPressed)
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isPressed ? "bg-accent text-accent-foreground" : "bg-transparent",
          className
        )}
        {...props}
      />
    )
  }
)

Toggle.displayName = "Toggle"

export { Toggle }

