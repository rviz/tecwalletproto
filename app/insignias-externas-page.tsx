"use client"

import { PhotoCard } from "./components/photo-card"
import { BackButton } from "./components/back-button"

interface InsigniasExternasPageProps {
  onBack?: () => void
}

export default function InsigniasExternasPage({ onBack }: InsigniasExternasPageProps) {
  return (
    <div className="relative space-y-12">
      {onBack && <BackButton onClick={onBack} />}
      
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Insignias y diplomas externos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Externos/PowerBI.png"
          alt=""
          info={{
            title: "PL-300T00A: Microsoft Power BI Data Analyst",
            description: "Certificación profesional de Microsoft",
            details: [
              { title: "Fecha de obtención", content: "15 de noviembre de 2022" },
              { title: "Validez", content: "2 años, renovable mediante examen" },
              { title: "ID de credencial", content: "MS-PBI-DA-78945" },
              { title: "Competencias", content: "Análisis de datos, visualización, modelado de datos, DAX" },
            ],
          }}
        />
      </div>
    </div>
  )
} 