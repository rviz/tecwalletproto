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
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0300.svg"
          alt=""
          info={{
            title: "Caracterización de fenómenos físicos",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "Caracteriza fenómenos físicos de la ciencia fundamental y aplicada, por medio de la realización de experimentos o prototipos." },
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
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
              { title: "Descripción", content: "Comunica información científica y tecnológica en el ámbito de la física e ingeniería física a una diversidad de públicos." },
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
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
              { title: "Descripción", content: "Construye modelos matemáticos y computacionales de sistemas físicos, mediante principios de la ciencia fundamental y recursos tecnológicos." },
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
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
              { title: "Descripción", content: "Identifica fenómenos físicos que potencialmente generan oportunidades de innovación científica y tecnológica." },
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SSF0100.svg"
          alt=""
          info={{
            title: "Solución de problemas complejos",
            description: "Emitido por Ingeniería Física Industrial",
            details: [
              { title: "Descripción", content: "Resuelve problemas complejos relacionados con fenómenos físicos mediante procedimientos innovadores." },
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
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
            description: "Emitido por Competencias Transversales",
            details: [
              { title: "Descripción", content: "Construye un proyecto de bienestar personal y profesional a lo largo de la vida mediante una reflexión responsable y la integración de recursos emocionales e intelectuales." },
              { title: "Tags", content: "Tec de Monterrey, Autoconocimiento, Bienestar y Autorregulación" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
            ],
          }}
        />
        <PhotoCard
          src="/TecLearnerWallet_Mockup/Insignias Académicas/SEG0200.svg"
          alt=""
          info={{
            title: "Emprendimiento innovador",
            description: "Emitido por Competencias Transversales",
            details: [
              { title: "Descripción", content: "Genera soluciones innovadoras y versátiles en entornos cambiantes que crean valor e impactan positivamente a la sociedad." },
              { title: "Tags", content: "Tec de Monterrey, Emprendimiento Consciente, Innovación" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
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
            description: "Emitido por Experiencias Formativas",
            details: [
              { title: "Descripción", content: "Escuela de Ingeniería y Ciencias" },
              { title: "Tags", content: "Tec de Monterrey, Ingeniería en Física Industrial, Pensamiento científico, Pensamiento crítico, Implementación de programas, Interpretación de fenómenos físicos, Implementación de experimentos, Diseño de sistemas de adquisición de datos" },
              { title: "Fecha de Emisión", content: "2024/04/29" },
              ],
          }}
        />
      </div>
    </div>
  )
} 