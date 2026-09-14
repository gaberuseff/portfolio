import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted/70 animate-pulse rounded-2xl", className)}
      {...props}
    />
  )
}

export { Skeleton }
