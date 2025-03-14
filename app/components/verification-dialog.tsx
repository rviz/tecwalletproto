"use client"

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface VerificationDialogProps {
  verification: any | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function VerificationDialog({ verification, open, onOpenChange }: VerificationDialogProps) {
  if (!verification) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {verification.title}
            <span 
              className={verification.status === "verified" 
                ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium" 
                : "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"}
            >
              {verification.status === "verified" ? "Verificado" : "Pendiente"}
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Verification Image */}
          <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden">
            <Image
              src={verification.imageSrc}
              alt={verification.title}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          
          {/* Verification Details */}
          <div className="space-y-2">
            {verification.details.map((detail: any, index: number) => (
              <div key={index} className="flex justify-between border-b border-gray-100 py-2">
                <span className="font-medium text-gray-600">{detail.title}:</span>
                <span className="text-gray-800">{detail.content}</span>
              </div>
            ))}
          </div>
        </div>
        
        <DialogFooter className="sm:justify-center mt-4">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Cerrar
          </Button>
          {verification.status === "verified" && (
            <Button 
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Descargar comprobante
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
