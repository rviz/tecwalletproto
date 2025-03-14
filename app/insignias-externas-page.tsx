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
          alt="Certificación Power BI"
          info={{
            title: "Microsoft Certified: Power BI Data Analyst Associate",
            description: "Certificación profesional de Microsoft",
            details: [
              { title: "Fecha de obtención", content: "15 de noviembre de 2022" },
              { title: "Validez", content: "2 años, renovable mediante examen" },
              { title: "ID de credencial", content: "MS-PBI-DA-78945" },
              { title: "Competencias", content: "Análisis de datos, visualización, modelado de datos, DAX" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Externos/PowerBI_Accredible.png"
          alt="Verificación Power BI Accredible"
          info={{
            title: "Verificación Accredible - Power BI",
            description: "Plataforma Accredible de verificación de credenciales",
            details: [
              { title: "Emisor", content: "Microsoft Learning" },
              { title: "Fecha de emisión", content: "15 de noviembre de 2022" },
              { title: "Plataforma", content: "Accredible Certification Platform" },
              { title: "Estado", content: "Activo y verificado" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Externos/PowerBI_Verificación.png"
          alt="Verificación Power BI"
          info={{
            title: "Verificación de Certificación Power BI",
            description: "Comprobante de validez oficial",
            details: [
              { title: "Emisor", content: "Microsoft Certification" },
              { title: "Fecha de verificación", content: "15 de noviembre de 2022" },
              { title: "ID de verificación", content: "VER-PBI-2022-11" },
              { title: "Estado", content: "Verificado y válido" },
            ],
          }}
        />
      </div>
    </div>
  )
} 