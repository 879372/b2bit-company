import { cn } from "@/lib/utils"
import * as React from "react"

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-md px-3 text-sm",
        "bg-gray-100 border-0 shadow-sm text-gray-800",
        "disabled:opacity-100 disabled:cursor-default disabled:text-gray-600",
        className
      )}
      {...props}
    />
  )
}

export { Input }
