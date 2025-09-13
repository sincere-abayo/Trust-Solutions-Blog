import type * as React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Simple variant function since class-variance-authority might not be properly installed
const badgeVariants = (variant: string) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none"
  
  switch (variant) {
    case "secondary":
      return `${baseClasses} border-transparent bg-secondary text-white hover:bg-secondary/80`
    case "destructive":
      return `${baseClasses} border-transparent bg-destructive text-white hover:bg-destructive/80`
    case "outline":
      return `${baseClasses} text-primary border-primary bg-white hover:bg-primary/10`
    default:
      return `${baseClasses} border-transparent bg-primary text-white hover:bg-primary/80`
  }
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
  icon?: React.ReactNode
  "aria-label"?: string
}

function Badge({ className, variant = "default", icon, children, ...props }: BadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("animate-badge-fadein")
    }
  }, [])
  return (
    <div
      ref={ref}
      className={cn(
        badgeVariants(variant),
        "hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg transition-transform duration-200 animate-badge-fadein",
        className
      )}
      role="status"
      {...props}
    >
      {icon !== undefined ? (
        <span className="mr-1.5 flex items-center">{icon}</span>
      ) : (
        <span className="mr-1.5 flex items-center">
          {/* Default shield icon */}
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C10.28 2 10.56 2.07 10.8 2.21l6 3.43A1 1 0 0 1 18 6.5v4.7c0 4.18-3.06 7.86-7.2 8.74a1.01 1.01 0 0 1-.4 0C5.26 19.06 2.2 15.38 2.2 11.2V6.5a1 1 0 0 1 1.2-.86l6-3.43A1 1 0 0 1 10 2zm0 2.18L4.2 6.5v4.7c0 3.5 2.56 6.6 6 7.38 3.44-.78 6-3.88 6-7.38V6.5L10 4.18z" /></svg>
        </span>
      )}
      {children}
    </div>
  )
}

export { Badge }

// Tailwind animation (add to globals.css):
// @keyframes badge-fadein { from { opacity: 0; transform: translateY(-8px) scale(0.95); } to { opacity: 1; transform: none; } }
// .animate-badge-fadein { animation: badge-fadein 0.6s cubic-bezier(0.4,0,0.2,1) both; }
