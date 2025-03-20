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
} from "@/components/ui/dialog"

interface PortafolioPageProps {
  onBack?: () => void
}

// Sample portafolio data - replace with actual data
const pendingPortafolio = [
  {
    id: "academic-006",
    title: "Autoconocimiento y gestión",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Competencias Transversales",
    details: [
      { title: "Descripción", content: "Construye un proyecto de bienestar personal y profesional a lo largo de la vida mediante una reflexión responsable y la integración de recursos emocionales e intelectuales." },
      { title: "Tags", content: "Tec de Monterrey, Autoconocimiento, Bienestar y Autorregulación" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SEG0100.svg"
  },
  {
    id: "edu-002",
    title: "Psicología positiva y propósito de vida",
    status: "verified",
    date: "2024/06/05",
    type: "Educación Continua",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Descripción", content: "Los participantes serán capaces de comprender los principios fundamentales de la psicología positiva y aplicarlos para descubrir y cultivar su propósito de vida." },
      { title: "Tags", content: "Fortalezas personales, Bienestar emocional, Vida positiva, Reconocimiento de emociones, Sentido de vida" },
      { title: "Fecha de emisión", content: "2024/06/05" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Insignia.png"
  },
  {
    id: "title-002",
    title: "Bachillerato Programa Multicultural",
    status: "verified",
    date: "2022/06/31",
    type: "Título Académico",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Tags", content: "Tec de Monterrey, Bachillerato Programa Multicultural" },
      { title: "Fecha de Emisión", content: "2022/06/31" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Título Universitario/Prepa_Verificacion.png"
  }
]

const completedPortafolio = [
  // Títulos Académicos
  {
    id: "title-001",
    title: "Ingeniero Físico Industrial",
    status: "verified",
    date: "2022/06/31",
    type: "Título Académico",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
      { title: "Fecha de Emisión", content: "2022/06/31" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Título Universitario/Título_Profesional.png"
  },
  // Insignias Académicas
  {
    id: "academic-001",
    title: "Caracterización de fenómenos físicos",
    status: "verified",
    date: "2024/04/29",
    issuer: "Ingeniería Física Industrial",
    details: [
      { title: "Descripción", content: "Caracteriza fenómenos físicos de la ciencia fundamental y aplicada, por medio de la realización de experimentos o prototipos." },
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SSF0300.svg"
  },
  {
    id: "academic-002",
    title: "Comunicación de información",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Ingeniería Física Industrial",
    details: [
      { title: "Descripción", content: "Comunica información científica y tecnológica en el ámbito de la física e ingeniería física a una diversidad de públicos." },
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SSF0500.svg"
  },
  {
    id: "academic-003",
    title: "Construcción de modelos",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Ingeniería Física Industrial",
    details: [
      { title: "Descripción", content: "Construye modelos matemáticos y computacionales de sistemas físicos, mediante principios de la ciencia fundamental y recursos tecnológicos." },
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SSF0200.svg"
  },
  {
    id: "academic-004",
    title: "Identificación de fenómenos físicos",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Ingeniería Física Industrial",
    details: [
      { title: "Descripción", content: "Identifica fenómenos físicos que potencialmente generan oportunidades de innovación científica y tecnológica." },
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SSF400.svg"
  },
  {
    id: "academic-005",
    title: "Solución de problemas complejos",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Ingeniería Física Industrial",
    details: [
      { title: "Descripción", content: "Resuelve problemas complejos relacionados con fenómenos físicos mediante procedimientos innovadores." },
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SSF0100.svg"
  },
  {
    id: "academic-007",
    title: "Emprendimiento innovador",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Competencias Transversales",
    details: [
      { title: "Descripción", content: "Genera soluciones innovadoras y versátiles en entornos cambiantes que crean valor e impactan positivamente a la sociedad." },
      { title: "Tags", content: "Tec de Monterrey, Emprendimiento Consciente, Innovación" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/SEG0200.svg"
  },
  {
    id: "academic-008",
    title: "Fotónica y tecnologías cuánticas",
    status: "verified",
    date: "2024/04/29",
    type: "Insignia Académica",
    issuer: "Experiencias Formativas",
    details: [
      { title: "Descripción", content: "Escuela de Ingeniería y Ciencias" },
      { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial, Pensamiento científico, Pensamiento crítico, Implementación de programas, Interpretación de fenómenos físicos, Implementación de experimentos, Diseño de sistemas de adquisición de datos" },
      { title: "Fecha de Emisión", content: "2024/04/29" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Académicas/F0122.svg"
  },

  // Educación Continua
  {
    id: "edu-001",
    title: "Colaboración y negociación efectiva",
    status: "verified",
    date: "2024/11/15",
    type: "Educación Continua",
    issuer: "Tecnológico de Monterrey",
    details: [
      { title: "Descripción", content: "Los participantes serán capaces de desarrollar habilidades efectivas de colaboración y negociación, así como a comunicarse de manera constructiva, resolver conflictos y alcanzar acuerdos mutuamente beneficiosos en entornos profesionales y personales." },
      { title: "Tags", content: "Comunicación efectiva, Integración organizacional, Generación de compromiso organizacional, Trabajo en equipo, Negociación exitosa, Manejo de conflictos" },
      { title: "Fecha de emisión", content: "2024/11/15" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Insignia.png"
  },

  // Insignias Externas
  {
    id: "external-001",
    title: "PL-300T00A: Microsoft Power BI Data Analyst",
    status: "verified",
    date: "2024/04/10",
    type: "Insignia Externa",
    issuer: "Microsoft",
    details: [
      { title: "Descripción", content: "This course covers the various methods and best practices that are in line with business and technical requirements for modeling, visualizing, and analyzing data with Power BI." },
      { title: "Fecha de emisión", content: "2024/04/10" },
    ],
    imageSrc: "/TecLearnerWallet_Mockup/Insignias Externos/PowerBI.png"
  },

  
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
        <h2 className="text-4xl font-bold">Portafolios</h2>
      </div>

      <div className="w-full">
        {/* Custom Tab Navigation */}
        <div className="flex w-full border-b mb-16">
        <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 text-4xl py-6 font-medium ${activeTab === "completed" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
          >
            Para empleadores ({completedPortafolio.length})
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`flex-1 text-4xl py-6 font-medium ${activeTab === "pending" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
          >
            Sin asignar ({pendingPortafolio.length})
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
                        Asignado
                      </span>
                    </div>
                    <div className="flex flex-col text-2xl text-gray-500 mt-2">
                      <span className="mb-1">{portafolio.issuer}</span>
                      <span>{portafolio.date}</span>
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
