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
        <h2 className="text-4xl font-bold">Educación continua</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/Colaboración_Insignia.png"
          alt=""
          info={{
            title: "Colaboración y negociación efectiva",
            description: "Emitido por Tecnologico de Monterrey",
            details: [
              { 
                title: "Descripción", 
                content: "Los participantes serán capaces de desarrollar habilidades efectivas de colaboración y negociación, así como a comunicarse de manera constructiva, resolver conflictos y alcanzar acuerdos mutuamente beneficiosos en entornos profesionales y personales." 
              },
              { title: "Tags", content: "Comunicación efectiva, Integración organizacional, Generación de compromiso organizacional, Trabajo en equipo, Negociación exitosa, Manejo de conflictos" },
              { title: "Fecha de emisión", content: "2024/11/15" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/PsicologíaPositiva_Insignia.png"
          alt=""
          info={{
            title: "Psicología positiva y propósito de vida",
            description: "Emitido por Tecnologico de Monterrey",
            details: [
              { 
                title: "Descripción", 
                content: "Los participantes serán capaces de comprender los principios fundamentales de la psicología positiva y aplicarlos para descubrir y cultivar su propósito de vida." 
              },
              { title: "Tags", content: "Fortalezas personales, Bienestar emocional, Vida positiva, Reconocimiento de emociones, Sentido de vida" },
              { title: "Fecha de emisión", content: "2024/06/05" },
            ],
          }}
        />
        
        {/* <PhotoCard
          src="/TecLearnerWallet_Mockup/Educación Continua/effective-leader.png"
          alt=""
          info={{
            title: "Effective Leader Essentials",
            description: "Tecnológico de Monterrey - Educación Continua",
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
          alt=""
          info={{
            title: "Project Manager Essentials",
            description: "Tecnológico de Monterrey - Educación Continua",
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
          alt=""
          info={{
            title: "Marketing Specialist Fundamentals",
            description: "Tecnológico de Monterrey - Educación Continua",
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
          alt=""
          info={{
            title: "Análisis Básico de Datos Utilizando Power BI",
            description: "Tecnológico de Monterrey - Educación Continua",
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
          alt=""
          info={{
            title: "Fundamentos y Visión Financiera",
            description: "Tecnológico de Monterrey - Educación Continua",
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
        /> */}
      </div>
    </div>
  )
} 