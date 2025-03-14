"use client"

import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface VerificationItemProps {
  verification: {
    id: string
    title: string
    status: string
    date: string
    type: string
    issuer: string
  }
  onClick: () => void
}

export function VerificationItem({ verification, onClick }: VerificationItemProps) {
  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg">{verification.title}</h3>
            <span 
              className={verification.status === "verified" 
                ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium" 
                : "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"}
            >
              {verification.status === "verified" ? "Verificado" : "Pendiente"}
            </span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            <span className="mr-2">{verification.type}</span>
            <span>•</span>
            <span className="mx-2">{verification.issuer}</span>
            <span>•</span>
            <span className="ml-2">{verification.date}</span>
          </div>
        </div>
        <ChevronRight className="text-gray-400" />
      </CardContent>
    </Card>
  )
}
