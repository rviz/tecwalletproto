"use client"

import { PhotoCard } from "./components/photo-card"
import { BackButton } from "./components/back-button"

interface InsigniasAcademicasPageProps {
  onBack?: () => void
}

export default function InsigniasAcademicasPage({ onBack }: InsigniasAcademicasPageProps) {
  return (
    <div className="relative space-y-8">
      <div className="flex items-center justify-between">
        {onBack && <BackButton onClick={onBack} />}
      </div>

      <h2 className="text-4xl font-bold">Competencias Disciplinares de Ingeniería Física Industrial</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0100.svg"
          alt=""
          info={{
            title: "Solución de problemas complejos",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "SSF0100 - Fundamentos de Seguridad Informática" },
              { title: "Tags", content: "Análisis de vulnerabilidades, protección de datos, criptografía básica" },
              { title: "Fecha de Emisión", content: "Mayo 2022" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0200.svg"
          alt=""
          info={{
            title: "Construcción de modelos",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "SSF0200 - Fundamentos de Seguridad Informática" },
              { title: "Tags", content: "Análisis de vulnerabilidades, protección de datos, criptografía básica" },
              { title: "Fecha de Emisión", content: "Mayo 2022" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0300.svg"
          alt=""
          info={{
            title: "Caracterización de fenómenos físicos",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "SSF0300 - Fundamentos de Seguridad Informática" },
              { title: "Tags", content: "Análisis de vulnerabilidades, protección de datos, criptografía básica" },
              { title: "Fecha de Emisión", content: "Mayo 2022" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF400.svg"
          alt=""
          info={{
            title: "Identificación de fenómenos físicos",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "SSF400 - Fundamentos de Seguridad Informática" },
              { title: "Tags", content: "Análisis de vulnerabilidades, protección de datos, criptografía básica" },
              { title: "Fecha de Emisión", content: "Mayo 2022" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0500.svg"
          alt=""
          info={{
            title: "Comunicación de información",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "SSF0500 - Fundamentos de Seguridad Informática" },
              { title: "Tags", content: "Análisis de vulnerabilidades, protección de datos, criptografía básica" },
              { title: "Fecha de Emisión", content: "Mayo 2022" },
            ],
          }}
        />
      </div>
      
      <h2 className="text-4xl font-bold">Competencias Transversales</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
      <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0100.svg"
          alt=""
          info={{
            title: "Autoconocimiento y gestión",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SEG0100 - Fundamentos de Seguridad de la Información" },
              { title: "Fecha de Emisión", content: "Enero 2023" },
              { title: "Competencias", content: "Gestión de riesgos, políticas de seguridad, ISO 27001" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0200.svg"
          alt=""
          info={{
            title: "Emprendimiento innovador",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SEG0200 - Seguridad Operacional" },
              { title: "Fecha de Emisión", content: "Febrero 2023" },
              { title: "Competencias", content: "Monitoreo de seguridad, respuesta a incidentes, SOC" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0600.svg"
          alt=""
          info={{
            title: "Comunicación",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "SEG0600 - Seguridad Avanzada" },
              { title: "Fecha de Emisión", content: "Marzo 2023" },
              { title: "Competencias", content: "Análisis forense, threat hunting, red teaming" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
      </div>
      <h2 className="text-4xl font-bold">Experiencias Formativas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
      <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/F0122.svg"
          alt=""
          info={{
            title: "Fotónica y tecnologías cuánticas",
            description: "Otorgada por el Tecnológico de Monterrey",
            details: [
              { title: "Curso", content: "F0122 - Fundamentos de Ciberseguridad" },
              { title: "Fecha de Emisión", content: "Abril 2023" },
              { title: "Competencias", content: "Principios básicos, amenazas comunes, controles de seguridad" },
              { title: "Validez", content: "Certificación digital verificable mediante blockchain" },
            ],
          }}
        />
      </div>
    </div>
  )
} 