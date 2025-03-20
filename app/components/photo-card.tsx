"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight, X, Award, CheckCircle } from "lucide-react"

interface DetailItem {
  title: string
  content: string
}

interface PhotoCardInfo {
  title: string
  description: string
  details: DetailItem[]
}

interface PhotoCardProps {
  src: string
  alt: string
  info: PhotoCardInfo
}
export function PhotoCard({ src, alt, info }: PhotoCardProps) {
  const [open, setOpen] = useState(false)
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  const [certificateDialogOpen, setCertificateDialogOpen] = useState(false)
  
  // Find the emission date from details
  const getEmissionDate = () => {
    const dateDetail = info.details.find(d => 
      d.title === "Fecha de Emisión" || d.title === "Fecha de emisión"
    )
    return dateDetail?.content || "Fecha no disponible"
  }

  return (
    <>
      <Card className="overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all border-none" onClick={() => setOpen(true)}>
        <CardContent className="p-0">
          <div className="relative h-80 w-full aspect-square">
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
            <div className="absolute inset-0"></div>
            <h3 className="absolute bottom-4 left-6 text-white text-3xl font-medium">{alt}</h3>
          </div>
          {/* <div className="px-4 flex justify-between items-center">
            <p className="text-xl text-muted-foreground">Ver detalles</p>
            <ChevronRight className="h-8 w-8 text-muted-foreground" />
          </div> */}
        </CardContent>
      </Card>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="max-h-[90vh]">
          <div className="mx-auto w-full max-w-4xl">
            <DrawerHeader className="px-8 pt-8">
              <DrawerTitle className="text-4xl">{info.title}</DrawerTitle>
              <DrawerDescription className="text-xl mt-2">{info.description}</DrawerDescription>
            </DrawerHeader>
            <div className="px-8 pb-8">
              <div 
                className="relative mx-auto h-[400px] w-[400px] mb-8 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setImageDialogOpen(true)}
              >
                <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Ver imagen completa
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {info.details.map((detail, index) => (
                  <div key={index} className="border-b border-gray-100 dark:border-gray-800 pb-6">
                    <h4 className="text-2xl font-medium">{detail.title}</h4>
                    <p className="text-xl text-muted-foreground mt-2">{detail.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <DrawerFooter className="px-8 pt-4 pb-12">
              <Button className="w-full text-xl py-6" onClick={() => setCertificateDialogOpen(true)}>Ver Certificado</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full text-xl py-6 mt-4">
                  Cerrar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <div className="relative w-full h-[90vh] bg-black/80 flex items-center justify-center">
            <Image 
              src={src || "/placeholder.svg"} 
              alt={alt} 
              fill 
              className="object-contain p-4" 
            />
            <DialogClose className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">
              <X className="h-8 w-8" />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog open={certificateDialogOpen} onOpenChange={setCertificateDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              Verify Badge
            </DialogTitle>
            {/* <DialogDescription className="text-xl mt-2">
              Información del certificado
            </DialogDescription> */}
          </DialogHeader>
          
          <div className="py-6 space-y-6">
            <div className="border-b pb-4 flex items-start gap-4">
              <CheckCircle className="h-10 w-10 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-3xl font-medium">{info.title}</p>
                <p className="text-xl text-muted-foreground">This badged has been verified by Canvas Badges and its information is valid.</p>
              </div>
            </div>

            <div className="border-b pb-4 flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Issued By</h3>
                <p className="text-2xl text-muted-foreground">{info.description}</p>
              </div>
            </div>

            <div className="border-b pb-4 flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Expires On</h3>
                <p className="text-2xl text-muted-foreground">Does not expire</p>
              </div>
            </div>
            
            <div className="border-b pb-4 flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Issued On</h3>
                <p className="text-2xl text-muted-foreground">{getEmissionDate()}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 px-8 pt-4 pb-12">
            <Button className="w-full text-xl py-6">Visualizar en Canvas Badges</Button>
            <DialogClose asChild>
              <Button variant="outline" className="w-full text-xl py-6">Cerrar</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 