"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="fixed top-28 left-8 z-50 h-16 w-16 rounded-full bg-white shadow-lg hover:bg-gray-100"
      onClick={onClick}
    >
      <ArrowLeft size={32} className="text-primary" />
    </Button>
  )
} 