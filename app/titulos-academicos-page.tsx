"use client"

import { PhotoCard } from "./components/photo-card"

interface TitulosAcademicosPageProps {
  onBack?: () => void
}

export default function TitulosAcademicosPage({ onBack }: TitulosAcademicosPageProps) {
  return (
    <div className="relative space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Título y grados académicos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Título Universitario/Título_Profesional.png"
          alt="Título Profesional"
          info={{
            title: "Ingeniero Físico Industrial",
            description: "Emitido por Tecnologico de Monterrey",
            details: [
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
              { title: "Fecha de Emisión", content: "2022/06/31" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Título Universitario/Prepa_Verificacion.png"
          alt="Diploma de Preparatoria"
          info={{
            title: "Bachillerato Programa Multicultural",
            description: "Emitido por Tecnologico de Monterrey",
            details: [
              { title: "Tags", content: "Tec de Monterrey, Bachillerato Programa Multicultural" },
              { title: "Fecha de Emisión", content: "2022/06/31" },
            ],
          }}
        />
      </div>
    </div>
  )
} 