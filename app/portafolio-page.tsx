"use client"

import { useState } from "react"
import Image from "next/image"
import { BackButton } from "./components/back-button"
import { Card, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { ChevronRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "./components/dialog"

interface PortafolioPageProps {
  onBack?: () => void
}

// Sample portafolio data - replace with actual data
const pendingPortafolio = [
  {
    id: "ver-001",
    title: "Insignia Académica - SSF0100",
    status: "pending",
    date: "2025-03-10",
    type: "Insignia Académica",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Curso", content: "SSF0100 - Fundamentos de Seguridad Informática" },
      { title: "Fecha de solicitud", content: "10 de marzo de 2025" },
      { title: "Estatus", content: "En proceso de verificación" },
      { title: "Tiempo estimado", content: "3-5 días hábiles" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SSF0100_Verificación.png"
  }
]

const completedPortafolio = [
  {
    id: "ver-009",
    title: "Verificación Accredible - Power BI",
    status: "verified",
    date: "2022-11-15",
    type: "Insignia Externa",
    issuer: "Microsoft Learning",
    details: [
      { title: "Emisor", content: "Microsoft Learning" },
      { title: "Fecha de emisión", content: "15 de noviembre de 2022" },
      { title: "Plataforma", content: "Accredible Certification Platform" },
      { title: "Estado", content: "Activo y verificado" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Externos/PowerBI_Accredible.png"
  },
  {
    id: "ver-010",
    title: "Verificación de Certificación Power BI",
    status: "verified",
    date: "2022-11-15",
    type: "Insignia Externa",
    issuer: "Microsoft Certification",
    details: [
      { title: "Emisor", content: "Microsoft Certification" },
      { title: "Fecha de verificación", content: "15 de noviembre de 2022" },
      { title: "ID de verificación", content: "VER-PBI-2022-11" },
      { title: "Estado", content: "Verificado y válido" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Externos/PowerBI_Verificación.png"
  },
  {
    id: "ver-003",
    title: "Certificado Blockchain del Título",
    status: "verified",
    date: "2022-07-01",
    type: "Título Académico",
    issuer: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
    details: [
      { title: "Emisor", content: "Instituto Tecnológico y de Estudios Superiores de Monterrey" },
      { title: "Fecha de emisión", content: "Julio 2022" },
      { title: "Tecnología", content: "Blockcerts v2.0" },
      { title: "Estado", content: "Verificado y válido" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Título Universitario/Titulo_Blockcerts.png"
  },
  {
    id: "ver-004",
    title: "Verificación de Título Profesional",
    status: "verified",
    date: "2022-07-15",
    type: "Título Académico",
    issuer: "Secretaría de Educación Pública",
    details: [
      { title: "Institución verificadora", content: "Secretaría de Educación Pública" },
      { title: "Fecha de verificación", content: "Julio 2022" },
      { title: "ID de verificación", content: "VER-2022-07-15-001" },
      { title: "Estado", content: "Documento auténtico y válido" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Título Universitario/Titulo_Verificación.png"
  },
  {
    id: "ver-005",
    title: "Verificación de Certificado en Psicología Positiva",
    status: "verified",
    date: "2023-01-15",
    type: "Educación Continua",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Emisor", content: "Tecnológico de Monterrey" },
      { title: "Fecha de verificación", content: "Enero 2023" },
      { title: "ID de verificación", content: "VER-PP-2023-01" },
      { title: "Estado", content: "Verificado y válido" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Verificación.png"
  },
  {
    id: "ver-006",
    title: "Verificación de Certificado en Colaboración Efectiva",
    status: "verified",
    date: "2023-03-15",
    type: "Educación Continua",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Emisor", content: "Tecnológico de Monterrey" },
      { title: "Fecha de verificación", content: "Marzo 2023" },
      { title: "ID de verificación", content: "VER-CE-2023-03" },
      { title: "Estado", content: "Verificado y válido" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Verificación.png"
  },
  {
    id: "ver-007",
    title: "Credencial Accredible - Psicología Positiva",
    status: "verified",
    date: "2023-01-10",
    type: "Educación Continua",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Emisor", content: "Tecnológico de Monterrey" },
      { title: "Fecha de emisión", content: "Enero 2023" },
      { title: "Plataforma", content: "Accredible Certification Platform" },
      { title: "Estado", content: "Activo y verificado" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Accredible.png"
  },
  {
    id: "ver-008",
    title: "Credencial Accredible - Colaboración Efectiva",
    status: "verified",
    date: "2023-03-10",
    type: "Educación Continua",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Emisor", content: "Tecnológico de Monterrey" },
      { title: "Fecha de emisión", content: "Marzo 2023" },
      { title: "Plataforma", content: "Accredible Certification Platform" },
      { title: "Estado", content: "Activo y verificado" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Accredible.png"
  }
]

export default function PortafolioPage({ onBack }: PortafolioPageProps) {
  const [selectedPortafolio, setSelectedPortafolio] = useState<any | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("completed")

  const handlePortafolioClick = (portafolio: any) => {
    setSelectedPortafolio(portafolio)
    setDrawerOpen(true)
  }

  return (
    <div className="relative space-y-8">
      <div className="flex items-center justify-between">
        {onBack && <BackButton onClick={onBack} />}
        <h2 className="text-4xl font-bold">Portafolios</h2>
      </div>

      <div className="w-full">
        {/* Custom Tab Navigation */}
        <div className="flex w-full border-b mb-16">
        <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 text-4xl py-6 font-medium ${activeTab === "completed" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
          >
            Completadas ({completedPortafolio.length})
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`flex-1 text-4xl py-6 font-medium ${activeTab === "pending" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
          >
            Pendientes ({pendingPortafolio.length})
          </button>
        </div>
        
        {/* Tab Content */}
        {activeTab === "pending" && (
          <div className="space-y-8">
            {pendingPortafolio.map((portafolio) => (
              <Card 
                key={portafolio.id}
                className="hover:shadow-md transition-shadow cursor-pointer p-8"
                onClick={() => handlePortafolioClick(portafolio)}
              >
                <div className="flex items-center justify-between">
                  <div className="relative h-24 w-24 flex-shrink-0 mr-6 rounded-lg overflow-hidden">
                    <Image 
                      src={portafolio.imageSrc}
                      alt={portafolio.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl font-medium">{portafolio.title}</h3>
                      <span 
                        className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-xl font-medium"
                      >
                        Pendiente
                      </span>
                    </div>
                    <div className="text-2xl text-gray-500 mt-2">
                      <span className="mr-4">{portafolio.type}</span>
                      <span>•</span>
                      <span className="mx-4">{portafolio.issuer}</span>
                      <span>•</span>
                      <span className="ml-4">{portafolio.date}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-12 w-12 text-gray-400 flex-shrink-0 ml-4" />
                </div>
              </Card>
            ))}
            {pendingPortafolio.length === 0 && (
              <div className="text-center py-16 text-gray-500 text-3xl">
                No hay elementos pendientes en el portafolio
              </div>
            )}
          </div>
        )}
        
        {activeTab === "completed" && (
          <div className="space-y-8">
            <Card className="hover:shadow-md transition-shadow cursor-pointer p-8">
              <div className="flex items-center justify-between">
                <div className="relative h-24 w-24 flex-shrink-0 mr-6 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">CV</span>
                </div>
                <CardHeader className="text-4xl font-bold flex-1 p-0">Mi CV</CardHeader>
                <ChevronRight className="h-12 w-12 text-gray-400 flex-shrink-0 ml-4" />
              </div>
            </Card>
            {completedPortafolio.map((portafolio) => (
              <Card 
                key={portafolio.id}
                className="hover:shadow-md transition-shadow cursor-pointer p-8"
                onClick={() => handlePortafolioClick(portafolio)}
              >
                <div className="flex items-center justify-between">
                  <div className="relative h-24 w-24 flex-shrink-0 mr-6 rounded-lg overflow-hidden">
                    <Image 
                      src={portafolio.imageSrc}
                      alt={portafolio.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl font-medium">{portafolio.title}</h3>
                      <span 
                        className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-xl font-medium"
                      >
                        Verificado
                      </span>
                    </div>
                    <div className="text-2xl text-gray-500 mt-2">
                      <span className="mr-4">{portafolio.type}</span>
                      <span>•</span>
                      <span className="mx-4">{portafolio.issuer}</span>
                      <span>•</span>
                      <span className="ml-4">{portafolio.date}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-12 w-12 text-gray-400 flex-shrink-0 ml-4" />
                </div>
              </Card>
            ))}
            {completedPortafolio.length === 0 && (
              <div className="text-center py-16 text-gray-500 text-3xl">
                No hay elementos completados en el portafolio
              </div>
            )}
          </div>
        )}
      </div>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="max-h-[90vh]">
          <div className="mx-auto w-full max-w-4xl">
            <DrawerHeader className="px-8 pt-8">
              <DrawerTitle className="text-4xl">{selectedPortafolio?.title}</DrawerTitle>
              <DrawerDescription className="text-xl mt-2 text-muted-foreground">
                <span>{selectedPortafolio?.type}</span>
                <span className="mx-2">•</span>
                <span>{selectedPortafolio?.issuer}</span>
                <span className="mx-2">•</span>
                <span>{selectedPortafolio?.date}</span>
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-8 pb-8">
              <div 
                className="relative mx-auto h-[400px] w-[400px] mb-8 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setImageDialogOpen(true)}
              >
                {selectedPortafolio && (
                  <Image 
                    src={selectedPortafolio.imageSrc} 
                    alt={selectedPortafolio.title} 
                    fill 
                    className="object-contain" 
                  />
                )}
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Ver imagen completa
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {selectedPortafolio?.details.map((detail: any, index: number) => (
                  <div key={index} className="border-b border-gray-100 dark:border-gray-800 pb-6">
                    <h4 className="text-2xl font-medium">{detail.title}</h4>
                    <p className="text-xl text-muted-foreground mt-2">{detail.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <DrawerFooter className="px-8 pt-4 pb-12">
              <Button className="w-full text-xl py-6">
                {selectedPortafolio?.status === "verified" ? "Descargar comprobante" : "Ver estado"}
              </Button>
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
            {selectedPortafolio && (
              <Image 
                src={selectedPortafolio.imageSrc} 
                alt={selectedPortafolio.title} 
                fill 
                className="object-contain p-4" 
              />
            )}
            <DialogClose className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">
              <X className="h-8 w-8" />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
