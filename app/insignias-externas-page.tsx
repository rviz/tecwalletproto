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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Externos/PowerBI.png"
          alt=""
          info={{
            title: "PL-300T00A: Microsoft Power BI Data Analyst",
            description: "Emitido por Microsoft",
            details: [
              { title: "Descripción", content: "This course covers the various methods and best practices that are in line with business and technical requirements for modeling, visualizing, and analyzing data with Power BI." },
              { title: "Fecha de emisión", content: "2024/04/10" },
            ],
          }}
        />
      </div>
    </div>
  )
} 