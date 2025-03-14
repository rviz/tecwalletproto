"use client"

import { PhotoCard } from "./components/photo-card"
import { BackButton } from "./components/back-button"

interface EducacionContinuaPageProps {
  onBack?: () => void
}

export default function EducacionContinuaPage({ onBack }: EducacionContinuaPageProps) {
  return (
    <div className="relative space-y-16">
      <div className="flex items-center justify-between">
        {onBack && <BackButton onClick={onBack} />}
        <h2 className="text-4xl font-bold">Educación continua</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Insignia.png"
          alt="Psicología Positiva"
          info={{
            title: "Certificado en Psicología Positiva",
            description: "Tecnológico de Monterrey - Educación Continua",
            details: [
              { title: "Duración", content: "40 horas" },
              { title: "Fecha de emisión", content: "Enero 2023" },
              { title: "Instructor", content: "Dra. María González" },
              {
                title: "Habilidades adquiridas",
                content: "Bienestar psicológico, resiliencia, mindfulness, fortalezas de carácter",
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Insignia.png"
          alt="Colaboración Efectiva"
          info={{
            title: "Certificado en Colaboración Efectiva",
            description: "Tecnológico de Monterrey - Educación Continua",
            details: [
              { title: "Duración", content: "30 horas" },
              { title: "Fecha de emisión", content: "Marzo 2023" },
              { title: "Instructor", content: "Dr. Carlos Ramírez" },
              {
                title: "Competencias",
                content: "Trabajo en equipo, comunicación asertiva, resolución de conflictos, liderazgo colaborativo",
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Verificación.png"
          alt="Verificación Psicología Positiva"
          info={{
            title: "Verificación de Certificado en Psicología Positiva",
            description: "Comprobante de validez oficial",
            details: [
              { title: "Emisor", content: "Tecnológico de Monterrey" },
              { title: "Fecha de verificación", content: "Enero 2023" },
              { title: "ID de verificación", content: "VER-PP-2023-01" },
              { title: "Estado", content: "Verificado y válido" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Verificación.png"
          alt="Verificación Colaboración Efectiva"
          info={{
            title: "Verificación de Certificado en Colaboración Efectiva",
            description: "Comprobante de validez oficial",
            details: [
              { title: "Emisor", content: "Tecnológico de Monterrey" },
              { title: "Fecha de verificación", content: "Marzo 2023" },
              { title: "ID de verificación", content: "VER-CE-2023-03" },
              { title: "Estado", content: "Verificado y válido" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Accredible.png"
          alt="Accredible Psicología Positiva"
          info={{
            title: "Credencial Accredible - Psicología Positiva",
            description: "Plataforma Accredible de verificación",
            details: [
              { title: "Emisor", content: "Tecnológico de Monterrey" },
              { title: "Fecha de emisión", content: "Enero 2023" },
              { title: "Plataforma", content: "Accredible Certification Platform" },
              { title: "Estado", content: "Activo y verificado" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Accredible.png"
          alt="Accredible Colaboración Efectiva"
          info={{
            title: "Credencial Accredible - Colaboración Efectiva",
            description: "Plataforma Accredible de verificación",
            details: [
              { title: "Emisor", content: "Tecnológico de Monterrey" },
              { title: "Fecha de emisión", content: "Marzo 2023" },
              { title: "Plataforma", content: "Accredible Certification Platform" },
              { title: "Estado", content: "Activo y verificado" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/effective-leader.png"
          alt="Effective Leader"
          info={{
            title: "Certificado en Liderazgo Efectivo",
            description: "Tecnológico de Monterrey - Educación Ejecutiva",
            details: [
              { title: "Duración", content: "60 horas" },
              { title: "Fecha de emisión", content: "Mayo 2023" },
              { title: "Modalidad", content: "Online con sesiones sincrónicas" },
              {
                title: "Competencias",
                content: "Liderazgo estratégico, gestión del cambio, toma de decisiones, desarrollo de equipos de alto rendimiento",
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/Project-Manager-Essentials.png"
          alt="Project Manager Essentials"
          info={{
            title: "Certificado en Gestión de Proyectos",
            description: "Tecnológico de Monterrey - Educación Ejecutiva",
            details: [
              { title: "Duración", content: "50 horas" },
              { title: "Fecha de emisión", content: "Junio 2023" },
              { title: "Instructor", content: "Dra. Laura Martínez" },
              {
                title: "Competencias",
                content: "Metodologías ágiles, gestión de recursos, planificación estratégica, seguimiento y control",
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/Marketing-Specialist--Fundamentals.png"
          alt="Marketing Specialist Fundamentals"
          info={{
            title: "Certificado en Fundamentos de Marketing",
            description: "Tecnológico de Monterrey - Educación Ejecutiva",
            details: [
              { title: "Duración", content: "40 horas" },
              { title: "Fecha de emisión", content: "Agosto 2023" },
              { title: "Instructor", content: "Dr. Miguel Ángel Torres" },
              {
                title: "Competencias",
                content: "Marketing digital, estrategias de mercado, análisis de consumidor, branding",
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/DATA-2.png"
          alt="Data Analytics"
          info={{
            title: "Certificado en Análisis de Datos",
            description: "Tecnológico de Monterrey - Educación Ejecutiva",
            details: [
              { title: "Duración", content: "55 horas" },
              { title: "Fecha de emisión", content: "Septiembre 2023" },
              { title: "Instructor", content: "Dr. Alejandro Rodríguez" },
              {
                title: "Competencias",
                content: "Análisis estadístico, visualización de datos, Python, machine learning básico",
              },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/FINANZAS.png"
          alt="Finanzas para No Financieros"
          info={{
            title: "Certificado en Finanzas para No Financieros",
            description: "Tecnológico de Monterrey - Educación Ejecutiva",
            details: [
              { title: "Duración", content: "45 horas" },
              { title: "Fecha de emisión", content: "Julio 2023" },
              { title: "Instructor", content: "Dr. Roberto Sánchez" },
              {
                title: "Competencias",
                content: "Análisis financiero, presupuestos, valoración de proyectos, interpretación de estados financieros",
              },
            ],
          }}
        />
      </div>
    </div>
  )
} 