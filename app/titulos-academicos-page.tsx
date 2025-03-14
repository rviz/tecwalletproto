"use client"

import { PhotoCard } from "./components/photo-card"
import { BackButton } from "./components/back-button"

interface TitulosAcademicosPageProps {
  onBack?: () => void
}

export default function TitulosAcademicosPage({ onBack }: TitulosAcademicosPageProps) {
  return (
    <div className="relative space-y-12">
      {onBack && <BackButton onClick={onBack} />}
      
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Título y grados académicos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Título Universitario/Título_Profesional.png"
          alt="Título Profesional"
          info={{
            title: "Título Profesional en Ingeniería",
            description: "Instituto Tecnológico y de Estudios Superiores de Monterrey, 2018-2022",
            details: [
              { title: "Grado", content: "Ingeniero Físico Industrial" },
              { title: "Fecha de expedición", content: "Junio 2022" },
              { title: "Cédula Profesional", content: "12345678" },
              { 
                title: "Verificación", 
                content: "Este título cuenta con verificación digital mediante tecnología blockchain" 
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Título Universitario/Prepa_Verificacion.png"
          alt="Diploma de Preparatoria"
          info={{
            title: "Diploma de Bachillerato",
            description: "Prepa Tec, Campus Monterrey, 2015-2018",
            details: [
              { title: "Programa", content: "Bachillerato Internacional" },
              { title: "Promedio", content: "95/100" },
              { title: "Fecha de expedición", content: "Mayo 2021" },
              { 
                title: "Verificación", 
                content: "Este diploma cuenta con verificación digital mediante tecnología blockchain" 
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Título Universitario/Titulo_Blockcerts.png"
          alt="Certificado Blockchain"
          info={{
            title: "Certificado Blockchain del Título Profesional",
            description: "Verificación digital mediante Blockcerts",
            details: [
              { title: "Emisor", content: "Instituto Tecnológico y de Estudios Superiores de Monterrey" },
              { title: "Fecha de emisión", content: "Julio 2022" },
              { title: "Tecnología", content: "Blockcerts v2.0" },
              { 
                title: "Estado", 
                content: "Verificado y válido" 
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Título Universitario/Titulo_Verificación.png"
          alt="Verificación de Título"
          info={{
            title: "Verificación de Título Profesional",
            description: "Comprobante de validez oficial",
            details: [
              { title: "Institución verificadora", content: "Secretaría de Educación Pública" },
              { title: "Fecha de verificación", content: "Julio 2022" },
              { title: "ID de verificación", content: "VER-2022-07-15-001" },
              { 
                title: "Estado", 
                content: "Documento auténtico y válido" 
              },
            ],
          }}
        />
      </div>
    </div>
  )
} 