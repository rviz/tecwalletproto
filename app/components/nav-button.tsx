"use client"

import { ReactNode } from "react"

interface NavButtonProps {
  icon: ReactNode
  label: string
  isActive: boolean
  onClick?: () => void
}

export function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full relative ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {isActive && (
        <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
      )}
      <div className={`${isActive ? "bg-primary/10" : ""} p-4 rounded-full transition-colors`}>
        {icon}
      </div>
      <span className="text-xl mt-2 font-medium">{label}</span>
      {isActive && (
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-primary rounded-full" />
      )}
    </button>
  )
} 